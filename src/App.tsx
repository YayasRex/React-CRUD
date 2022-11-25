import './App.css'
import { useState } from "react";
import ClientList from "./components/ClientList/ClientLIst";
import EditLoanForm from './components/EditLoanForm/EditLoanForm';
import LoanForm from "./components/LoanForm/LoanForm";
import TotalLoans from "./components/TotalLoans/TotalLoans";
import ILoanClient, { LoanClient } from "./types/ILoanClient";

const App = () => {

  const [clients, setClients] = useState<ILoanClient[]>([]);
  const [editing, setEditing] = useState(false);
  const [clientIndex, setClientIndex] = useState(0);
  const [currentClient, setCurrentClient] = useState<ILoanClient | LoanClient>(new LoanClient());

  const getDataClient = (data: ILoanClient) => {
    paymentPerClient(data)
    setClients([...clients, data])
  };

  const deleteClient = (index: number) => {
    setClients(clients.filter((person, i) => i !== index));
  };

  const editClient = (index: number, client: ILoanClient) => {
    setClientIndex(index);
    setEditing(true);
    setCurrentClient(client);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  const updateClient = (updatedClient: ILoanClient) => {
    setEditing(false);
    paymentPerClient(updatedClient);
    setClients(clients.map((client, index) => clientIndex === index ? updatedClient : client))
  };

  const paymentPerClient = (client: ILoanClient): void => {
      client.term <= 3 ? client.finalPayment = Number((client.amount * 1.08).toFixed(2))
      : client.term >= 4 && client.term <= 8 ? client.finalPayment = Number((client.amount * 1.12).toFixed(2))
        : client.term >= 9 && client.term <= 12 ? client.finalPayment = Number((client.amount * 1.14).toFixed(2))
          : client.term > 12 && (client.finalPayment = Number((client.amount * 1.18).toFixed(2)))
  };

  return (
    <div className='App'>
      {editing ? <EditLoanForm currentClient={currentClient} updateClient={updateClient} cancelEditing={cancelEditing}/> :
        <LoanForm getDataClient={getDataClient} />}
      <TotalLoans clientList={clients} />
      <ClientList clientList={clients} deleteClient={deleteClient} editClient={editClient} setEditing={editing} />
    </div>
  )
};

export default App;