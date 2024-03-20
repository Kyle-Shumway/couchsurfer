import { User, Post, Friend } from './types';
const posts: Post[] = [
  { id: '1', userId: '1', title: 'First Post', content: 'Hello, world!' },
  { id: '2', userId: '2', title: 'Second Post', content: 'Another post.' },
];

const users: User[] = [
  { id: '1', name: 'Foo', email: 'foo@example.com' , bio: "I'm a software engineer.", pronouns: "he/him"},
  { id: '2', name: 'Bar', email: 'bar@example.com' , bio: "I'm a graphic designer.", pronouns: "she/her"},
];

const friends: Friend[] = [
  { userId: '1', friendId: '2' },
  { userId: '2', friendId: '1' },
];

export const getUsers = async (): Promise<User[]> => {
  return users;
};

export const getPosts = async (): Promise<Post[]> => {
  return posts;
};

export const getPostById = async (id: string): Promise<Post> => {
  return posts.find((post) => post.id === id) as Post;
}

export const getUserById = async (id: string): Promise<User> => {
  return users.find((user) => user.id === id) as User;
}
export const getPostsByUserId = async (userId: string): Promise<Post[]> => {
  return posts.filter((post) => post.userId === userId);
};
export const getFriends = async (): Promise<Friend[]> => {
  return friends;
};
export const getFriendsByUserId = async (userId: string): Promise<User[]> => {
  const friendIds = friends.filter((friend) => friend.userId === userId).map((friend) => friend.friendId);
  return users.filter((user) => friendIds.includes(user.id));
};
