import baseApi from "../api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: "/jobs/create-job",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Jobs"],
    }),
    // get all jobs
    getAllJobs: builder.query({
      query: () => ({
        url: "/jobs",
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    getSingleJobById: builder.query({
      query: (jobId) => ({
        url: `/jobs/job/${jobId}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    getJobDetailsWithCandidatesAndInvitees: builder.query({
      query: (jobId) => ({
        url: `/jobs/job-details/${jobId}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    getMyPostedJobs: builder.query({
      query: () => ({
        url: "/jobs/my-posted",
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetAllJobsQuery,
  useGetSingleJobByIdQuery,
  useGetJobDetailsWithCandidatesAndInviteesQuery,
  useGetMyPostedJobsQuery,
} = jobApi;
