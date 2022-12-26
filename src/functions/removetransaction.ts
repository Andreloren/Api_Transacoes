import { Request, Response } from "express";

export function removeTransaction(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = req.body;

  const index = user.transactions.findIndex((f: { id: string }) => f.id === id);

  const userExclude = user.transactions[index];

  user.transactions.splice(index, 1);

  res.status(200).json({
    sucess: true,
    mensage: "Transação excluída com sucesso!!",
    data: {
      ID: userExclude.id,
      Título: userExclude.title,
      Valor: userExclude.value,
      Tipo: userExclude.type,
    },
  });
}
