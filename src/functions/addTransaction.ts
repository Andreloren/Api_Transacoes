import { Request, Response } from "express";
import Transaction from "../classes/Transaction";
import ITransaction from "../interfaces/ITransactions";

export function addTransaction(req: Request, res: Response) {
  const { user } = req.body;
  const { title, value, type } = req.body;

  const newTransaction: ITransaction = new Transaction(title, value, type);
  console.log(newTransaction);
  console.log(title);

  user.transactions.push(newTransaction);

  return res.status(201).json({
    sucess: true,
    message: "Transação adicionada com sucesso!!",
    data: newTransaction,
  });
}
