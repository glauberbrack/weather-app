import React, { FC } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { Text, Row } from '~/components';
import { theme } from '~/theme';
import styled from 'styled-components/native';

interface IButtonComponentProps {
  text: string;
  icon?: string;
  onPress?: () => void;
}

const ButtonComponent: FC<IButtonComponentProps> = ({
  text,
  icon,
  onPress
}: IButtonComponentProps) => (
  <Container onPress={onPress}>
    <Row alignItems='center'>
      <Text color={theme.colors.purple.n200} variant='medium' mr={icon && 10}>
        {text}
      </Text>
      {icon && <Icon name={icon} size={15} color={theme.colors.purple.n200} />}
    </Row>
  </Container>
);

const Container = styled(RectButton)`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.yellow.default};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export default ButtonComponent;
