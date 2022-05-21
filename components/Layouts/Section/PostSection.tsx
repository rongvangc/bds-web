import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { POST_OPTION_TAB } from '../../../utils/constants';
import { OptionData, PostType } from '../../../utils/types';
import PostCard from '../../Elements/PostCard';
import PostGrid from '../../Elements/PostGrid';

const mockPost: PostType[] = [
  {
    id: '1',
    title: 'Đất nhà Khánh Hòa, giá cao bla bla',
    date: new Date(),
  },
  {
    id: '2',
    title: 'Đất nhà Khánh Hòa, giá cao bla blaaaaaaaaaaaaaaaa',
    date: new Date(),
  },
  {
    id: '3',
    title: 'Đất nhà Khánh Hòa, giá cao bla bla2222222222',
    date: new Date(),
  },
  {
    id: '4',
    title: 'Đất nhà Khánh Hòa, giá cao bla bla44444444',
    date: new Date(),
  },
  {
    id: '5',
    title: 'Đất nhà Khánh Hòa, giá cao bla bla 12312 3123 12',
    date: new Date(),
  },
  {
    id: '6',
    title: 'Đất nhà Khánh Hòa, giá cao bla bl 2 2 2  22 a',
    date: new Date(),
  },
];

const PostSection = () => {
  const [currentTab, setCurrentTab] = useState<OptionData>(POST_OPTION_TAB[0]);

  const handleSwichTab = useCallback((value: OptionData) => {
    setCurrentTab(value);
  }, []);

  return (
    <div>
      <ul className="mb-4 flex">
        {POST_OPTION_TAB?.map((tab) => (
          <li
            onClick={() => handleSwichTab(tab)}
            key={tab.value}
            className={`cursor-pointer border-b border-gray text-2xl font-semibold ${
              tab.value === currentTab?.value ? ' text-primary' : ' text-gray'
            }`}
          >
            <p className="px-2">{tab.description}</p>
            {tab.value === currentTab?.value ? (
              <motion.div
                className="mt-1 -mb-[1px] h-[2px] bg-primary"
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>

      <PostGrid postData={mockPost} />
    </div>
  );
};

export default PostSection;
