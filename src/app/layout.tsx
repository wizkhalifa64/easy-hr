import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NProviders } from "./nHostProvider";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProviders>
          <Navbar />
          <div className="flex flex-col h-full md:flex-row flex-1">
            <aside className="w-20 left-0 top-0  h-full pt-10 text-slate-100 bg-blue-950">
              <Sidebar />
            </aside>
            <main className="main-class  h-full flex-1">{children}</main>
          </div>
        </NProviders>
      </body>
    </html>
  );
}
