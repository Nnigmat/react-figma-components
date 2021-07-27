import React, { FC, ReactNode } from 'react';

export type ItemProps = {
  value: any;
  children: ReactNode;
};

export const Item: FC<ItemProps> = ({ children }) => <>{children}</>;
