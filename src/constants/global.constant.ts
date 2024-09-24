export const Categories = ["life-skills", "entrepreneurship", "leadership", "empower-training"] as const;

export const CategoryFilteringOptions = Categories.map((item) => ({
  label: item.split("-").join(" "),
  value: item,
}));

export const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export const NotificationType = {
  INTERVIEW_REQUEST_FROM_INTERVIEWER: "INTERVIEW_REQUEST_FROM_INTERVIEWER",
  AUTOMATED_INTERVIEW_REQUEST: "AUTOMATED_INTERVIEW_REQUEST",
};
