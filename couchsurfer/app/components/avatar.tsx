import React from "react";
import Image from "next/image";
import Link from "next/link";
interface AvatarProps {
  width: number;
  height: number;
  username: string;
  userId: string;
}
const Avatar = (props: AvatarProps) => {
  return (
    <Link href={`/profile/${props.userId}`}>
      <div className="flex flex-row items-center">
        <Image
          src={`https://i.pravatar.cc/300`}
          alt="Profile Picture"
          {...props}
          className="border rounded-lg"
        />
        <p className="text-gray-600 ml-3">{props.username}</p>
      </div>
    </Link>
  );
};

export default Avatar;
