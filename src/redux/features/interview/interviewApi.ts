import baseApi from "../api/baseApi";

const interviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createInterview: builder.mutation({
      query: (data) => ({
        url: "interviews/create-interview",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateInterviewMutation } = interviewApi;
