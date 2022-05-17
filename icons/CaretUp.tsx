import React from 'react';
import { IconProps } from '../utils/types';

export const CaretUpIcon = ({
  width = 24,
  height = 24,
  color = '#212529',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5303 14.0303C16.2374 14.3232 15.7626 14.3232 15.4697 14.0303L12 10.5607L8.53033 14.0303C8.23744 14.3232 7.76256 14.3232 7.46967 14.0303C7.17678 13.7374 7.17678 13.2626 7.46967 12.9697L11.4697 8.96967C11.7626 8.67678 12.2374 8.67678 12.5303 8.96967L16.5303 12.9697C16.8232 13.2626 16.8232 13.7374 16.5303 14.0303Z"
        fill={color}
      />
    </svg>
  );
};
