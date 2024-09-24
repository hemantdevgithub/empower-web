import baseApi from "../api/baseApi";

const crmProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCrmProfile: builder.mutation({
      query: (data) => ({
        url: "/crms/create",
        method: "POST",
        body: data,
      }),
    }),
    assignJobToSRM: builder.mutation({
      query: (data) => ({
        url: "/job-assignment-to-srm/assign",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SRMProfiles", "AssignedSRMProfiles"],
    }),
    getAllJobAssignedSRMs: builder.query({
      query: ({ jobId }) => ({
        url: `/job-assignment-to-srm/crm/all?jobId=${jobId}`,
      }),
      providesTags: ["AssignedSRMProfiles"],
    }),

    // get all srm profiles for a value chain using job id
    getCRMProfileInValueChain: builder.query({
      query: (jobId) => ({
        url: `crms/value-chain/${jobId}`,
      }),
    }),

    // get all crm profiles
    getAllCrmProfiles: builder.query({
      query: () => ({
        url: `/crms/all-profiles`,
      }),
    }),
  }),
});

export const {
  useCreateCrmProfileMutation,
  useAssignJobToSRMMutation,
  useGetAllJobAssignedSRMsQuery,
  useGetCRMProfileInValueChainQuery,
  useGetAllCrmProfilesQuery,
} = crmProfileApi;
