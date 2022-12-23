import { Request, Response } from "express";

export function values(req: Request, res: Response) {
  const { user } = req.body;

  const transaction = user.transactions;

  const income = transaction
    .filter((f: { type: string }) => f.type === "income")
    .reduce((ant: number, value: { value: number }) => ant + value.value, 0);

  const outcome = transaction
    .filter((f: { type: string }) => f.type === "outcome")
    .reduce((ant: number, value: { value: number }) => ant + value.value, 0);

  let total = income - outcome;

  return { income, outcome, total };
}
