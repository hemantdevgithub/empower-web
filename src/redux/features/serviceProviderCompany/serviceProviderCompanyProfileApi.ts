import baseApi from "../api/baseApi";

const serviceProviderCompanyProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createServiceProviderCompanyProfile: builder.mutation({
      query: (data) => ({
        url: "/service-provider-companies/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateServiceProviderCompanyProfileMutation } =
  serviceProviderCompanyProfileApi;
