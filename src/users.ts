interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
}

const users: User[] = [
  {
    id: "1",
    username: "pepeArgento",
    password: "alfiobasile",
    fullname: "Jose Argento",
  },
  {
    id: "2",
    username: "coquiArgento",
    password: "papucho",
    fullname: "Alfio Argento",
  },
  {
    id: "3",
    username: "moniArgento",
    password: "cafecito",
    fullname: "Monica Argento",
  },
];

const usersJSON: string = JSON.stringify(users);

export default usersJSON;
