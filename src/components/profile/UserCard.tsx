"use client";
import { GET_SINGLE_USER } from "@/utils/query";
import { useQuery } from "@apollo/client";
import { useUserDisplayName, useUserId } from "@nhost/nextjs";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";

const UserCard = () => {
  const displayName = useUserDisplayName();
  return (
    <Card className="flex p-3 items-center gap-2">
      <Image
        src={"https://picsum.photos/200"}
        alt="profile"
        height={150}
        width={150}
        className="rounded-lg"
      />
      <div>
        <CardHeader className={"text-xl font-semibold"}>
          {displayName}
        </CardHeader>
        <CardDescription></CardDescription>
        <CardContent></CardContent>
      </div>
    </Card>
  );
};

export default UserCard;
