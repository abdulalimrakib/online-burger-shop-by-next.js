"use server";

import { redirect } from "next/navigation";
import connectDB from "../lib/db";
import { User } from "../models/User";
import { hash } from "bcryptjs";
import { signIn } from "../auth";

const logIn = async (formData) => {
  const email = await formData.get("email");
  const password = await formData.get("password");

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    return error.message;
  }
  redirect("/");
};

const signUp = async (formData) => {
  const firstName = await formData.get("firstName");
  const lastName = await formData.get("lastName");
  const email = await formData.get("email");
  const password = await formData.get("password");
  const confirmPassword = await formData.get("confirmPassword");

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    throw new error("Fill all fields");
  }

  if (password !== confirmPassword) throw new error("Password not matched");

  await connectDB();

  const isExistUser = await User.findOne({ email });
  if (isExistUser) throw new error("User already exist");

  const hashPassword = await hash(password, 12);

  await User.create({ firstName, lastName, email, password: hashPassword });
  console.log("User seccessfully created");
  redirect("/login");
};

export { signUp, logIn };
