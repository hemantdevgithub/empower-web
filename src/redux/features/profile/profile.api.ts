import baseApi from "../api/baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProfile: builder.mutation({
      query: (data) => ({
        url: "/profile-header/create-profile",
        method: "POST",
        body: data,
        headers: {
          // "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["Profile"],
    }),

    // Get my profile
    getMyProfile: builder.query({
      query: (userId: string) => ({
        url: `/profile-header/get-profile/${userId}`,
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const { useGetMyProfileQuery, useCreateProfileMutation } = profileApi;
