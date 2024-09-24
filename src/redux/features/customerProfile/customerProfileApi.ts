import baseApi from "../api/baseApi";

const customerProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomerProfile: builder.mutation({
        query: (data) => ({
          url: "/customers/create",
          method: "POST",
          body: data,
        }),
    }),
  }),
});

export const { useCreateCustomerProfileMutation } = customerProfileApi;
