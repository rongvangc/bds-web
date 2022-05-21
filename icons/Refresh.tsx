import React from 'react';
import { IconProps } from '../utils/types';

export const RefreshIcon = ({
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
        d="M6.54543 8.16272C6.33021 8.10594 6.15133 7.9565 6.05716 7.75481C5.963 7.55313 5.96329 7.32003 6.05795 7.11858L7.7187 3.58419C7.84246 3.32081 8.10742 3.15279 8.39843 3.15315C8.68944 3.15351 8.95398 3.32218 9.07709 3.58587L9.80971 5.15511C9.83591 5.14481 9.86295 5.13589 9.89078 5.12843C14.2381 3.96356 18.7067 6.54347 19.8715 10.8908C21.0364 15.2382 18.4565 19.7067 14.1091 20.8716C9.7618 22.0364 5.29326 19.4565 4.12839 15.1092C3.75797 13.7267 3.7663 12.3299 4.09074 11.0311C4.19112 10.6293 4.59828 10.3849 5.00015 10.4853C5.40201 10.5856 5.6464 10.9928 5.54602 11.3947C5.28172 12.4527 5.27444 13.5907 5.57728 14.721C6.52774 18.2681 10.1738 20.3731 13.7209 19.4227C17.2681 18.4722 19.3731 14.8262 18.4226 11.279C17.4877 7.7899 13.9447 5.69608 10.4531 6.53314L11.1923 8.11644C11.3154 8.38013 11.2748 8.69123 11.0882 8.91457C10.9017 9.1379 10.6027 9.23314 10.3214 9.1589L6.54543 8.16272Z"
        fill={color}
      />
    </svg>
  );
};
