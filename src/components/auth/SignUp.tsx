"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signUpEmailPassword(data.email, data.password, {
      displayName: `${data.firstName} ${data.lastName}`.trim(),
      metadata: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });
    if (isSuccess) {
      router.push("/");
      return null;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="First name" {...register("firstName")} />
      <Input placeholder="Last name" {...register("lastName")} />
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

export default SignUp;
