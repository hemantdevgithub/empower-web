import { TSkill } from "./skill.types";

export type TExperience = {
  id?: string;
  title: string;
  employment_type: string;
  location_type: string;
  company_name: string;
  location: string;
  start_date: string;
  end_date?: string;
  isWorking?: boolean;
  candidateId?: string;
  skills?: TSkill[];
  media?: string[];
  createdAt?: string;
  updatedAt?: string;
};
