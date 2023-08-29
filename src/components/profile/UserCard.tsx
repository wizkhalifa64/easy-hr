"use client";
import { GET_SINGLE_USER } from "@/utils/query";
import { useQuery } from "@apollo/client";
import { useUserId } from "@nhost/nextjs";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";

const UserCard = () => {
  const id = useUserId();
  const { data, loading } = useQuery(GET_SINGLE_USER, {
    variables: { userId: id },
  });
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
          {data?.user.metadata.firstName + " " + data?.user.metadata.lastName}
        </CardHeader>
        <CardDescription></CardDescription>
        <CardContent></CardContent>
      </div>
    </Card>
  );
};

export default UserCard;
