import { memo } from 'react';
import { BreadcrumbType } from './type';

interface BreadcrumbProps {
  data: BreadcrumbType[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ data }) => {
  return <div>{data.map((item: BreadcrumbType) => item.name).join(' / ')}</div>;
};

export default memo(Breadcrumb);
