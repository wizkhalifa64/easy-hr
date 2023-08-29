"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Image from "next/image";
import LoginImg from "../../../public/auth/login.png";
const Auth = () => {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-full container flex auth-container items-center justify-between">
      <div>
        {login === "register" ? (
          <>
            <h1 className={"text-4xl py-3 font-bold"}>
              Create new account<span className={"text-blue-600"}>.</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Already a member?
              <Button onClick={() => setLogin("login")} variant={"link"}>
                Login
              </Button>
            </p>
            <SignUp />
          </>
        ) : (
          <>
            <h1 className={"text-4xl py-3 font-bold"}>
              Log In your account<span className={"text-blue-600"}>.</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Don`t have any account?
              <Button onClick={() => setLogin("register")} variant={"link"}>
                Register
              </Button>
            </p>
            <SignIn />
          </>
        )}
      </div>
      <Image src={LoginImg} alt="login" width={550} />
    </div>
  );
};

export default Auth;
