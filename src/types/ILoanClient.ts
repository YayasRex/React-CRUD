interface ILoanClient {
  name: string,
  lastName: string,
  amount: number,
  date: Date,
  term: number,
  finalPayment?: number
};

export class LoanClient {
  name: string;
  lastName: string;
  amount: number | null;
  date: Date | null;
  term: number | null;
  finalPayment?: number | null;
  constructor() {
    this.name = '';
    this.lastName = '';
    this.amount = null;
    this.date = null;
    this.term = null;
    this.finalPayment = null;
  }
}

export default ILoanClient;