import { useEffect, useState } from 'react';
import { TotalLoansProps } from '../../types/props';
import './TotalLoans.css'

const TotalLoans: React.FC<TotalLoansProps> = ({ clientList }) => {
  const [finalPay, setFinalPay] = useState(0);
  
  useEffect(() => {
    setFinalPay(Number((clientList?.reduce(
      (ac, curr) => curr.finalPayment ? ac + curr.finalPayment : ac, 0
    )).toFixed(2)))

  }, [finalPay, clientList])

  return (
    <div className='TotalLoans'>
      <h1>Total payments ${finalPay}</h1>
    </div>
  )
};

export default TotalLoans;