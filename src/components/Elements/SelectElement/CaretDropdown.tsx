import React from 'react';
import { CaretDownIcon } from '../../../icons/CaretDown';
import { CaretUpIcon } from '../../../icons/CaretUp';
import { Colors } from '../../../utils/types';

interface CaretDropdownProps {
  show?: boolean;
  color?: Colors;
}

export const CaretDropdown: React.FC<CaretDropdownProps> = ({
  show,
  color,
}) => {
  return show ? <CaretUpIcon color={color} /> : <CaretDownIcon color={color} />;
};
