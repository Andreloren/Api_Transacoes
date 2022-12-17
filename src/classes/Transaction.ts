import { v4 } from "uuid";
import ITransaction from "../interfaces/ITransactions";

class Transaction implements ITransaction {
  uid: string;
  constructor(
    public title: string,
    public value: number,
    public type: "outcome" | "income"
  ) {
    this.uid = v4();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
