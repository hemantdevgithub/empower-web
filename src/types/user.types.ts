export type TUserAttributes = {
  id?: string;
  email: string;
  password: string;
  roles: string[];
  current_role?: string;
  referredBy?: string;
  referredUserRole?: string;
  email_verified?: boolean;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
