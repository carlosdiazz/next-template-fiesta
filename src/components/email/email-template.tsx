import Image from "next/image";

interface Props {
  firstName: string;
}

export const EmailTemplate = ({firstName}:Props) => {
  return (
    <div>
      <span>Gracias {firstName}, por confirmar su asistencia</span>
      <hr></hr>
      <img alt="Invitacion" src={`https://i.ibb.co/qjJPMW9/invitacion.png`} width={620} height={874}/>
    </div>
  )
}
