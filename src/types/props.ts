import ILoanClient, { LoanClient } from "./ILoanClient"


export interface AppProps {};

export interface ClientListProps {
  clientList: ILoanClient[],
  editClient: Function,
  deleteClient: Function,
  setEditing: boolean
};

export interface EditLoanFormProps {
  currentClient: ILoanClient|LoanClient,
  updateClient: Function,
  cancelEditing: Function
};

export interface LoanFormProps {
  getDataClient: Function
};

export interface TotalLoansProps {
  clientList: ILoanClient[]
};