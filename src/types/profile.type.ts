/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBasicProfile } from "./basicProfile.types";
import { TCandidateInfo } from "./candidate.types";
import { TUserAttributes } from "./user.types";

export type TProfileViewInfo = TUserAttributes & {
  basicProfile: TBasicProfile;
  candidateProfile?: TCandidateInfo;
  customerProfile?: any;
  crmProfile?: any;
  SRMProfile?: any;
  IRMProfile?: any;
  interviewerProfile?: any;
  investorProfile?: any;
  FOAProfile?: any;
  BOAProfile?: any;
  TOAProfile?: any;
};
