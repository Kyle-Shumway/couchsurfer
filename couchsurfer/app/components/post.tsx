import Link from "next/link";
import React from "react";
import Avatar from "./avatar";
import { Post } from "../types";

interface PostProps extends Post {
  username: string;
}

const PostComponent = (props: PostProps) => {
  return (
    <Link key={props.id} href={`/posts/${props.id}`}>
      <li className="border p-4 rounded-md shadow-md text-black">
        <Avatar
          width={50}
          height={50}
          username={props.username}
          userId={props.userId}
        />
        {props.title}
      </li>
    </Link>
  );
};

export default PostComponent;
