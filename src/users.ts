interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
}

const users: User[] = [
  {
    id: "1",
    username: "John Doe",
    password: "123456",
    fullname: "John Doe",
  },
];

export default users;
