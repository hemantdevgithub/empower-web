import { createBasicProfileValidation } from "@/schemas/basicProfileValidation";
import { z } from "zod";
import baseApi from "../api/baseApi";

const basicProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // upload basic profile
    createBasicProfile: builder.mutation({
      query: (data: z.infer<typeof createBasicProfileValidation>) => ({
        url: "/basic-profiles/create-profile",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    //  upload profile image
    getBasicProfile: builder.query({
      query: () => ({
        url: "/basic-profiles/get-me",
      }),
      providesTags: ["BasicProfile"],
    }),

    // switch role
    switchRole: builder.mutation({
      query: (data: string) => ({
        url: "/basic-profiles/switch-role",
        method: "PATCH",
        body: {
          roleToSwitch: data,
        },
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    // update basic profile data
    updateBasicProfile: builder.mutation({
      query: (data) => ({
        url: "/basic-profiles/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
    // get user profile by id & role
    getUserProfileById: builder.query({
      query: ({ userId, role }) => ({
        url: `/basic-profiles/${userId}/${role}`,
        method: "GET",
      }),
    }),
    uploadProfileImage: builder.mutation({
      query: (data) => ({
        url: `/basic-profiles/upload-image`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BasicProfile"],
    }),
  }),
});

export const {
  useCreateBasicProfileMutation,
  useGetBasicProfileQuery,
  useSwitchRoleMutation,
  useUpdateBasicProfileMutation,
  useGetUserProfileByIdQuery,
  useUploadProfileImageMutation,
} = basicProfileApi;
