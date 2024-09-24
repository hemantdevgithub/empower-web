export type TDay =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";

export type TSchedule = {
  id?: string;
  day: string;
  interviewerId: string;
  availabilities?: TAvailability[];
  isDisabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
export type TAvailability = {
  id?: string;
  interviewerId: string;
  scheduleId: string;
  startTime: Date;
  endTime: Date;
  createdAt?: Date;
  updatedAt?: Date;
};
