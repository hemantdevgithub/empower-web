import { TBasicProfile } from "./basicProfile.types";
import { TUserAttributes } from "./user.types";

export type TReferrerInfo = TUserAttributes & {
  basicProfile: TBasicProfile;
};

export type TReferralsInfo = TReferrerInfo[];
