import React, { FormEvent, RefObject } from 'react';
import { isArrayWithLength } from '../../../utils/common';
import { OptionData } from '../../../utils/types';

interface MenuProps {
  menuRef: RefObject<any>;
  menuOptions: OptionData[];
  onMouseDown: (e: FormEvent<Element>) => void;
  onClick: (data: OptionData) => void;
  onFormatDescription: (data: OptionData) => string;
}

export const Menu: React.FC<MenuProps> = ({
  menuRef,
  menuOptions,
  onMouseDown,
  onClick,
  onFormatDescription,
}) => {
  if (!isArrayWithLength(menuOptions))
    return (
      <div className="menu absolute mt-2 w-full rounded-md bg-white py-2 px-4 shadow-md">
        Không tìm thấy
      </div>
    );

  return (
    <div className="absolute mt-2 mb-2 box-border w-full rounded-md bg-white p-2 shadow-md">
      <div className="menu max-h-60 overflow-y-auto" ref={menuRef}>
        {menuOptions?.map((item) => (
          <p
            onMouseDown={onMouseDown}
            onClick={() => onClick(item)}
            key={item?.id}
            className="border-1 my-1 cursor-pointer border-b border-gray/50 py-1 px-4 last:border-0 hover:bg-gray/50"
          >
            {onFormatDescription(item)}
          </p>
        ))}
      </div>
    </div>
  );
};
