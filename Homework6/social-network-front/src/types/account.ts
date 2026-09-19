// "user": {
//     "id": 113,
//     "username": "avagyanhovsep",
//     "firstName": "Hovsep",
//     "lastName": "Avagyan",
//     "avatar": "1735321123456-avatar.png",
//     "bio": "Building Lyncora.",
//     "theme": "system",
//     "isAccountPrivate": false,

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
  theme: string;
  isAccountPrivate: boolean;
};

type Followings = {
  receiver: User;
};

type Followers = {
  sender: User;
};

export type Posts = {
  id: number;
  text: string;
  createdAt: string;
};

export type ChangePassword = {
  currentPassword: string;
  newPassword: string;
};

export type GetUserRes = {
  user: User;
};

export type BioType = {
  bio: string;
};

export type Theme = {
  theme: string;
};

export type SearchUsersRes = {
  users: User[];
};

export type UserProfile = User & {
  followings: Followings[];
  followers: Followers[];
  posts: PostInfo[];
};

export type Profile = User & {
  followings: Followings[];
  followers: Followers[];
  posts: Posts[];
}

export type GetUserProfileRes = {
  user: Profile;
};

export type Requests = {
  id: number;
  sender: User;
};

export type FollowRequestsRes = {
  requests: Requests[];
};

export type createPostType = {
  title: string;
  description: string;
  location?: string;
  tags?: string[];
  image?: File;
};

export type PostInfo = {
  id: number;
  authorId: number;
  title: string;
  description: string;
  postImage: string;
  tags: string;
  location: string;
};

export type GetPostInfoRes = {
  postInfo: PostInfo;
}

export type createPostRes = {
  postInfo: PostInfo;
};
