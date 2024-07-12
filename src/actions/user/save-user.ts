"use server";
import { Response, User } from "@/interfaces";
import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { sendEmail } from "../email/send-email";

export const saveUser = async (user: User): Promise<Response> => {
  try {
    //TODO
    //await prisma.users.create({
    //  data: {
    //    name: user.name,
    //    lastName: user.lastName,
    //    email: user.email,
    //    numero: user.numero.toString(),
    //  },
    //});

    await sendEmail(user.email, user.name);

    return {
      error: false,
      message: "Se guardo correctamente",
    };
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          error: true,
          message: "Este correo está registrado, intente con otro",
        };
      } else {
        return {
          error: true,
          message: "Error de base de datos desconocido",
        };
      }
    } else {
      return {
        error: true,
        message: "No se guardó el usuario",
      };
    }
  }
};
