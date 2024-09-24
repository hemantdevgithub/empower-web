import baseApi from "../api/baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExperience: builder.mutation({
      query: ({ userId, experienceData }) => ({
        url: `/experiences/add/${userId}`,
        method: "POST",
        body: experienceData,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["Experience"],
    }),
    getExperienceByUserId: builder.query({
      query: (userId) => ({
        url: `/experiences/get/${userId}`,
      }),
      providesTags: ["Experience"],
    }),
    updateExperience: builder.mutation({
      query: ({ experienceId, updatedExperienceData }) => ({
        url: `/experiences/update/${experienceId}`,
        method: "PUT",
        body: updatedExperienceData,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["Experience"],
    }),
    deleteExperience: builder.mutation({
      query: (experienceId) => ({
        url: `/experiences/delete/${experienceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experience"],
    }),
  }),
});

export const {
  useAddExperienceMutation,
  useGetExperienceByUserIdQuery,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
} = experienceApi;
