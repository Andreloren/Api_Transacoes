import { ITransaction } from "./ITransactions";

export interface IUsers {
  id: string;
  name: string;
  cpf: string;
  email: string;
  age: number;
  transactions: Array<ITransaction>;
}
