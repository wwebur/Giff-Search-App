import {User, UserInput} from "../types";

const auth = (userDatabase: User[], userInput: UserInput) => {
  const existUser: User | undefined = userDatabase.find(
    (user) => user.username === userInput.username && user.password === userInput.password,
  );

  return existUser;
};

export default auth;
