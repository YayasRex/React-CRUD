import './LoanForm.css';
import { useForm } from 'react-hook-form'
import ILoanClient from '../../types/ILoanClient';
import { LoanFormProps } from '../../types/props';

const LoanForm: React.FC<LoanFormProps> = ({ getDataClient }) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ILoanClient>({
    // mode: 'onChange',
    defaultValues: {
      name: '',
      lastName: '',
      amount: undefined,
      date: undefined,
      term: undefined,
    }
  });

  const onSubmit = (data: {}) => {
    getDataClient(data)
    reset();
  };

  return (
    <div className='LoanForm'>
      <h3>Add Client</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-field'>
          <label>Name</label>
          <input type='text' {...register('name', {
            required: { value: true, message: 'Required Field' }
          })} />
        </div>
        <div>{errors.name?.message}</div>
        <div className='input-field'>
          <label>LastName</label>
          <input type='text' {...register('lastName', {
            required: { value: true, message: 'Required Field' }
          })} />
        </div>
        <div>{errors.lastName?.message}</div>
        <div className='input-field'>
          <label>Loan amount</label>
          <input type='number' max='100000' min='5000' {...register('amount', {
            required: { value: true, message: 'Required Field' }
          })} />
        </div>
        <div>{errors.amount?.message}</div>
        <div className='input-field'>
          <label>Loan date</label>
          <input type='date' {...register('date', {
            required: { value: true, message: 'Required Field' }
          })} />
        </div>
        <div>{errors.date?.message}</div>
        <div className='input-field'>
          <label>Term</label>
          <input type='number' max="48" min="1" {...register('term', {
            required: { value: true, message: 'Required Field' }
          })} />
        </div>
        <div>{errors.term?.message}</div>
        <div className='subm-btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default LoanForm; 