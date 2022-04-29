import users from "../users"

interface UserInput {
  username: string;
  password: string;
};

interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
};

const auth = ( userDatabase: User[], userInput: UserInput) => {
  const existUser: User | undefined = userDatabase.find(user => user.username === userInput.username);

} 

export default auth