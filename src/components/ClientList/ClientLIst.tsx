import React, { useEffect } from 'react';
import { ClientListProps } from '../../types/props';
import './ClientList.css';

const ClientList: React.FC<ClientListProps> = ({ clientList, editClient, deleteClient, setEditing }) => {

  const deleteCl = (index: number) => {
    deleteClient(index);
  };

  useEffect(() => {

  }, [clientList])

  return (<>
    {clientList.length && (
      <div className='ClientList'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Loan Amount</th>
              <th>Loan Date</th>
              <th>Term (Months)</th>
              <th>Final payment</th>
              <th>{!setEditing ? "Settings" : "Edit Mode"}</th>
            </tr>
          </thead>
          <tbody>
            {clientList.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.lastName}</td>
                  <td>${person.amount}</td>
                  <td>{String(person.date)}</td>
                  <td>{person.term}</td>
                  <td>${person.finalPayment}</td>
                  <td className='buttons'>
                    <button onClick={() => editClient(index, person)}>Edit ✏️</button>
                    { !setEditing && <button onClick={() => deleteCl(index)}>Delete ❌</button>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )}
  </>
  )
};

export default ClientList;