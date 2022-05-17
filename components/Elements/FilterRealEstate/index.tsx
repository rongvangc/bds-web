import React, { HTMLAttributes, useCallback, useState } from 'react';
import { FilterRealEstateProps, OptionData } from '../../../utils/types';
import SelectElement from '../SelectElement';

const options: OptionData[] = [
  { id: 1, city: 'Boston', state: 'MA' },
  { id: 2, city: 'Austin', state: 'TX' },
  { id: 3, city: 'Denver', state: 'CO' },
  { id: 4, city: 'Chicago', state: 'IL' },
  { id: 5, city: 'Phoenix', state: 'AZ' },
  { id: 6, city: 'Houston', state: 'TX' },
  { id: 7, city: 'Orlando', state: 'FL' },
  { id: 8, city: 'Portland', state: 'OR' },
  { id: 9, city: 'Milwaukee', state: 'WI' },
  { id: 10, city: 'Louisville', state: 'KY' },
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

  const getOptionValue = useCallback((option: any): number => option.id, []);
  const getOptionLabel = useCallback(
    (option: any): string => `${option.city}, ${option.state}`,
    []
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
      <SelectElement
        options={options}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs rounded-t-none"
      />
    </div>
  );
};

export default FilterRealEstate;
