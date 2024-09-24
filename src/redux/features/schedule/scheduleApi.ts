import baseApi from "../api/baseApi";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProfileSchedules: builder.query({
      query: ({ userId, role }) => ({
        url: `/schedules/${userId}/${role}`,
      }),
      providesTags: ["Schedule"],
    }),
    createOrUpdateProfileSchedules: builder.mutation({
      query: (data) => ({
        url: `/schedules/manage-availability`,
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Schedule"],
    }),
    // get all available slots of a interviewer
    getAvailableSlotsOfInterviewer: builder.query({
      query: ({ userId, day, duration }) => ({
        url: `/schedules/available-slots/${userId}/INTERVIEWER/${day}/${duration}`,
      }),
    }),
    scheduleInterview: builder.mutation({
      query: (data) => ({
        url: "/interview-bookings/book",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllProfileSchedulesQuery,
  useCreateOrUpdateProfileSchedulesMutation,
  useGetAvailableSlotsOfInterviewerQuery,
  useScheduleInterviewMutation,
} = scheduleApi;
