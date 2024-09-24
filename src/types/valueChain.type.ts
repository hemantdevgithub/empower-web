export type TValueChainUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type TTCVCChain = {
  TCVCChain: string;
  status: "active" | "inactive";
  crm: TValueChainUser;
  customer: TValueChainUser;
  FOA: TValueChainUser;
  srm: TValueChainUser;
  job_applicant: TValueChainUser;
  interviewer: TValueChainUser;
  BOA: TValueChainUser;
};
