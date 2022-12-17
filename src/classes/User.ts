import IUsers from "../interfaces/IUsers";
import ITransaction from "../interfaces/ITransactions";
import { v4 } from "uuid";

export class User implements IUsers {
  uid: string;
  transactions: Array<ITransaction>;

  constructor(
    public name: string,
    public cpf: string,
    public email: string,
    public age: number
  ) {
    this.uid = v4();
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.age = age;
    this.transactions = [];
  }
}

export let userList: User[] = [];
