import baseApi from "../api/baseApi";

const boaProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBoaProfile: builder.mutation({
      query: (data) => ({
        url: "/boas/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateBoaProfileMutation } = boaProfileApi;
