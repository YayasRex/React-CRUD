import './EditLoanForm.css';
import { useForm } from 'react-hook-form'
import ILoanClient, { LoanClient } from '../../types/ILoanClient';
import { EditLoanFormProps } from '../../types/props';

const EditLoanForm: React.FC<EditLoanFormProps> = ({ currentClient, updateClient, cancelEditing }) => {
  console.log(currentClient)
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ILoanClient | LoanClient>({
    defaultValues: currentClient
  });

  setValue('name', currentClient.name);
  setValue('lastName', currentClient.lastName);
  setValue('amount', currentClient.amount);
  setValue('date', currentClient.date);
  setValue('term', currentClient.term);

  const onSubmit = (data: {}) => {
    updateClient(data);
    reset();
  };

  return (
    <div className='EditLoanForm'>
      <h3>Edit Client</h3>
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
          <button type='submit'>Update</button>
          <button type='button' onClick={() => cancelEditing()}>Cancel</button>
        </div>
      </form>
    </div>
  )
};

export default EditLoanForm; 