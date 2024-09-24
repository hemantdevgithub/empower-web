import { TUserAttributes } from "../../../server/src/app/modules/user/user.interface";
import { TBasicProfile } from "./basicProfile.types";

export type TValueChain = {
  id: string;
  jobId: string;
  status: string;
  jobRole: string;
  crmCount: string;
  srmCount: string;
  candidateCount: string;
  createdAt: string;
  user: TUserWithReferrer;
};
export type TJobInvitationType = "APPLIED" | "INVITED" | "SRM_INVITED";

export type TJobInvitationToCandidate = {
  id?: string;
  jobId: string;
  candidateId: string;
  srmId: string;
  jobAssignmentToSRMId: string;
  status: TStatus;
  type: TJobInvitationType;
  candidate?: { user?: TUserWithReferrer };
  createdAt?: string;
  updatedAt?: string;
};

export type TStatus = "PENDING" | "ACCEPTED" | "REJECTED";
export type TType = "ASSIGNED" | "REFERRED" | "APPLIED";
export type TJobAssignmentToSRM = {
  id?: string;
  jobId: string;
  srmId: string;
  crmId: string;
  status: TStatus;
  type: TType;
  srm?: { user?: TUserWithReferrer };
  jobInvitations?: TJobInvitationToCandidate[];
  createdAt?: string;
  updatedAt?: Date;
};

export type TValueChainDetails = {
  title?: string;
  jobId?: string;
  name?: string;
  email?: string;
  status?: string;
  role?: string;
  image?: string;
  creatorName?: string;
  children?: TValueChain[];
};

export type TValueChainChildren = {
  firstName: string;
  lastName: string;
  photo: string;
  children: TValueChainChildren[];
};
export type TUserWithReferrer = TUserAttributes & {
  basicProfile: TBasicProfile;
  referrer?: TUserWithReferrer;
};
