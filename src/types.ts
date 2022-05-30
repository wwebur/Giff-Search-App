export interface Inputs {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
}

export interface UserInput {
  username: string;
  password: string;
  likedGifs: any[];
}

export interface IGif {
  id: string;
  url: string;
  title: string;
  image: string;
  embedUrl: string;
  isLiked: boolean;
}
