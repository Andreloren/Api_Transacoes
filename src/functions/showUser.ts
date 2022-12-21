import { Request, Response } from "express";
import { userList } from "../classes/User";

export function showUser(req: Request, res: Response) {
  const { index } = req.body;
  res.status(302).json({
    sucess: true,
    message: `Usuário localizado com sucesso ID: ${userList[index].id}`,
    data: {
      Nome: userList[index].name,
      CPF: userList[index].cpf,
      Email: userList[index].email,
      Idade: userList[index].age,
    },
  });
}
