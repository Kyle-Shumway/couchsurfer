// pages/posts/[postId].tsx

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getPostById, getUserById } from "@/app/api";
import { Post, User } from "@/app/types";
import RootLayout from "@/app/layout";
import Avatar from "@/app/components/avatar";

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPost = await getPostById(postId as string);
      const fetchedUser = await getUserById(fetchedPost.userId);
      setPost(fetchedPost || null);
      setUser(fetchedUser || null);
    };
    if (postId) {
      fetchData();
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg text-black">
        <Avatar
          width={50}
          height={50}
          userId={user?.id || ""}
          username={user?.name || ""}
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="prose">{post.content}</div>
      </div>
    </RootLayout>
  );
};

export default PostDetailPage;
