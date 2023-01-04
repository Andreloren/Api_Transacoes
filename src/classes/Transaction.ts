import { v4 } from "uuid";
import { ITransaction } from "../interfaces";

class Transaction implements ITransaction {
  id: string;
  constructor(
    public title: string,
    public value: number,
    public type: "outcome" | "income"
  ) {
    this.id = v4();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
