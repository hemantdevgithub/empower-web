import { TKeyLabel } from "./global.type";

export type TJobPost = {
  id: string;
  userId: string;
  jobId: string;
  jobRole: string;
  jobDescription: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  customerEngagementTypes: TKeyLabel[];
  durations: TKeyLabel[];
  empowerBondTypes: TKeyLabel[];
  experienceLevels: TKeyLabel[];
  paymentRanges: TKeyLabel[]; // Assuming the paymentRanges is an array but its structure is not provided
  paymentType: string;
  skills: TKeyLabel[];
  startDates: TKeyLabel[];
  volume: number;
  workModels: TKeyLabel[];
  workPermits: TKeyLabel[];
  interviewModels: TKeyLabel[];
  alreadyApplied?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  appliedJobs: any[];
  createdAt: string;
  updatedAt: string;
};
