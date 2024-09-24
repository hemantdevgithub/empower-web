import baseApi from "../api/baseApi";

const irmProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createIrmProfile: builder.mutation({
      query: (data) => ({
        url: "/irms/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateIrmProfileMutation } = irmProfileApi;
