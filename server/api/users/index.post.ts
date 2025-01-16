import { defineEventHandler, readBody } from "h3";
import { connectToDatabase } from "~/server/utils/db";
import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  await connectToDatabase();

  const body = await readBody(event);
  const newUser = new User(body);
  const savedUser = await newUser.save();

  return { savedUser }; // Automatically serialized to JSON
});
