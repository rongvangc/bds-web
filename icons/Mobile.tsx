import React from 'react';
import { IconProps } from '../utils/types';

export const MobileIcon = ({
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
        d="M18.7502 10.5001L18.7437 10.7429L18.7502 11.0001L18.7441 11.2433L18.7502 11.5001L18.7443 11.745L18.7502 12.0001L18.5878 19.1031C18.5493 20.7884 17.2675 22.184 15.5916 22.3655C13.2042 22.624 10.7958 22.624 8.40837 22.3655C6.73246 22.184 5.45069 20.7884 5.41217 19.1031L5.24978 12.0001L5.25565 11.7433L5.2498 11.5001L5.25596 11.2443L5.24975 11.0001L5.25626 10.744L5.24969 10.5001L5.4137 4.40214C5.41599 4.31706 5.42197 4.23286 5.43149 4.14971L5.43522 4.11455L5.43818 4.08621C5.51879 3.26211 5.97547 2.54335 6.64099 2.11202C6.69065 2.079 6.74146 2.04755 6.79338 2.01775C6.84416 1.9877 6.89599 1.9592 6.94881 1.93231C7.27541 1.75995 7.6399 1.64823 8.0279 1.61251C10.6704 1.36927 13.3296 1.36927 15.972 1.61252C16.3594 1.64817 16.7234 1.75959 17.0496 1.93149C17.1024 1.95834 17.1542 1.9868 17.205 2.01681C17.2586 2.0475 17.311 2.07995 17.3621 2.11406C18.0241 2.54443 18.4788 3.25946 18.5611 4.07941L18.5689 4.15371C18.5782 4.23557 18.584 4.31843 18.5862 4.40214L18.7502 10.5001ZM17.0742 4.32076L17.2312 11.1874L17.104 15.9177C17.0754 16.981 16.2563 17.8551 15.197 17.9526C13.0701 18.1484 10.9298 18.1484 8.80292 17.9526C7.74365 17.8551 6.92454 16.981 6.89594 15.9177L6.76874 11.188L6.92573 4.32076C6.92607 4.30598 6.92668 4.29127 6.92757 4.27663C6.98705 3.87435 7.22018 3.52711 7.55073 3.31624C7.67595 3.25096 7.81489 3.20767 7.96269 3.19167C10.6464 2.90104 13.3536 2.90104 16.0373 3.19167C16.185 3.20767 16.3239 3.25093 16.4491 3.31616C16.7798 3.52708 17.013 3.87449 17.0724 4.27696C17.0733 4.2915 17.0739 4.3061 17.0742 4.32076ZM12 21.7001C12.8284 21.7001 13.5 21.0285 13.5 20.2001C13.5 19.3716 12.8284 18.7001 12 18.7001C11.1716 18.7001 10.5 19.3716 10.5 20.2001C10.5 21.0285 11.1716 21.7001 12 21.7001Z"
        fill={color}
      />
    </svg>
  );
};
