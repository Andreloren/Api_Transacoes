import { Request, Response, NextFunction } from "express";

export const checkTransactions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { transaction } = req.body;

  if (!transaction) {
    return res.status(404).json({
      success: false,
      message: "Transação não encontrada",
    });
  }

  next();
};
