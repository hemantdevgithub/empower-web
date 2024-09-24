import baseApi from "../api/baseApi";

const valueChainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all value chain
    getAllValueChain: builder.query({
      query: (status) => ({
        url: `/value-chains/?status=${status}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllValueChainQuery } = valueChainApi;
