import { Request, Response } from "express";
import { userList } from "../classes/User";

export function showUsers(req: Request, res: Response) {
  res.status(302).json({
    sucess: true,
    message: "Lista de Clientes válida",
    data: userList.map((user) => {
      return {
        ID: user.id,
        Nome: user.name,
        CPF: user.cpf,
        Email: user.email,
        Idade: user.age,
      };
    }),
  });
}
