import { Request, Response } from "express";

export function showTransactionForId(req: Request, res: Response) {
  const { transaction } = req.body;

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
