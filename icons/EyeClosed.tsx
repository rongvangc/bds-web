import React from 'react';
import { IconProps } from '../utils/types';

export const EyeClosedIcon = ({
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
        d="M20.5303 4.53033C20.8232 4.23744 20.8232 3.76256 20.5303 3.46967C20.2374 3.17678 19.7626 3.17678 19.4697 3.46967L3.46967 19.4697C3.17678 19.7626 3.17678 20.2374 3.46967 20.5303C3.76256 20.8232 4.23744 20.8232 4.53033 20.5303L7.37723 17.6834C8.74353 18.3266 10.3172 18.75 12 18.75C14.684 18.75 17.0903 17.6729 18.8206 16.345C19.6874 15.6797 20.4032 14.9376 20.9089 14.2089C21.4006 13.5003 21.75 12.7227 21.75 12C21.75 11.2773 21.4006 10.4997 20.9089 9.79115C20.4032 9.06244 19.6874 8.32028 18.8206 7.65503C18.5585 7.45385 18.2808 7.25842 17.989 7.07163L20.5303 4.53033ZM16.8995 8.16113L15.1287 9.93196C15.5213 10.5248 15.75 11.2357 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C11.2357 15.75 10.5248 15.5213 9.93196 15.1287L8.51524 16.5454C9.58077 16.9795 10.7621 17.25 12 17.25C14.2865 17.25 16.3802 16.3271 17.9073 15.155C18.6692 14.5703 19.2714 13.9374 19.6766 13.3536C20.0957 12.7497 20.25 12.2773 20.25 12C20.25 11.7227 20.0957 11.2503 19.6766 10.6464C19.2714 10.0626 18.6692 9.42972 17.9073 8.84497C17.5941 8.60461 17.2571 8.37472 16.8995 8.16113ZM11.0299 14.0307C11.3237 14.1713 11.6526 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 11.6526 14.1713 11.3237 14.0307 11.0299L11.0299 14.0307Z"
        fill={color}
      />
      <path
        d="M12 5.25C13.0323 5.25 14.0236 5.40934 14.9511 5.68101C15.1296 5.73328 15.1827 5.95662 15.0513 6.0881L14.2267 6.91265C14.1648 6.97451 14.0752 6.99928 13.99 6.97967C13.3506 6.83257 12.6839 6.75 12 6.75C9.71345 6.75 7.61978 7.67292 6.09267 8.84497C5.33078 9.42972 4.72857 10.0626 4.32343 10.6464C3.90431 11.2503 3.75 11.7227 3.75 12C3.75 12.2773 3.90431 12.7497 4.32343 13.3536C4.67725 13.8635 5.18138 14.4107 5.81091 14.9307C5.92677 15.0264 5.93781 15.2015 5.83156 15.3078L5.12265 16.0167C5.03234 16.107 4.88823 16.1149 4.79037 16.0329C4.09739 15.4517 3.51902 14.8255 3.0911 14.2089C2.59937 13.5003 2.25 12.7227 2.25 12C2.25 11.2773 2.59937 10.4997 3.0911 9.79115C3.59681 9.06244 4.31262 8.32028 5.17941 7.65503C6.90965 6.32708 9.31598 5.25 12 5.25Z"
        fill={color}
      />
      <path
        d="M12 8.25C12.1185 8.25 12.2357 8.25549 12.3513 8.26624C12.5482 8.28453 12.6194 8.51991 12.4796 8.6597L11.2674 9.87196C10.6141 10.0968 10.0968 10.6141 9.87196 11.2674L8.6597 12.4796C8.51991 12.6194 8.28453 12.5482 8.26624 12.3513C8.25549 12.2357 8.25 12.1185 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25Z"
        fill={color}
      />
    </svg>
  );
};
