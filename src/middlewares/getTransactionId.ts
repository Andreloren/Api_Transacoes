import { Request, Response, NextFunction } from "express";

export const getTransactionId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { user } = req.body;

  const transaction = user.transactions.find(
    (t: { id: string }) => t.id === id
  )!;

  req.body = { transaction, ...req.body };

  next();
};
