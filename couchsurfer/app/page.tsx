"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { getPosts, getUsers } from "./api";
import { User, Post } from "./types";
import PostComponent from "./components/post";
import RootLayout from "./layout";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await getPosts();
      const fetchedUsers = await getUsers();
      setPosts(fetchedPosts);
      setUsers(fetchedUsers);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-black">Feed</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <PostComponent
            key={post.id}
            username={users.find((user) => user.id === post.userId)?.name || ""}
            {...post}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
