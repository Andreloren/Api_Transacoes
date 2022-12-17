import { Request, Response, NextFunction } from "express";
import { userList } from "../classes/User";

export const getFilter = (req: Request, res: Response, next: NextFunction) => {
  const { filter } = req.query;

  if (filter) {
    return res.json({
      sucesso: true,
      data: userList
        .filter(
          (f) =>
            f.name.toLowerCase().includes(filter.toString().toLowerCase()) ||
            f.cpf.toLowerCase().includes(filter.toString().toLowerCase()) ||
            f.email.toLowerCase().includes(filter.toString().toLowerCase())
        )
        .map((u) => {
          return {
            ID: u.id,
            Nome: u.name,
            CPF: u.cpf,
            Email: u.email,
            Idade: u.age,
          };
        }),
    });
  }

  next();
};
