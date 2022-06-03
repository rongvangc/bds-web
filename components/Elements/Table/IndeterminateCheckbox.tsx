import React, { forwardRef, Ref, useEffect, useRef } from 'react';

type IndeterminateCheckboxRef = {
  indeterminate: Ref<HTMLInputElement>;
};

export const IndeterminateCheckbox = forwardRef<IndeterminateCheckboxRef>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);
