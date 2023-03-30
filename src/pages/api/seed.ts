import mongoose, { model } from "mongoose";
import UserModel from "../../../models/User";
import db from "../../../utils/db";
import usersData from "../../data/users";

export default async function handler(req: any, res: any) {
  await db.connect();
  await UserModel.deleteMany();
  await UserModel.insertMany(usersData);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
}
