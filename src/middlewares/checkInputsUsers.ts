import { Request, Response, NextFunction } from "express";

export const checkInputsUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, cpf, email, age } = req.body;

  if (!name || !cpf || !email || !age) {
    return res.status(404).json({
      sucess: false,
      message: "Favor informar nome, cpf, email e idade",
    });
  }
  next();
};
