import React, { ReactNode } from 'react';

import { Column } from '~/components';
import { theme } from '~/theme';

interface IWrapperComponentProps {
  bg?: string;
  children: ReactNode;
}

const WrapperComponent: React.FC<IWrapperComponentProps> = ({
  bg = theme.colors.white,
  children
}: IWrapperComponentProps) => {
  return (
    <Column m={25} backgroundColor={bg}>
      {children}
    </Column>
  );
};

export default WrapperComponent;
