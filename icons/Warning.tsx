import React from 'react';
import { IconProps } from '../utils/types';

export const WarningIcon = ({
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
        d="M13 8.99999C13 9.55227 12.5523 9.99999 12 9.99999C11.4477 9.99999 11 9.55227 11 8.99999C11 8.4477 11.4477 7.99999 12 7.99999C12.5523 7.99999 13 8.4477 13 8.99999Z"
        fill={color}
      />
      <path
        d="M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5V17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5V12.5C11.25 12.0858 11.5858 11.75 12 11.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2703 3.99262C13.1784 2.39496 10.8216 2.39495 9.72961 3.99262L9.29769 4.62457C6.59165 8.58378 4.26669 12.7904 2.35396 17.1881L2.26374 17.3955C1.58969 18.9453 2.60805 20.705 4.2876 20.8927C9.41323 21.4656 14.5867 21.4656 19.7124 20.8927C21.3919 20.705 22.4103 18.9453 21.7362 17.3955L21.646 17.1881C19.7333 12.7904 17.4083 8.58379 14.7023 4.62457L14.2703 3.99262ZM10.968 4.83903C11.4643 4.11282 12.5356 4.11282 13.032 4.83903L13.4639 5.47098C16.1165 9.352 18.3955 13.4755 20.2705 17.7863L20.3607 17.9938C20.6321 18.6178 20.222 19.3264 19.5458 19.402C14.5309 19.9625 9.46911 19.9625 4.4542 19.402C3.77791 19.3264 3.36785 18.6178 3.63927 17.9938L3.72948 17.7863C5.60443 13.4755 7.88348 9.35199 10.5361 5.47098L10.968 4.83903Z"
        fill={color}
      />
    </svg>
  );
};
