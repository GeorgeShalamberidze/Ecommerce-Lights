import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { BiShow } from "react-icons/bi";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // set the type of the register function
    defaultValues: {},
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
  });

  const submitHandler: SubmitHandler<FormData> = ({
    email,
    password,
  }: FormData) => {
    console.log(email, password);
  };

  const emailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <Layout title="Login -">
      <form
        action=""
        className="mx-auto max-w-xs mt-32 w-11/12"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-3xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full"
            id="email"
            autoFocus
            placeholder="enter email..."
            {...register("email", {
              required: "Please Enter Email",
              pattern: {
                value: emailRegex,
                message: "Please enter VALID Email",
              },
            } as RegisterOptions)}
          />
          {errors.email && (
            <div className="text-red-500 mt-1 font-bold">
              {errors.email.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full"
              id="password"
              autoFocus
              placeholder="enter password..."
              {...register("password", {
                required: "Please Enter Password",
                minLength: {
                  value: 6,
                  message: "Password must be more than 5 chars",
                },
              })}
            />
            <BiShow
              className="absolute top-2 right-3 hover:fill-neutral-500 cursor-pointer"
              size={25}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && (
            <div className="text-red-500 mt-1 font-bold">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="mb-4 text-white ">
          <button
            className="primary-button  cursor-pointer w-full"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="mb-4 text-center">
          Don't have an account ?
          <span>
            <Link
              href="/register"
              className="text-md font-bold remove-underline"
            >
              {" "}
              Register
            </Link>
          </span>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
