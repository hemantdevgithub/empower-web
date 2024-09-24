import { TBasicProfile } from "./basicProfile.types";
import { TUserAttributes } from "./user.types";

export type TSrmProfileWithBasicProfile = {
  id: string;
  user: TUserAttributes & {
    basicProfile?: TBasicProfile;
  };
};
