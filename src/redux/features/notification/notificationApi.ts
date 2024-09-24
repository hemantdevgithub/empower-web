import baseApi from "../api/baseApi";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all skills
    createNotification: builder.mutation({
      query: (data) => ({
        url: "/notifications/create",
        method: "POST",
        body: data,
      }),
    }),
    getAllUnreadNotification: builder.query({
      query: () => ({
        url: "/notifications/get-all-unread",
      }),
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useGetAllUnreadNotificationQuery,
} = notificationApi;
