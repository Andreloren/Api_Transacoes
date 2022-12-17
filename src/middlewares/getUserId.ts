import { Request, Response, NextFunction } from "express";
import { userList } from "../classes/User";

export const getUserId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const index = userList.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Usuário não localizado",
    });
  }

  res.status(200).json({
    sucess: true,
    message: "Usuário localizado com sucesso",
    data: userList.map((user) => {
      return {
        Nome: user.name,
        CPF: user.cpf,
        Email: user.email,
        Idade: user.age,
      };
    }),
  });

  next();
};
