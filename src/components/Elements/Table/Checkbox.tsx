import React, { HTMLProps, useEffect, useRef } from 'react';

type IndeterminateCheckboxProps = {
  indeterminate?: boolean;
} & HTMLProps<HTMLInputElement>;

const IndeterminateCheckbox: React.FC<IndeterminateCheckboxProps> = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate]);

  return (
    <>
      <input
        type="checkbox"
        ref={ref}
        className={className + ' cursor-pointer'}
        {...rest}
      />
      <label htmlFor={rest?.id} />
    </>
  );
};

export default IndeterminateCheckbox;
