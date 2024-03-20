import { User, Post, Friend } from './types';
const posts: Post[] = [
  { id: '1', userId: '1', title: 'First Post', content: 'Hello, world!' },
  { id: '2', userId: '2', title: 'Second Post', content: 'Another post.' },
];

const users: User[] = [
  { id: '1', name: 'Foo', email: 'foo@example.com' , bio: "I'm a software engineer.", pronouns: "he/him"},
  { id: '2', name: 'Bar', email: 'bar@example.com' , bio: "I'm a graphic designer.", pronouns: "she/her"},
];

export const getUsers = async (): Promise<User[]> => {
  return users;
};

export const getPosts = async (): Promise<Post[]> => {
  return posts;
};

export const getPostsByUserId = async (userId: string): Promise<Post[]> => {
  return posts.filter((post) => post.userId === userId);
};
export const getFriends = async (): Promise<Friend[]> => {
  return [
    { userId: '1', friendId: '2' },
  ];
};
