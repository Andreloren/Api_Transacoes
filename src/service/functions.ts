import { Request, Response } from "express";

import Transaction from "../classes/Transaction";
import User from "../classes/User";

import { userList } from "../data/user.data";

import { values } from "../functions/values";

import { IResponseDefault, ITransaction, IUsers } from "../interfaces/";

class functionsUsers {
  showUser(req: Request, res: Response) {
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
    } as IResponseDefault);
  }

  showUsers(req: Request, res: Response) {
    res.status(302).json({
      sucess: true,
      message: "Lista de Clientes válida",
      data: userList.map((user) => {
        return {
          ID: user.id,
          Nome: user.name,
          CPF: user.cpf,
          Email: user.email,
          Idade: user.age,
        };
      }),
    } as IResponseDefault);
  }

  showUserTransactions(req: Request, res: Response) {
    const { user } = req.body;

    if (!user.transactions || user.transactions.length === 0) {
      return res.status(404).json({
        sucess: false,
        message: "Transação não encontrada",
      } as IResponseDefault);
    }

    return res.status(302).json({
      sucess: true,
      message: "Transações localizadas com sucesso",
      data: user.transactions,
      balance: values(req, res),
    } as IResponseDefault);
  }

  showTransactionForId(req: Request, res: Response) {
    const { transaction } = req.body;

    return res.status(302).json({
      sucess: true,
      message: `Transação localizada com sucesso ID: ${transaction.id}`,
      data: {
        Título: transaction.title,
        Valor: transaction.value,
        Tipo: transaction.type,
      },
    } as IResponseDefault);
  }

  addUsers(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;

    const newUser: IUsers = new User(name, cpf, email, age);

    userList.push(newUser);

    return res.status(201).json({
      sucess: true,
      message: "Cliente adicionado com sucesso!!",
      data: newUser,
    } as IResponseDefault);
  }

  addTransaction(req: Request, res: Response) {
    const { title, value, type, user } = req.body;

    const newTransaction: ITransaction = new Transaction(title, value, type);

    user.transactions.push(newTransaction);

    return res.status(201).json({
      sucess: true,
      message: "Transação adicionada com sucesso!!",
      data: newTransaction,
    } as IResponseDefault);
  }

  updateUser(req: Request, res: Response) {
    const { name, cpf, email, age, index } = req.body;

    if (!name && !cpf && !email && !age) return res.status(304).json();

    if (name) userList[index].name = name;
    if (cpf) userList[index].cpf = cpf;
    if (email) userList[index].email = email;
    if (age) userList[index].age = age;

    return res.status(200).json({
      sucess: true,
      message: "Usuário alterado",
      data: {
        Nome: userList[index].name,
        CPF: userList[index].cpf,
        Email: userList[index].email,
        Idade: userList[index].age,
      },
    } as IResponseDefault);
  }

  updateTransaction(req: Request, res: Response) {
    const { transaction, title, value, type } = req.body;

    if (!title && !value && !type) return res.status(304).json();

    if (title) transaction.title = title;
    if (value) transaction.value = value;
    if (type) transaction.type = type;

    return res.status(302).json({
      sucess: true,
      message: "Transação alterada",
      data: {
        Título: transaction.title,
        Valor: transaction.value,
        Tipo: transaction.type,
      },
    } as IResponseDefault);
  }

  removeUser(req: Request, res: Response) {
    const { index } = req.body;

    const userExclude = userList[index];

    userList.splice(index, 1);

    res.status(200).json({
      sucess: true,
      message: "Usuário excluído com sucesso!!",
      data: {
        Nome: userExclude.name,
        CPF: userExclude.cpf,
        Email: userExclude.email,
        Idade: userExclude.age,
      },
    } as IResponseDefault);
  }

  removeTransaction(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = req.body;

    const index = user.transactions.findIndex(
      (f: { id: string }) => f.id === id
    );

    const userExclude = user.transactions[index];

    user.transactions.splice(index, 1);

    res.status(200).json({
      sucess: true,
      message: "Transação excluída com sucesso!!",
      data: {
        ID: userExclude.id,
        Título: userExclude.title,
        Valor: userExclude.value,
        Tipo: userExclude.type,
      },
    } as IResponseDefault);
  }
}

const functions = new functionsUsers();

export default functions;
