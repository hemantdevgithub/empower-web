import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TBasicProfile } from "./basicProfile.types";

export type TSelectOptions = { label: string; value: string }[];

export type TKeyLabel = {
  label: string;
  value: string;
};

export type TError = {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorSources: [{ path: string; message: string }];
  };
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  error?: TError;
  data: {
    success: boolean;
    message: string;
    data: T;
    meta?: TMeta;
  };
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TUser = {
  email: string;
  exp: number;
  iat: number;
  current_role: string;
  userId: string;
  basicProfile?: TBasicProfile;
};

export type TLabelValuePair = {
  label: string;
  value: string;
};
