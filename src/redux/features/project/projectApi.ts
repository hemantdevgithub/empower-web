import baseApi from "../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => ({
        url: "/projects/create-project",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = projectApi;
