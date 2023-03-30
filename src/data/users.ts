import IUser from "../interfaces/User";
import bcryptjs from "bcryptjs";

const usersData: IUser[] = [
  {
    name: "George ",
    email: "giorgishalamberidze1995@gmail.com",
    password: bcryptjs.hashSync("Ablabuda123"),
    isAdmin: true,
  },
  {
    name: "Papa",
    email: "papapapa@yandex.ru",
    password: bcryptjs.hashSync("roko"),
    isAdmin: false,
  },
];

export default usersData;
