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

type TSRM = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
};

export interface TInvitedJob {
  id: string;
  jobId: string;
  candidateId: string;
  srmId: string;
  status: string;
  srm: TSRM;
  job: TJobPost;
  createdAt: string;
  updatedAt: string;
}
