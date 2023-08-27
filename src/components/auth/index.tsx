"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Auth = () => {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="pt-20 h-full container flex items-center justify-between">
      <div>
        {login === "register" ? (
          <>
            <h1 className={"text-4xl font-bold"}>
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
            <h1 className={"text-4xl font-bold"}>
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
    </div>
  );
};

export default Auth;
