import { Request, Response } from "express";
import { userList } from "../classes/User";

export function removeUser(req: Request, res: Response) {
  const { index } = req.body;

  const userExclude = userList[index];

  userList.splice(index, 1);

  res.status(200).json({
    sucess: true,
    mensage: "Usuário excluído com sucesso!!",
    data: {
      Nome: userExclude.name,
      CPF: userExclude.cpf,
      Email: userExclude.email,
      Idade: userExclude.age,
    },
  });
}
