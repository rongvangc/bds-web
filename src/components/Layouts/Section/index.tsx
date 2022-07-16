import React, { HTMLProps } from 'react';
import Image from 'next/image';

type SectionProps = {
  image?: string;
} & Pick<HTMLProps<HTMLElement>, 'className'>;

const Section: React.FC<SectionProps> = ({
  className = '',
  children,
  image,
}) => {
  return (
    <section className={`relative block pt-4 pb-12 ${className}`}>
      {image && (
        <div className="z-0">
          <Image src={image} layout="fill" objectFit="fill" alt="" />
        </div>
      )}
      <div className="container relative mx-auto">{children}</div>
    </section>
  );
};

export default Section;
