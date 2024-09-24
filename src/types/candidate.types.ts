import { TBasicProfile } from "./basicProfile.types";
import { TCertificate } from "./certificate.types";
import { TExperience } from "./experience.type";
import { TUser } from "./global.type";
import { TSkill } from "./skill.types";
import { TUserAttributes } from "./user.types";

export type TCandidateInfo = {
  id: string;
  userId: string;
  experience_level: string | null;
  work_model: string | null;
  work_permit: string | null;
  bill_rate: number;
  payment_type: string | null;
  relocation: boolean;
  video_resume: unknown | null;
  availability_date: string | null;
  engagement_type: string | null;
  certificates: TCertificate[] | null;
  createdAt: string;
  updatedAt: string;
  skills: TSkill[];
  candidateExperiences: TExperience[];
};

export type TCandidateProfile = {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
  candidateProfile: TCandidateInfo;
};

export type TCandidateProfileWithUser = TCandidateInfo & {
  user?: TUserAttributes & {
    basicProfile: TBasicProfile;
  };
};
