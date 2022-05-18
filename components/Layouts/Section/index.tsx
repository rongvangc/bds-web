import React, { HTMLProps } from 'react';

type SectionProps = {} & Pick<HTMLProps<HTMLElement>, 'className'>;

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={`pt-4 pb-12 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
