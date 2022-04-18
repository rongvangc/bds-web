import React from 'react';
import { useRouter } from 'next/router';

const PostItem = () => {
  const route = useRouter();

  return <div>Post id: {route.query.id}</div>;
};

export default PostItem;
