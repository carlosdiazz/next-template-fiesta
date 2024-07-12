"use server";

import prisma from "@/lib/prisma";
import { Users } from "@prisma/client";

export const getUsers = async (): Promise<Users[]> => {
  try {
    return await prisma.users.findMany({
      orderBy: {
        id: "asc",
      },
    });
  } catch (e) {
    console.log(`Error obteneindo Usuarios ${e}`);
    return [];
  }
};
