import { Request, Response } from "express";
import Transaction from "../classes/Transaction";
import ITransaction from "../interfaces/ITransactions";

export function addTransaction(req: Request, res: Response) {
  const { title, value, type, user } = req.body;

  const newTransaction: ITransaction = new Transaction(title, value, type);

  user.transactions.push(newTransaction);

  return res.status(201).json({
    sucess: true,
    message: "Transação adicionada com sucesso!!",
    data: newTransaction,
  });
}
