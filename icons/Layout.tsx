import React from 'react';
import { IconProps } from '../utils/types';

export const LayoutIcon = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.92918 4.47028C7.65796 4.3282 6.34205 4.3282 5.07084 4.47028C4.76195 4.5048 4.51835 4.74939 4.48361 5.04645C4.3318 6.34439 4.3318 7.6556 4.48361 8.95355C4.51835 9.2506 4.76195 9.49519 5.07084 9.52972C6.34206 9.67179 7.65796 9.67179 8.92918 9.52972C9.23807 9.49519 9.48167 9.2506 9.51641 8.95355C9.66822 7.6556 9.66822 6.34439 9.51641 5.04645C9.48167 4.74939 9.23807 4.5048 8.92918 4.47028ZM4.90423 2.97956C6.28617 2.82511 7.71384 2.82511 9.09579 2.97956C10.0866 3.0903 10.8891 3.87029 11.0063 4.8722C11.1716 6.28591 11.1716 7.71408 11.0063 9.1278C10.8891 10.1297 10.0866 10.9097 9.09579 11.0204C7.71384 11.1749 6.28617 11.1749 4.90423 11.0204C3.91339 10.9097 3.11094 10.1297 2.99376 9.1278C2.82841 7.71408 2.82841 6.28591 2.99376 4.8722C3.11094 3.87029 3.91339 3.0903 4.90423 2.97956Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.92918 14.4703C7.65796 14.3282 6.34205 14.3282 5.07084 14.4703C4.76195 14.5048 4.51835 14.7494 4.48361 15.0465C4.3318 16.3444 4.3318 17.6556 4.48361 18.9535C4.51835 19.2506 4.76195 19.4952 5.07084 19.5297C6.34206 19.6718 7.65796 19.6718 8.92918 19.5297C9.23807 19.4952 9.48167 19.2506 9.51641 18.9535C9.66822 17.6556 9.66822 16.3444 9.51641 15.0465C9.48167 14.7494 9.23807 14.5048 8.92918 14.4703ZM4.90423 12.9796C6.28617 12.8251 7.71384 12.8251 9.09579 12.9796C10.0866 13.0903 10.8891 13.8703 11.0063 14.8722C11.1716 16.2859 11.1716 17.7141 11.0063 19.1278C10.8891 20.1297 10.0866 20.9097 9.09579 21.0204C7.71384 21.1749 6.28617 21.1749 4.90423 21.0204C3.91339 20.9097 3.11094 20.1297 2.99376 19.1278C2.82841 17.7141 2.82841 16.2859 2.99376 14.8722C3.11094 13.8703 3.91339 13.0903 4.90423 12.9796Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.9292 4.47028C17.658 4.3282 16.3421 4.3282 15.0708 4.47028C14.7619 4.5048 14.5183 4.74939 14.4836 5.04645C14.3318 6.34439 14.3318 7.6556 14.4836 8.95355C14.5183 9.2506 14.7619 9.49519 15.0708 9.52972C16.3421 9.67179 17.658 9.67179 18.9292 9.52972C19.2381 9.49519 19.4817 9.2506 19.5164 8.95355C19.6682 7.6556 19.6682 6.34439 19.5164 5.04645C19.4817 4.74939 19.2381 4.5048 18.9292 4.47028ZM14.9042 2.97956C16.2862 2.82511 17.7138 2.82511 19.0958 2.97956C20.0866 3.0903 20.8891 3.87029 21.0063 4.8722C21.1716 6.28591 21.1716 7.71408 21.0063 9.1278C20.8891 10.1297 20.0866 10.9097 19.0958 11.0204C17.7138 11.1749 16.2862 11.1749 14.9042 11.0204C13.9134 10.9097 13.1109 10.1297 12.9938 9.1278C12.8284 7.71408 12.8284 6.28591 12.9938 4.8722C13.1109 3.87029 13.9134 3.0903 14.9042 2.97956Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.9292 14.4703C17.658 14.3282 16.3421 14.3282 15.0708 14.4703C14.7619 14.5048 14.5183 14.7494 14.4836 15.0465C14.3318 16.3444 14.3318 17.6556 14.4836 18.9535C14.5183 19.2506 14.7619 19.4952 15.0708 19.5297C16.3421 19.6718 17.658 19.6718 18.9292 19.5297C19.2381 19.4952 19.4817 19.2506 19.5164 18.9535C19.6682 17.6556 19.6682 16.3444 19.5164 15.0465C19.4817 14.7494 19.2381 14.5048 18.9292 14.4703ZM14.9042 12.9796C16.2862 12.8251 17.7138 12.8251 19.0958 12.9796C20.0866 13.0903 20.8891 13.8703 21.0063 14.8722C21.1716 16.2859 21.1716 17.7141 21.0063 19.1278C20.8891 20.1297 20.0866 20.9097 19.0958 21.0204C17.7138 21.1749 16.2862 21.1749 14.9042 21.0204C13.9134 20.9097 13.1109 20.1297 12.9938 19.1278C12.8284 17.7141 12.8284 16.2859 12.9938 14.8722C13.1109 13.8703 13.9134 13.0903 14.9042 12.9796Z" fill={color}/>
    </svg>
  );
};
