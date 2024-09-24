import baseApi from "../api/baseApi";

const investorProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createInvestorProfile: builder.mutation({
      query: (data) => ({
        url: "/investors/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateInvestorProfileMutation } = investorProfileApi;
