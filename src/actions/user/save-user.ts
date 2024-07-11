"use server";
import { User } from "@/interfaces";

export const saveUser = async (user: User) => {
  console.log({ user });
};
