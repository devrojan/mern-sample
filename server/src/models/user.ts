import { IUser } from "interfaces/user";
import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    sessionToken: {
      type: String,
      select: false,
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
