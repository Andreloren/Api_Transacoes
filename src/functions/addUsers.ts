import { Request, Response } from "express";
import { User, userList } from "../classes/User";
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
