"use client";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import Auth from "./auth";
import { useAuthenticationStatus } from "@nhost/nextjs";
import LoadingBar from "./LoadingBar";
import Errorpage from "./Errorpage";
import { toast } from "react-toastify";
const Layout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading, isError, error } =
    useAuthenticationStatus();
  if (isError) {
    toast(error?.message);
  }
  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <>
          {isError ? (
            <Errorpage />
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  <Navbar />
                  <div className="flex flex-col h-full md:flex-row flex-1">
                    <aside className="w-20 fixed left-0 top-0  h-full pt-10 bg-slate-900 text-blue-200">
                      <Sidebar />
                    </aside>
                    <main className="h-full pb-4 pt-20 ml-20 flex-1">
                      {children}
                    </main>
                  </div>
                </>
              ) : (
                <Auth />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Layout;
