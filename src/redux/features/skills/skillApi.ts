import baseApi from "../api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all skills
    getAllSkills: builder.query({
      query: () => ({
        url: "/skills/get-all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSkillsQuery } = skillApi;
