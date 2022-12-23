import { Request, Response } from "express";
import { userList } from "../data/user.data";

export function updateUser(req: Request, res: Response) {
  const { name, cpf, email, age, index } = req.body;

  if (!name && !cpf && !email && !age) return res.status(304).json();

  if (name) userList[index].name = name;
  if (cpf) userList[index].cpf = cpf;
  if (email) userList[index].email = email;
  if (age) userList[index].age = age;

  return res.status(200).json({
    sucess: true,
    mensage: "Growdever alterado",
    data: {
      Nome: userList[index].name,
      CPF: userList[index].cpf,
      Email: userList[index].email,
      Idade: userList[index].age,
    },
  });
}
