import { NextPage } from "next";
import { User } from "../app/types";

const ProfilePage: NextPage<{ user: User }> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
