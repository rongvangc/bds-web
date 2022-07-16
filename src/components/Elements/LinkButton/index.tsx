import React, { FC, HTMLProps } from 'react';
import NextLink, { LinkProps } from 'next/link';

type MyLink = {} & LinkProps & HTMLProps<HTMLAnchorElement>;

const LinkButton: FC<MyLink> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  className,
  ...rest
}) => (
  <NextLink
    as={as}
    href={href}
    passHref={passHref}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
  >
    <a className={className} {...rest}>
      {children}
    </a>
  </NextLink>
);

export default LinkButton;
