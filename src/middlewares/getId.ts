import { Request, Response, NextFunction } from "express";
import { userList } from "../classes/User";

export const getId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, cpf, email, age, transactions } = req.body;

  const index = userList.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Usuário não localizado",
    });
  }
  req.body = { name, cpf, email, age, index, transactions };

  next();
};
