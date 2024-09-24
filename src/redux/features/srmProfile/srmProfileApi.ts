import baseApi from "../api/baseApi";

const srmProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  create srm profile
    createSrmProfile: builder.mutation({
      query: (data) => ({
        url: "/srms/create",
        method: "POST",
        body: data,
      }),
    }),

    // get srm profile for jobAssignment
    getAllSrmProfilesForJobAssignment: builder.query({
      query: (jobId) => ({
        url: `/srms/all/${jobId}`,
      }),
      providesTags: ["SRMProfiles"],
    }),

    // get all srm profiles for a value chain using job id
    getAllSRMProfilesInValueChain: builder.query({
      query: (jobId) => ({
        url: `srms/value-chain/${jobId}`,
      }),
    }),
    getAllSRMJobs: builder.query({
      query: ({ status, type }) => {
        return {
          url: `/job-assignment-to-srm/assigned-jobs/srm/all?status=${status}&type=${type}`,
        };
      },
      providesTags: ["SRMAssignedJobs"],
    }),

    // accepted assigned job
    acceptAssignedJob: builder.mutation({
      query: ({ jobId, status }) => ({
        url: `/job-assignment-to-srm/change-status/${jobId}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["SRMAssignedJobs"],
    }),

    // invite job to candidate
    inviteJobToCandidate: builder.mutation({
      query: (data) => ({
        url: `/job-invitation-to-candidate/invite`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CandidateProfiles"],
    }),

    // get single srm job assignment
    getSingleSRMAssignedJobs: builder.query({
      query: (id) => ({
        url: `/job-assignment-to-srm/srm/${id}`,
      }),
    }),

    // get all job invitation
    getAllJobInvitationForSRM: builder.query({
      query: ({ jobAssignmentToSRMId, status }) => {
        let queryString = `jobAssignmentToSRMId=${jobAssignmentToSRMId}`;
        if (status) {
          queryString += `&status=${status}`;
        }
        return {
          url: `/job-invitation-to-candidate/srm/all?${queryString}`,
        };
      },
      providesTags: ["CandidateProfiles"],
    }),

    // srm apply to job
    srmApplyToJob: builder.mutation({
      query: ({ candidateIds, jobId }) => ({
        url: `/job-applications/srm-apply-to-job/${jobId}`,
        body: { candidateIds },
        method: "POST",
      }),
      invalidatesTags: ["CandidateProfiles"],
    }),

    // get all srm profiles
    getAllSrmProfiles: builder.query({
      query: () => ({
        url: "/srms/all-profiles",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateSrmProfileMutation,
  useAcceptAssignedJobMutation,
  useInviteJobToCandidateMutation,
  useGetSingleSRMAssignedJobsQuery,
  useGetAllSrmProfilesForJobAssignmentQuery,
  useGetAllJobInvitationForSRMQuery,
  useSrmApplyToJobMutation,
  useGetAllSRMJobsQuery,
  useGetAllSRMProfilesInValueChainQuery,
  useGetAllSrmProfilesQuery,
} = srmProfileApi;
