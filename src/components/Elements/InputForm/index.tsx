import { OptionData } from '@/utils/types';
import React, { HTMLAttributes, useState } from 'react';
import SelectElement from '../SelectElement';
import dynamic from 'next/dynamic';
import { FastField, Field } from 'formik';
import Upload from '../Upload';

type InputFormType = {
  id: string;
  label: string;
  value: string | number | OptionData | File;
  placeholder?: string;
  type?: 'text' | 'textarea' | 'select' | 'upload';
  error?: string;
  options?: OptionData[];
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
  onChange: (e: React.ChangeEvent<any>) => void;
};

const Editor = dynamic(() => import('../Editor'), {
  ssr: false,
});

export const InputForm: React.FC<InputFormType> = ({
  id,
  label,
  value,
  className = 'w-full mb-4',
  type = 'text',
  placeholder = 'Placeholder',
  options = [],
  error,
  onChange,
}) => {
  let component;

  switch (type) {
    case 'text':
      component = (
        <FastField
          id={id}
          name={id}
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="w-full rounded-md border px-2 py-1 outline-none"
        />
      );
      break;
    case 'select':
      component = (
        <SelectElement
          id={id}
          initialValue={value as OptionData}
          placeholder={placeholder}
          options={options}
          className="w-fit"
          onOptionChange={(data) =>
            onChange({
              target: { value: +data.value },
              type: id,
            } as unknown as any)
          }
        />
      );
      break;
    case 'upload':
      component = <Upload currentImage={value as string} onChange={onChange} />;
      break;
    case 'textarea':
      component = <Editor onDataSave={onChange} id="post" />;
      break;
  }

  return (
    <div className={`${className}`}>
      <label className="mb-2 block text-xs font-bold" htmlFor={id}>
        {label}
      </label>
      <div className="block">{component}</div>
      {error && <p className="text-secondary">{error}</p>}
    </div>
  );
};
