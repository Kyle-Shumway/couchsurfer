// pages/profile/[userId].tsx

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getUsers, getPostsByUserId } from "../../app/api";
import { Post, User } from "../../app/types";
import Image from "next/image";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      const foundUser = fetchedUsers.find((user) => user.id === userId);
      setUser(foundUser || null);
      const fetchedPosts = await getPostsByUserId(userId as string);
      setPosts(fetchedPosts);
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <div className="flex flex-row">
        <Image
          src={`https://i.pravatar.cc/300`}
          alt="Profile Picture"
          width="150"
          height="150"
        />

        <p className="text-3xl font-bold">{user.name}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">My Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
