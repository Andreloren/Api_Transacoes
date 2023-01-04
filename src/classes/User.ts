import { IUsers, ITransaction } from "../interfaces/";
import { v4 } from "uuid";

class User implements IUsers {
  id: string;
  transactions: Array<ITransaction>;

  constructor(
    public name: string,
    public cpf: string,
    public email: string,
    public age: number
  ) {
    this.id = v4();
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.age = age;
    this.transactions = [];
  }
}

export default User;
