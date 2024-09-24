import moment from "moment";

const formatDateFromNow = (date: string) => {
  const currentDate = moment();
  const commentDate = moment(date);

  const diffInSeconds = currentDate.diff(commentDate, "seconds");
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  const diffInMinutes = currentDate.diff(commentDate, "minutes");
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  const diffInHours = currentDate.diff(commentDate, "hours");
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  const diffInDays = currentDate.diff(commentDate, "days");
  return `${diffInDays} days ago`;
};

export default formatDateFromNow;
