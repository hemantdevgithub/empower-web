import { RootState } from "@/redux/store";
import { TUser } from "@/types/global.type";
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import { logIn, logOut } from "../auth/authSlice";

const api_url = import.meta.env.VITE_API_URL;

// create custom base query
const baseQuery = fetchBaseQuery({
  baseUrl: api_url,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// get refresh token
const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (
  args,
  api,
  extraOptions
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.errorSources[0]?.message, {
      duration: 2000,
    });
  }

  if (result?.error?.status === 403) {
    toast.error(result?.error?.data?.errorSources[0]?.message, {
      duration: 2000,
    });
  }

  if (result?.error?.status === 401) {
    // send refresh
    const res = await fetch(`${api_url}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = jwtDecode(data?.data?.accessToken) as TUser;

      api.dispatch(logIn({ user, token: data?.data?.accessToken }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: [
    "Quiz",
    "Quizzes",
    "Lesson",
    "Lessons",
    "LessonsQuizzes",
    "Polls",
    "Poll",
    "Webinar",
    "Webinars",
    "Profile",
    "ResearchAndDevelopments",
    "Comment",
    "Prescreening",
    "Experience",
    "Education",
    "Skills",
    "Certificate",
    "ProfileSkills",
    "Jobs",
    "BasicProfile",
    "Candidates",
    "OTP",
    "Admin",
    "SRMAssignedJobs",
    "CandidateInvitedJobs",
    "SRMProfiles",
    "AssignedSRMProfiles",
    "CandidateProfiles",
    "Schedule",
  ],
});

export default baseApi;
