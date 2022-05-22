import {NextApiRequest, NextApiResponse} from "next";

import usersDatabase from "../../src/users";
import {User} from "../../src/types";

const checkUser = (username: string, password: string) => {
  const existUser: User | undefined = usersDatabase.find(
    (user: User) => user.username === username && user.password === password,
  );

  return Boolean(existUser);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: {username, password},
  } = req;

  const isUserFound = checkUser(username, password);

  if (isUserFound) {
    res.status(200).json({
      message: "User found succesfully",
      data: {
        username,
      },
    });
  } else {
    res.status(404).json("User not found");
  }
}
