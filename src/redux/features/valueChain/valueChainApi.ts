import baseApi from "../api/baseApi";

const valueChainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllValueChain: builder.query({
      query: () => ({
        url: "/value-chains/",
      }),
    }),
    getSingleValueChain: builder.query({
      query: (jobId) => ({
        url: `/value-chains/details/${jobId}`,
      }),
    }),
  }),
});

export const { useGetAllValueChainQuery, useGetSingleValueChainQuery } = valueChainApi;
