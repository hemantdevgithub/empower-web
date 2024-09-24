import baseApi from "../api/baseApi";

const foaProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFoaProfile: builder.mutation({
      query: (data) => ({
        url: "/foas/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateFoaProfileMutation } = foaProfileApi;
