import baseApi from "../api/baseApi";

const candidateProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCandidateProfile: builder.mutation({
      query: (data) => ({
        url: "/candidates/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),

    //update my candidate profile data
    updateMyCandidateProfile: builder.mutation({
      query: (data) => ({
        url: "/candidates/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),

    // get all candidate profiles for job invitation
    getAllCandidateProfiles: builder.query({
      query: (jobAssignmentId) => ({
        url: `/candidates/get-all/${jobAssignmentId}`,
        method: "GET",
      }),
      providesTags: ["Candidates", "CandidateProfiles"],
    }),
    getAllCandidatesWithUser: builder.query({
      query: (query: string) => ({
        url: `/candidates/get-profiles-with-user?${query}`,
        method: "GET",
      }),
      providesTags: ["Candidates", "CandidateProfiles"],
    }),
    addCandidateExperience: builder.mutation({
      query: (data) => ({
        url: "/candidates/add-experience",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    getAllInvitedJobs: builder.query({
      query: () => ({
        url: "/job-invitation-to-candidate/candidate/all?status=PENDING&&status=REJECTED",
      }),
      providesTags: ["CandidateInvitedJobs"],
    }),
    getSingleCandidateInvitedJob: builder.query({
      query: (id) => ({
        url: `/job-invitation-to-candidate/candidate/${id}`,
      }),
    }),
    getAllCandidateAcceptedJobs: builder.query({
      query: () => ({
        url: "/job-invitation-to-candidate/candidate/all?status=ACCEPTED",
      }),
      providesTags: ["CandidateInvitedJobs"],
    }),
    changeInvitedJobStatus: builder.mutation({
      query: ({ jobId, status }) => ({
        url: `/job-invitation-to-candidate/change-status/${jobId}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["CandidateInvitedJobs"],
    }),
    // get all candidate profiles for a job
    getAllCandidatesForJobs: builder.query({
      query: (jobId) => ({
        url: `/candidates/job/${jobId}`,
        method: "GET",
      }),
    }),
    getAllCandidateForJobInvite: builder.query({
      query: (jobId) => ({
        url: `/candidates/job-invite/${jobId}`,
        method: "GET",
      }),
      providesTags: ["CandidateProfiles"],
    }),

    // get single candidate profile
    getSingleCandidate: builder.query({
      query: (candidateId) => ({
        url: `/candidates/${candidateId}`,
        method: "GET",
      }),
      providesTags: ["Candidates"],
    }),

    // get all candidate in a value chain
    getAllCandidateInValueChain: builder.query({
      query: (jobId) => ({
        url: `/candidates/value-chain/${jobId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCandidateProfileMutation,
  useGetAllCandidateProfilesQuery,
  useUpdateMyCandidateProfileMutation,
  useAddCandidateExperienceMutation,
  useGetAllInvitedJobsQuery,
  useChangeInvitedJobStatusMutation,
  useGetAllCandidateAcceptedJobsQuery,
  useGetSingleCandidateInvitedJobQuery,
  useGetAllCandidatesWithUserQuery,
  useGetAllCandidatesForJobsQuery,
  useGetAllCandidateForJobInviteQuery,
  useGetSingleCandidateQuery,
  useGetAllCandidateInValueChainQuery,
} = candidateProfileApi;
