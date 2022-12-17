import ITransaction from "./ITransactions";

export default interface IUsers {
  id: string;
  name: string;
  cpf: string;
  email: string;
  age: number;
  transactions: Array<ITransaction>;
}
