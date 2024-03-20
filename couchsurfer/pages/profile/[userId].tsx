// pages/profile/[userId].tsx

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  getPostsByUserId,
  getUserById,
  getFriendsByUserId,
} from "../../app/api";
import { Post, User } from "../../app/types";
import Avatar from "@/app/components/avatar";
import RootLayout from "@/app/layout";
import PostComponent from "@/app/components/post";
import Link from "next/link";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUserById(userId as string);
      setUser(fetchedUser || null);
      const fetchedPosts = await getPostsByUserId(userId as string);
      setPosts(fetchedPosts);
      const fetchedFriends = await getFriendsByUserId(userId as string);
      setFriends(fetchedFriends);
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto px-4 py-8 rounded-lg shadow-lg text-black">
        <Avatar
          width={150}
          height={150}
          username={user.name}
          userId={user.id}
        />
        <h2 className="text-2xl font-bold mb-4">My Posts</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <PostComponent key={post.id} username={user.name} {...post} />
          ))}
        </ul>
        <ul className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">My Friends</h2>
          {friends.map((friend) => (
            <Link key={friend.id} href={`/profile/${friend.id}`}>
              <div className="border p-4 rounded-md shadow-md">
                <Avatar
                  width={50}
                  height={50}
                  username={friend.name}
                  userId={friend.id}
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </RootLayout>
  );
};

export default ProfilePage;
