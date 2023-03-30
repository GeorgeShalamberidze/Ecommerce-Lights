import { Document } from "mongoose";

export default interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
