import { IRole } from "src/roles/interfaces/IRole.interface";

export interface IUser {
    id?: string;
    email: string;
    name: string;
    surname: string;
    roles?: IRole[];
  }