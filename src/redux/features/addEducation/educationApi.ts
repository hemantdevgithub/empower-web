import baseApi from "../api/baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addEducation: builder.mutation({
      query: ({ userId, educationData }) => ({
        url: `/educations/add/${userId}`,
        method: "POST",
        body: educationData,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["Education"],
    }),
    getEducationByUserId: builder.query({
      query: (userId) => ({
        url: `/educations/get/${userId}`,
      }),
      providesTags: ["Education"],
    }),
    updateEducation: builder.mutation({
      query: ({ educationId, updatedEducationData }) => ({
        url: `/educations/update/${educationId}`,
        method: "PUT",
        body: updatedEducationData,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["Education"],
    }),
    deleteEducation: builder.mutation({
      query: (educationId) => ({
        url: `/educations/delete/${educationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Education"],
    }),
  }),
});

export const {
  useAddEducationMutation,
  useGetEducationByUserIdQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApi;
