"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignInEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signInEmailPassword(data.email, data.password);
    if (isSuccess) {
      router.push("/");
      return null;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type={"email"} placeholder="Email" {...register("email")} />
      <Input
        placeholder="Password"
        type={"password"}
        {...register("password")}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default SignIn;
