export default interface ITransaction {
  id: string;
  title: string;
  value: number;
  type: "outcome" | "income";
}
