import { Request, Response, NextFunction } from "express";
import { userList } from "../classes/User";

export const checkCpf = (req: Request, res: Response, next: NextFunction) => {
  const { cpf } = req.body;

  const cpfValid = userList.some((u) => u.cpf === cpf);

  if (cpfValid) {
    return res.status(403).json({
      sucess: false,
      message: "CPF já existe na base",
    });
  }
  next();
};
