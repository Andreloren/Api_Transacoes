import { Request, Response, NextFunction } from "express";

export const checkInputsTransactions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, value, type } = req.body;

  if (!title || !value || !type) {
    return res.status(404).json({
      sucess: false,
      message: "Favor informar título, valor e tipo",
    });
  }

  if (type !== "income" && type !== "outcome") {
    return res.status(404).json({
      sucess: false,
      message: "Favor informar tipo correto => income ou outcome",
    });
  }

  next();
};
