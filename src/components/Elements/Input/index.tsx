import { memo } from 'react';

interface InputProps {
  id: string;
  label?: string;
  type?: 'number' | 'password' | 'text' | 'file';
  placeholder?: string;
  classNameContainer?: string;
  errorMessage?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  classNameContainer,
  errorMessage,
  onChange,
}) => {
  return (
    <div className={`mb-4 ${classNameContainer}`}>
      {label && (
        <label className="text-gray-700 mb-2 block text-sm font-bold">
          {label}
        </label>
      )}
      <input
        className={`${
          !!errorMessage && 'border-red'
        } text-gray-700 focus:shadow-outline mb-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none`}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {!!errorMessage && (
        <p className="text-xs italic text-red">{errorMessage}</p>
      )}
    </div>
  );
};

export default memo(Input);
