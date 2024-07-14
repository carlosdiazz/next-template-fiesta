"use server";
import nodemailer from "nodemailer";
import { templateEmail } from "./template-email";
export const sendEmail = async (email: string, name: string) => {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    await transport.verify();
  } catch (e) {
    console.log(`Error no se envio el correo => ${e}`);
    return;
  }
  const templateEmailHtml = templateEmail(name);
  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: name,
      html: templateEmailHtml,
      //html: `
      //  <div>
      //    <span>Gracias ${name}, por confirmar su asistencia</span>
      //    <hr></hr>
      //    <img alt="Invitacion" src="https://i.ibb.co/qjJPMW9/invitacion.png" width="620" height="874"/>
      //  </div>
      //`,
    });
  } catch (e) {}
};

//import { EmailTemplate } from "@/components";
//import { Resend } from "resend";
//
//const resend = new Resend(process.env.RESEND_API_KEY);
//
//export const sendEmail = async (email: string, name: string) => {
//  try {
//    await resend.emails.send({
//      from: "Invitacion <onboarding@resend.dev>",
//      to: [email],
//      subject: "Confirmando Invitacion",
//      react: EmailTemplate({ firstName: name }),
//    });
//    console.log("Se envio el correo");
//  } catch (e) {
//    console.log(e);
//  }
//};
//
