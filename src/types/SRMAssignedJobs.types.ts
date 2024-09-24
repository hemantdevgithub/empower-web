import { TBasicProfile } from "./basicProfile.types";
import { TJobPost } from "./post.type";

type TUser = {
  id: string;
  email: string;
  roles: string[];
  current_role: string;
  email_verified: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  basicProfile: TBasicProfile;
};

type TCRM = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
};

export type TJobAssignmentType = "ASSIGNED" | "REFERRED" | "APPLIED";

export interface TAssignedJobs {
  id: string;
  jobId: string;
  crmId: string;
  srmId: string;
  status: string;
  crm: TCRM;
  job: TJobPost;
  createdAt: string;
  updatedAt: string;
  type: TJobAssignmentType;
}
