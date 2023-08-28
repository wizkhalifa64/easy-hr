"use client";
import { GET_SINGLE_USER } from "@/utils/query";
import { useQuery } from "@apollo/client";
import { useUserId } from "@nhost/nextjs";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

const UserCard = () => {
  const id = useUserId();
  const { data, loading } = useQuery(GET_SINGLE_USER, {
    variables: { userId: id },
  });
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"https://picsum.photos/200"}
        alt="profile"
        height={150}
        width={150}
        className="rounded-lg"
      />
      <Card>
        <CardHeader></CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
