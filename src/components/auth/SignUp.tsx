"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
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
    } else {
      isError && toast(error?.message);
    }
  };
  return (
    <>
      {needsEmailVerification && (
        <Alert className="mb-3">
          <EnvelopeIcon className="h-4 w-4" />
          <AlertTitle>Verify Email</AlertTitle>
          <AlertDescription>
            Please check your mailbox and follow the verification link to verify
            your email.
          </AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
        autoComplete={"off"}
      >
        <Input
          type={"text"}
          className="col-span-1"
          placeholder="First Name"
          {...register("firstName")}
        />
        <Input
          type={"text"}
          placeholder="Last Name"
          className="col-span-1"
          {...register("lastName")}
        />
        <Input
          type={"email"}
          className="col-span-2"
          placeholder="Email"
          {...register("email")}
        />
        <Input
          className="col-span-2"
          placeholder="Password"
          type={"password"}
          {...register("password")}
        />
        <Button className={"w-1/2"} type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save
        </Button>{" "}
      </form>
    </>
  );
};

export default SignUp;
