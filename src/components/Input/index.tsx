import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IForm } from '../Form';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IForm>;
  text: string;
  register: UseFormRegister<IForm>;
  required: boolean;
  errorMessage: string | undefined;
};

export default function Input ({ label, text, register, required, errorMessage, type, ...rest }: IInput){
  return (
  <>
    <label htmlFor={label}>{text}</label>
    <input {...register(label, { required })} type={type} {...rest}/>
    {errorMessage && <span className="error-text">{errorMessage}</span> }
  </>
 )
};