import baseApi from "../api/baseApi";

const statisticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all counts
    getAllCounts: builder.query({
      query: (category) => ({
        url: `/statistics/get-counts?category=${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCountsQuery } = statisticsApi;
