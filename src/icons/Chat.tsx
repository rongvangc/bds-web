import React from 'react';
import { IconProps } from '../utils/types';

export const ChatIcon = ({
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
        d="M8 9.50001C7.30964 9.50001 6.75 10.0597 6.75 10.75C6.75 11.4404 7.30964 12 8 12C8.69036 12 9.25 11.4404 9.25 10.75C9.25 10.0597 8.69036 9.50001 8 9.50001Z"
        fill={color}
      />
      <path
        d="M12 9.50001C11.3096 9.50001 10.75 10.0597 10.75 10.75C10.75 11.4404 11.3096 12 12 12C12.6904 12 13.25 11.4404 13.25 10.75C13.25 10.0597 12.6904 9.50001 12 9.50001Z"
        fill={color}
      />
      <path
        d="M14.75 10.75C14.75 10.0597 15.3096 9.50001 16 9.50001C16.6904 9.50001 17.25 10.0597 17.25 10.75C17.25 11.4404 16.6904 12 16 12C15.3096 12 14.75 11.4404 14.75 10.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1007 4.5928C13.4065 4.36304 10.6983 4.34971 8.00194 4.55293L7.80871 4.56749C5.23741 4.76129 3.25 6.90412 3.25 9.48272V18C3.25 18.2639 3.38867 18.5083 3.61515 18.6437C3.84163 18.7791 4.12261 18.7856 4.35504 18.6607L8.26583 16.5589C8.44774 16.4612 8.65104 16.41 8.85756 16.41H17.834C18.9661 16.41 19.9362 15.6006 20.1392 14.4869C20.5505 12.2296 20.5829 9.91966 20.2353 7.65176L20.1329 6.98343C19.9464 5.76668 18.951 4.83587 17.7245 4.73127L16.1007 4.5928ZM8.11468 6.04868C10.731 5.85149 13.359 5.86443 15.9733 6.08737L17.597 6.22585C18.1334 6.27158 18.5686 6.67862 18.6502 7.2107L18.7526 7.87903C19.075 9.98231 19.0449 12.1246 18.6635 14.218C18.5904 14.6188 18.2413 14.91 17.834 14.91H8.85756C8.40322 14.91 7.95596 15.0226 7.55575 15.2377L4.75 16.7455V9.48272C4.75 7.68881 6.13262 6.19807 7.92144 6.06325L8.11468 6.04868Z"
        fill={color}
      />
    </svg>
  );
};