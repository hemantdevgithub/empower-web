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

interface TSRM {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
}

export interface TInvitedJob {
  id: string;
  candidateId: string;
  jobId: string;
  srmId: string;
  jobAssignmentToSRMId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  job: TJobPost;
  srm: TSRM;
}
