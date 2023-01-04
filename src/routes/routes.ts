import { Router, Request, Response } from "express";

import {
  checkCpf,
  checkInputsTransactions,
  checkInputsUsers,
  checkListLength,
  checkTransactions,
  getFilter,
  getFilterTransaction,
  getId,
  getTransactionId,
  getUserId,
} from "../middlewares";

import functions from "../service/functions";

export const router = Router();

router.post("/users", [checkCpf, checkInputsUsers], functions.addUsers);

router.post(
  "/user/:userId/transactions",
  [getUserId, checkInputsTransactions],
  functions.addTransaction
);

router.get("/users", [getFilter, checkListLength], functions.showUsers);

router.get("/users/:id", getId, functions.showUser);

router.get(
  "/users/:userId/transactions",
  [getUserId, getFilterTransaction],
  functions.showUserTransactions
);

router.get(
  "/user/:userId/transactions/:id",
  [getUserId, getTransactionId, checkTransactions],
  functions.showTransactionForId
);

router.put("/users/:id", getId, functions.updateUser);

router.put(
  "/users/:userId/transactions/:id",
  [getUserId, getTransactionId, checkTransactions],
  functions.updateTransaction
);

router.delete("/users/:id", getId, functions.removeUser);

router.delete(
  "/users/:userId/transactions/:id",
  [getUserId, getTransactionId, checkTransactions],
  functions.removeTransaction
);
