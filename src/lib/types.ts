import { userWorkValues } from "./constant";

export interface filterFields {
  ethnicity?: string[];
  gender?: string[];
  religion?: string[];
  work?: userWorkValues[];
  relation?: string[];
  help?: string[];
  other?: string[];
  age?: number[];
}

export interface userObj {
  ethnicity?: string;
  gender?: string;
  religion?: string;
  work?: userWorkValues;
  relation?: string;
  help?: boolean;
  other?: boolean;
  age?: number;
}