import baseApi from "../api/baseApi";

const jobInvitationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleJobInvitationById: builder.query({
      query: (jobInvitationId) => ({
        url: `/job-invitation-to-candidate/get-single/${jobInvitationId}`,
      }),
    }),
  }),
});

export const { useGetSingleJobInvitationByIdQuery } = jobInvitationApi;
