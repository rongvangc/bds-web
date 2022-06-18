import React, { HTMLAttributes } from 'react';
import LinkButton from '../LinkButton';

type HeadingType = {
  title: string;
  url?: string;
  className?: string & Pick<HTMLAttributes<HTMLElement>, 'className'>;
};

const Heading: React.FC<HeadingType> = ({ title, url, className = '' }) => {
  const heading = () => (
    <h3
      className={`mb-6 mt-4 pl-8 text-2xl font-bold uppercase text-primary ${className}`}
    >
      {title}
    </h3>
  );
  if (!url) return heading();
  return <LinkButton href={url}>{heading}</LinkButton>;
};

export default Heading;
