import { Request, Response } from "express";
import { userList } from "../data/user.data";

export function showTransactionForId(req: Request, res: Response) {
  const { userId, id } = req.params;

  const user = userList.find((u) => u.id === userId)!;

  const transaction = user.transactions.find((t) => t.id === id)!;

  if (!transaction) {
    return res.status(404).json({
      success: false,
      message: "Transação não encontrada",
    });
  }

  return res.status(302).json({
    sucess: true,
    message: `Transação localizada com sucesso ID: ${transaction.id}`,
    data: {
      Título: transaction.title,
      Valor: transaction.value,
      Tipo: transaction.type,
    },
  });
}
