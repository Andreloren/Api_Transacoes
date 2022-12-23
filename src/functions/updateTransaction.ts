import { Request, Response } from "express";

export function updateTransaction(req: Request, res: Response) {
  const { transaction, title, value, type } = req.body;

  if (!title && !value && !type) return res.status(304).json();

  if (title) transaction.title = title;
  if (value) transaction.value = value;
  if (type) transaction.type = type;

  return res.status(302).json({
    sucess: true,
    message: "Transação alterada",
    data: {
      Título: transaction.title,
      Valor: transaction.value,
      Tipo: transaction.type,
    },
  });
}
