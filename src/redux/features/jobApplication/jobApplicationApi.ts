import baseApi from "../api/baseApi";

const jobApplicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyToJob: builder.mutation({
      query: ({ jobId }) => ({
        url: `/job-applications/candidate-apply-to-job/${jobId}`,
        method: "POST",
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const { useApplyToJobMutation } = jobApplicationApi;
