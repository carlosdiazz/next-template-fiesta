"use server";
import { EmailTemplate } from "@/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, name: string) => {
  try {
    await resend.emails.send({
      from: "Invitacion <onboarding@resend.dev>",
      to: [email],
      subject: "Confirmando Invitacion",
      react: EmailTemplate({ firstName: name }),
    });
    console.log("Se envio el correo");
  } catch (e) {
    console.log(e);
  }
};
