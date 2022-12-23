import { Router, Request, Response } from "express";

import {
  addTransaction,
  addUsers,
  removeUser,
  showUser,
  showUsers,
  updateUser,
  showTransactionForId,
  showUserTransactions,
} from "../functions";

import {
  checkCpf,
  checkInputsTransactions,
  checkInputsUsers,
  checkListLength,
  getFilter,
  getFilterTransaction,
  getId,
  getUserId,
} from "../middlewares";

export const router = Router();

router.post(
  "/users",
  [checkCpf, checkInputsUsers],
  (req: Request, res: Response) => {
    addUsers(req, res);
  }
);

router.post(
  "/user/:userId/transactions",
  [getUserId, checkInputsTransactions],
  (req: Request, res: Response) => {
    addTransaction(req, res);
  }
);

router.get(
  "/users",
  [getFilter, checkListLength],
  (req: Request, res: Response) => {
    showUsers(req, res);
  }
);

router.get("/users/:id", getId, (req: Request, res: Response) => {
  showUser(req, res);
});

router.get(
  "/users/:userId/transactions",
  [getUserId, getFilterTransaction],
  (req: Request, res: Response) => {
    showUserTransactions(req, res);
  }
);

router.get(
  "/user/:userId/transactions/:id",
  getUserId,
  (req: Request, res: Response) => {
    showTransactionForId(req, res);
  }
);

router.put("/users/:id", getId, (req: Request, res: Response) => {
  updateUser(req, res);
});

router.delete("/users/:id", getId, (req: Request, res: Response) => {
  removeUser(req, res);
});
