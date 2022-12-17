import { Request, Response, NextFunction } from "express";
import { userList } from "../classes/User";

export const checkListLength = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (userList.length === 0)
    return res.status(404).json({
      sucesso: false,
      mensagem: "Não foi localizado nenhum usuário",
    });
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

  next();
};
