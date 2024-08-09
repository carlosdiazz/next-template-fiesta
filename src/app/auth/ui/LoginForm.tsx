"use client";

import { authenticate } from "@/actions";

import clsx from "clsx";
import { useFormState, useFormStatus } from "react-dom";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="username">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-600 rounded mb-5"
        type="email"
        name="username"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-600 rounded mb-5"
        type="password"
        name="password"
      />
      {errorMessage && (
        <div className="flex flex-row mb-5">
          <p className="text-sm text-red-500">Credenciales Incorrectas</p>
        </div>
      )}
      <LoginButton />
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({ "btn-primary": !pending, "btn-disabled": pending })}
      disabled={pending}
    >
      Ingresar
    </button>
  );
}
