import React, { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export default memo(Title);
