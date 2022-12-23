import { Request, Response } from "express";
import { User } from "../classes/User";
import { userList } from "../data/user.data";
import IUsers from "../interfaces/IUsers";

export function addUsers(req: Request, res: Response) {
  const { name, cpf, email, age } = req.body;

  const newUser: IUsers = new User(name, cpf, email, age);

  userList.push(newUser);

  return res.status(201).json({
    sucess: true,
    message: "Cliente adicionado com sucesso!!",
    data: newUser,
  });
}
