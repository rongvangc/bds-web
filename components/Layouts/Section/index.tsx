import React, { HTMLProps } from 'react';

type SectionProps = {} & HTMLProps<HTMLElement>;

const Section: React.FC<SectionProps> = ({ className, children, ...rest }) => {
  return (
    <section className={`pt-4 pb-12 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
