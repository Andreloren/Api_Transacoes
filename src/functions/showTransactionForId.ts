import { Request, Response } from "express";

export function showTransactionForId(req: Request, res: Response) {
  const { transaction } = req.body;

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
