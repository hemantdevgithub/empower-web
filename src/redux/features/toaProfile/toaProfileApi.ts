import baseApi from "../api/baseApi";

const toaProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createToaProfile: builder.mutation({
      query: (data) => ({
        url: "/toas/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateToaProfileMutation } = toaProfileApi;
