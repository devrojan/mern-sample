export interface IUser {
  name: string;
  email: string;
  password: string;
  sessionToken?: string;
  createdAt: Date;
  updatedAt?: Date;
}
