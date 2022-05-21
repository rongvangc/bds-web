import React, { MouseEvent, useCallback, useState } from 'react';
import { PostType } from '../../../utils/types';
import PostCard from '../PostCard';

type PostGridType = {
  postData: PostType[];
};

const PostGrid: React.FC<PostGridType> = ({ postData }) => {
  const [postSelected, setPostSelected] = useState(postData[0]);

  const handleHoverIn = useCallback(
    (postData: PostType) => (e: MouseEvent<HTMLDivElement>) => {
      setPostSelected(postData);
    },
    []
  );

  const handleHoverOut = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      setPostSelected(postData[0]);
    },
    [postData]
  );

  return (
    <div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <PostCard {...postSelected} />
        </div>
        <div className="col-span-2">
          {postData?.map((item) => (
            <PostCard
              key={item.id}
              title={item.title}
              date={item.date}
              isTextOnly
              onMouseEnter={handleHoverIn(item)}
              onMouseLeave={handleHoverOut}
            />
          ))}
        </div>
        <div className="flex items-center justify-center rounded-md shadow-md">
          Poster
        </div>
      </div>
    </div>
  );
};

export default PostGrid;
