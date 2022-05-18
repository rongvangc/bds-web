import React, { HTMLAttributes, useCallback, useState } from 'react';
import { FilterRealEstateProps, OptionData } from '../../../utils/types';
import SelectElement from '../SelectElement';

const options: OptionData[] = [
  { id: '1', value: 'Boston', description: 'MA' },
  { id: '2', value: 'Austin', description: 'TX' },
  { id: '3', value: 'Denver', description: 'CO' },
  { id: '4', value: 'Chicago', description: 'IL' },
  { id: '5', value: 'Phoenix', description: 'AZ' },
  { id: '6', value: 'Houston', description: 'TX' },
  { id: '7', value: 'Orlando', description: 'FL' },
  { id: '8', value: 'Portland', description: 'OR' },
  { id: '9', value: 'Milwaukee', description: 'WI' },
  { id: '10', value: 'Louisville', description: 'KY' },
];

const FilterRealEstate: React.FC<
  FilterRealEstateProps & Pick<HTMLAttributes<HTMLDivElement>, 'className'>
> = ({ option, className, onChange }) => {
  const [currentTab, setCurrentTab] = useState<OptionData>(option[0] || null);

  const handleSwichTab = useCallback(
    (value: OptionData) => {
      setCurrentTab(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <div className={`${className}`}>
      <div className="tabs">
        {option?.map((tab) => (
          <a
            onClick={() => handleSwichTab(tab)}
            key={tab.value}
            className={`tab tab-lifted font-bold ${
              tab.value === currentTab?.value ? ' tab-active' : 'text-white'
            }`}
          >
            {tab.description}
          </a>
        ))}
      </div>
      <SelectElement placeholder="Tìm kiếm" options={options} />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs rounded-t-none"
      />
    </div>
  );
};

export default FilterRealEstate;
