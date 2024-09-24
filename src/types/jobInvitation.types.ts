import { TCandidateInfo } from "./candidate.types";
export type TJobInvitationType = "APPLIED" | "INVITED" | "SRM_INVITED";
export type TStatus = "PENDING" | "ACCEPTED" | "REJECTED";

export type TJobInvitation = {
  id?: string;
  jobId: string;
  candidateId: string;
  srmId: string;
  jobAssignmentToSRMId: string;
  status: TStatus;
  type: TJobInvitationType;
  candidate?: TCandidateInfo;
  createdAt?: string;
  updatedAt?: string;
};
