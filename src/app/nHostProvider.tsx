"use client";

import { NhostProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

export function NProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NhostProvider nhost={nhost}>{children}</NhostProvider>
    </>
  );
}
