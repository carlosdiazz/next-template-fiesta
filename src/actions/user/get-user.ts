"use server";

import prisma from "@/lib/prisma";
import { Users } from "@prisma/client";

export const getUsers = async (): Promise<Users[]> => {
  try {
    const user = await prisma.users.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return user;
  } catch (e) {
    console.log(`Error obteneindo Usuarios ${e}`);
    return [];
  }
};
