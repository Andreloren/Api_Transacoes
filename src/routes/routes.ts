import { Router, Request, Response } from "express";
import { userList } from "../classes/User";
import { addUsers } from "../functions/addUsers";
import { removeUser } from "../functions/removeUser";
import { updateUser } from "../functions/updateUser";
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

router.get("/users/:id", getUserId, (req: Request, res: Response) => {
  const { index } = req.body;
  res.status(302).json({
    sucess: true,
    message: `Usuário localizado com sucesso ID: ${userList[index].id}`,
    data: {
      Nome: userList[index].name,
      CPF: userList[index].cpf,
      Email: userList[index].email,
      Idade: userList[index].age,
    },
  });
});

router.put("/users/:id", getUserId, (req: Request, res: Response) => {
  updateUser(req, res);
});

router.delete("/users/:id", getUserId, (req: Request, res: Response) => {
  removeUser(req, res);
});
