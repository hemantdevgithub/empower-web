import { TAddressProps } from "./address.types";
import { TFile } from "./file.types";

export type TBasicProfile = {
  id: string;
  userId: string;
  first_name: string;
  last_name: string;
  permanent_address_id: string | number;
  permanent_address?: TAddressProps | null;
  phone_number: string;
  phone_verified: boolean;
  profile_image: TFile;
  current_address_id: string | number;
  current_address?: TAddressProps | null;
  createdAt: string;
  updatedAt: string;
};
