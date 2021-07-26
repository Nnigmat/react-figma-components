import { FC } from 'react';

export type DividerProps = {
  children?: string;
};

export const Divider: FC<DividerProps> = ({ children }) => <>{children}</>;
