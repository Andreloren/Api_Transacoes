import ITransaction from "./ITransactions";

export default interface IUsers {
  uid: string;
  name: string;
  cpf: string;
  email: string;
  age: number;
  transactions: Array<ITransaction>;
}
