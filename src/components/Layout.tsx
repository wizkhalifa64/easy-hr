"use client";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import Auth from "./auth";
import { useAuthenticationStatus } from "@nhost/nextjs";
import LoadingBar from "./LoadingBar";
import Errorpage from "./Errorpage";
import { toast } from "react-toastify";
import { SkeletonCard } from "./Skeleton";
const Layout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading, isError, error } =
    useAuthenticationStatus();
  if (isError) {
    toast(error?.message);
  }
  return (
    <>
      {isLoading ? (
        <div className="h-full container pl-28 w-full">
          <div className="flex gap-4 h-full items-center">
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-2">
                <div className="animate-pulse bg-[#383d4b] h-32"></div>
                <div className="animate-pulse bg-[#383d4b] h-32"></div>
                <div className="animate-pulse bg-[#383d4b] h-32"></div>
                <div className="animate-pulse bg-[#383d4b] h-32"></div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex gap-2 flex-col">
                <div className="animate-pulse bg-[#383d4b] w-full h-12"></div>
                <div className="animate-pulse bg-[#383d4b] w-full h-32"></div>
                <div className="animate-pulse bg-[#383d4b] w-full h-12"></div>
                <div className="animate-pulse bg-[#383d4b] w-full h-32"></div>
              </div>
            </div>
          </div>
        </div>
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
                    <aside className="w-20 fixed left-0 top-0  h-full pt-10 bg-[#292e3c] text-blue-200">
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
