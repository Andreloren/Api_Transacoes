import { Router, Request, Response } from "express";
import { userList } from "../classes/User";
import { addTransaction } from "../functions/addTransaction";
import { addUsers } from "../functions/addUsers";
import { removeUser } from "../functions/removeUser";
import { showUser } from "../functions/showUser";
import { showUsers } from "../functions/showUsers";
import { updateUser } from "../functions/updateUser";
import { checkCpf } from "../middlewares/checkCpf";
import { checkInputsTransactions } from "../middlewares/checkInputsTransactions";
import { checkInputsUsers } from "../middlewares/checkInputsUsers";
import { checkListLength } from "../middlewares/checkListLength";
import { getFilter } from "../middlewares/getFilter";
import { getId } from "../middlewares/getId";
import { getUserId } from "../middlewares/getUserId";

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
  getUserId,
  (req: Request, res: Response) => {}
);

router.get(
  "/user/:userId/transactions/:id",
  getUserId,
  (req: Request, res: Response) => {}
);

router.put("/users/:id", getId, (req: Request, res: Response) => {
  updateUser(req, res);
});

router.delete("/users/:id", getId, (req: Request, res: Response) => {
  removeUser(req, res);
});

// const retornar = pets.filter(
//   (f) =>
//     // undefined
//     (f.nome === filtro || !filtro) &&
//     // undefined
//     (f.observacao == type || !type)
// );
