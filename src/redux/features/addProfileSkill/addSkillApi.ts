import baseApi from "../api/baseApi";

const addSkillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProfileSkill: builder.mutation({
      query: ({ userId, skillData }) => ({
        url: `/profile-skills/add/${userId}`,
        method: "POST",
        body: { ...skillData },
      }),
      invalidatesTags: ["ProfileSkills"],
    }),
    getProfileSkillByUserId: builder.query({
      query: (userId) => ({
        url: `/profile-skills/get/${userId}`,
      }),
      providesTags: ["ProfileSkills"],
    }),
    updateProfileSkill: builder.mutation({
      query: ({ skillId, updatedSkillData }) => ({
        url: `/profile-skills/update/${skillId}`,
        method: "PUT",
        body: updatedSkillData,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["ProfileSkills"],
    }),
    deleteProfileSkill: builder.mutation({
      query: (skillId) => ({
        url: `/profile-skills/delete/${skillId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileSkills"],
    }),
  }),
});

export const {
  useAddProfileSkillMutation,
  useGetProfileSkillByUserIdQuery,
  useUpdateProfileSkillMutation,
  useDeleteProfileSkillMutation,
} = addSkillApi;
