import React from 'react';
import { ViewProps } from 'react-native';

import { IntrinsicElementsKeys } from 'styled-components';
import styled from 'styled-components/native';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  FlexboxProps
} from 'styled-system';

type StyledProps = SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps &
  FlexboxProps &
  ViewProps;

export interface IColumnProps extends StyledProps {
  as?: IntrinsicElementsKeys;
}

const Column: React.FC<IColumnProps> = styled.View<IColumnProps>(flexbox, space, layout, color);

export default Column;
