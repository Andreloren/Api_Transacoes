export default interface ITransaction {
  uid: string;
  title: string;
  value: number;
  type: "outcome" | "income";
}
