import { TBasicProfile } from "./basicProfile.types";
import { TUserAttributes } from "./user.types";

export type TCrmProfileWithBasicProfile = {
  id: string;
  user: TUserAttributes & {
    basicProfile?: TBasicProfile;
  };
};
