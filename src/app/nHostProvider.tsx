"use client";

import Layout from "@/components/Layout";
import { NhostProvider, NhostClient } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

export function NProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NhostProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <ThemeProvider attribute="class" defaultTheme={"light"} enableSystem>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </NhostApolloProvider>
      </NhostProvider>
      <ToastContainer />
    </>
  );
}
