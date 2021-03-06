import { FC } from 'react';
import { TextProps } from 'react-native';

import { IntrinsicElementsKeys } from 'styled-components';
import styled from 'styled-components/native';
import {
  space,
  layout,
  typography,
  color,
  variant,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  PositionProps
} from 'styled-system';

type TextVariants = 'bigger' | 'big' | 'medium' | 'regular' | 'small' | 'smaller' | 'tiny';

interface TextComponentProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    PositionProps,
    TextProps {
  variant?: TextVariants;
  as?: IntrinsicElementsKeys;
}

const TextComponent: FC<TextComponentProps> = styled.Text<TextComponentProps>(
  variant({
    variants: {
      bigger: {
        fontSize: 32,
        lineHeight: '39px'
      },
      big: {
        fontSize: 24,
        lineHeight: '33px'
      },
      medium: {
        fontSize: 20,
        lineHeight: '27px'
      },
      regular: {
        fontSize: 16,
        lineHeight: '24px'
      },
      small: {
        fontSize: 14,
        lineHeight: '17px'
      },
      smaller: {
        fontSize: 12,
        lineHeight: '15px'
      },
      tiny: {
        fontSize: 10,
        lineHeight: '12px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
);

TextComponent.defaultProps = {
  fontFamily: 'Ubuntu-Regular'
};

export default TextComponent;
