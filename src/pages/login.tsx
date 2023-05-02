import Layout from "@/components/Layout";
import { FormData } from "@/types/FormType";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect?.toString() || "/");
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
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

  const submitHandler: SubmitHandler<FormData> = async ({
    email,
    password,
  }: FormData) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  const emailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <Layout title="Login -">
      <form
        action=""
        className="mx-auto max-w-sm mt-32 w-11/12 shadow-lg"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="p-5 shadow-lg	">
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
              {!showPassword ? (
                <AiFillEye
                  className="absolute top-2 right-3 hover:fill-neutral-500 cursor-pointer"
                  size={25}
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute top-2 right-3 hover:fill-neutral-500 cursor-pointer"
                  size={25}
                  onClick={() => setShowPassword(false)}
                />
              )}
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
            Don&apos;t have an account ?
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
        </div>
      </form>
    </Layout>
  );
};

export default Login;
