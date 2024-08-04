"use client";
import { saveUser } from "@/actions";
import { sleep } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  numero: number;
};

export default function Home() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({});

  const onSubmit = async (data: FormInputs) => {
    setLoading(true);
    await sleep(2);
    const resp = await saveUser({...data, lastName:""});
    setMessage(resp.message);
    setError(resp.error);
    setLoading(false);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1a3d] text-white p-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        
        <Image
          src="/imgs/arbol.png"
          alt="Árbol"
          className="w-full m-5 max-w-xs md:max-w-md mt-4 md:mt-0"
          width={450}
          height={500}
        />
        <div className="flex flex-col items-center md:items-start md:mr-8">
          <h1 className="text-2xl md:text-4xl font-cursive">
            Patricia Vidal Sosa
          </h1>
          <p className="text-lg md:text-2xl font-cursive mb-6">Mis XV años</p>
          <form
            className="w-full max-w-sm flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="mb-2 text-lg" htmlFor="name">
              Nombre
            </label>
            <input
              className="mb-4 p-2 text-black rounded-lg border border-gray-300"
              type="text"
              placeholder="Nombre"
              {...register("name", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Nombre debe tener al menos 3 caracteres",
                }
              })}
            />
            {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}

            <label className="mb-2 text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="mb-4 p-2 text-black rounded-lg border border-gray-300"
              type="email"
              placeholder="Email"
              {...register("email",{required:true})}

            />

            <label className="mb-2 text-lg" htmlFor="phone">
              Teléfono
            </label>
            <input
              className="mb-4 p-2 text-black rounded-lg border border-gray-300"
              type="number"
              placeholder="809-555-5555"
              {...register("numero", {
                required: true,
                minLength: {
                  value: 6,
                  message: "EL numero debe ser mayor a 6",
                },
              })}
            />
            {errors.numero && (
            <span className="text-red-500 text-xs">
              {errors.numero.message}
            </span>
          )}

            <button
              disabled={loading}
              
              type="submit"
              className={clsx(
                "p-3 text-lg hover:bg-pink-600 rounded-lg",
                {
                  "bg-pink-500": !loading,
                  "bg-gray-700 ": loading
                }
              )}
            >
              Confirmar Asistencia
            </button>
          </form>
          <div className="flex">
        <div className="text-center mt-5">
          <p
            className={clsx({
              "text-red-500": error,
              "text-white": !error,
            })}
          >
            {message}
          </p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
