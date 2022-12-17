import { Router, Request, Response } from "express";
import { addUsers } from "../functions/addUsers";
import { checkCpf } from "../middlewares/checkCpf";
import { checkListLength } from "../middlewares/checkListLength";
import { getFilter } from "../middlewares/getFilter";
import { getUserId } from "../middlewares/getUserId";

export const router = Router();

router.post("/users", checkCpf, (req: Request, res: Response) => {
  addUsers(req, res);
});

router.get(
  "/users",
  [getFilter, checkListLength],
  (req: Request, res: Response) => {}
);

router.get("/users/:id", getUserId, (req: Request, res: Response) => {});
