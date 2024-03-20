export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  pronouns?: string;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
}

export interface Friend {
  userId: string;
  friendId: string;
}
