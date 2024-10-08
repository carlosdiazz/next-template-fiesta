"use client";
import { saveUser } from "@/actions";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  lastName: string;
  email: string;
  numero: number;
};

export const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
  } = useForm<FormInputs>({});

  const onSubmit = async (data: FormInputs) => {
    setLoading(true);
    //await sleep(2);
    const resp = await saveUser(data);

    setMessage(resp.message);
    setError(resp.error);
    setLoading(false);

    reset()
  };

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex -mx-3">
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Nombre
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Nombre"
              {...register("name", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Nombre debe tener al menos 3 caracteres",
                },
              })}
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Apellido
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Apellido"
              {...register("lastName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Apellido debe tener al menos 3 caracteres",
                },
              })}
            />
          </div>
          {errors.lastName && (
            <span className="text-red-500 text-xs">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Email
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg" />
            </div>
            <input
              type="email"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Correo"
              {...register("email", {
                required: true,
              })}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-12">
          <label htmlFor="" className="text-xs font-semibold px-1">
            Numero
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
            </div>
            <input
              type="number"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="8095550000"
              {...register("numero", {
                required: true,
                minLength: {
                  value: 6,
                  message: "EL numero debe ser mayor a 6",
                },
              })}
            />
          </div>
          {errors.numero && (
            <span className="text-red-500 text-xs">
              {errors.numero.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            disabled={loading}
            className={clsx(
              "w-full max-w-xs mx-auto text-white rounded-lg px-3 py-3 font-semibold",
              {
                "bg-indigo-700 ": !loading,
                "bg-gray-700 ": loading
               }
            )}
          >
            Confirmar asistencia
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="text-center">
          <p
            className={clsx({
              "text-red-500": error,
              "text-indigo-800": !error,
            })}
          >
            {message}
          </p>
        </div>
      </div>
    </form>
  );
};
