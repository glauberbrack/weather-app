import React, { ReactNode } from 'react';

import { Column } from '~/components';

interface IWrapperComponentProps {
  children: ReactNode;
}

const WrapperComponent: React.FC<IWrapperComponentProps> = ({
  children
}: IWrapperComponentProps) => {
  return <Column m={25}>{children}</Column>;
};

export default WrapperComponent;
