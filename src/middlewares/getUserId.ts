import { Request, Response, NextFunction } from "express";
import { userList } from "../data/user.data";

export const getUserId = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  const user = userList.find((user) => user.id == userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Usuário não encontrado",
    });
  }

  req.body = { user, ...req.body };

  next();
};
