import { Request, Response, NextFunction } from "express";

export const getFilterTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filter } = req.query;
  const { user } = req.body;

  if (filter) {
    return res.json({
      sucesso: true,
      data: user?.transactions
        .filter(
          (f: { title: string; type: string }) =>
            f.title.toLowerCase().includes(filter.toString().toLowerCase()) ||
            f.type.toLowerCase().includes(filter.toString().toLowerCase())
        )
        .map(
          (u: {
            id: string;
            title: string;
            value: number;
            type: "outcome" | "income";
          }) => {
            return {
              ID: u.id,
              Titulo: u.title,
              Valor: u.value,
              Tipo: u.type,
            };
          }
        ),
    });
  }

  next();
};
