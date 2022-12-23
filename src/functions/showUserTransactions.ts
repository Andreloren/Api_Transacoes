import { Request, Response } from "express";

export function showUserTransactions(req: Request, res: Response) {
  const { user } = req.body;

  if (!user.transactions || user.transactions.length === 0) {
    return res.status(404).json({
      success: false,
      message: "Transação não encontrada",
    });
  }

  return res.status(302).json({
    sucess: true,
    message: "Transações localizadas com sucesso",
    data: user.transactions,
  });
}
