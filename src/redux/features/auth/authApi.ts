import baseApi from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    // verify account
    verifyAccount: builder.mutation({
      query: (token: string) => ({
        url: "/auth/verify-account",
        method: "POST",
        headers: {
          authorization: token,
        },
      }),
    }),

    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyAccountMutation } = authApi;
