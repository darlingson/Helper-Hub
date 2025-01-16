import { defineEventHandler } from "h3";
import { connectToDatabase } from "~/server/utils/db";
import User from "~/server/models/User";

export default defineEventHandler(async () => {
  await connectToDatabase();

  const users = await User.find();
  return { users };
});
