"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignInEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
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
    } else {
      isError && toast.error(error?.message);
    }
  };
  return (
    <form
      className="grid grid-cols-2 gap-4"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete={"off"}
    >
      <Input
        className={"col-span-2"}
        type={"email"}
        placeholder="Email"
        {...register("email")}
      />
      <Input
        className={"col-span-2"}
        placeholder="Password"
        type={"password"}
        {...register("password")}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save
      </Button>
    </form>
  );
};

export default SignIn;
