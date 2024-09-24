import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const camelCaseToWords = (camelCase: string) => {
  return camelCase.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
};
