import { TBasicProfile } from "./basicProfile.types";
import { TExperience } from "./experience.type";
import { TSkill } from "./skill.types";
import { TUserAttributes } from "./user.types";

export type TInterviewerProfile = {
  id: string;
  userId: string;
  skills: TSkill[];
  areaOfExpertise?: string;
  experiences: TExperience[];
  user?: TUserAttributes & {
    basicProfile: TBasicProfile;
  };
};
