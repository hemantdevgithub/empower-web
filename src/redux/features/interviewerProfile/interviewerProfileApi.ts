import baseApi from "../api/baseApi";

const interviewerProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createInterviewerProfile: builder.mutation({
      query: (data) => ({
        url: "/interviewers/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    addInterviewerExperience: builder.mutation({
      query: (data) => ({
        url: "/interviewers/add-experience",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    updateInterviewerProfile: builder.mutation({
      query: (data) => ({
        url: "/interviewers/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    // get all interviewer profiles
    getAllInterviewerProfiles: builder.query({
      query: (query: string) => ({
        url: `/interviewers/all?${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateInterviewerProfileMutation,
  useAddInterviewerExperienceMutation,
  useUpdateInterviewerProfileMutation,
  useGetAllInterviewerProfilesQuery,
} = interviewerProfileApi;
