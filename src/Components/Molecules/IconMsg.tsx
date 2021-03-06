import React from 'react';
import { Image } from '../Atoms';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  flex-direction: ${({ direction }) => direction ?? 'row'};
  align-items: center;
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  direction?: string;
}

interface IconMsgProps extends StyleProps {
  children: React.ReactChild;
  imgSrc: ImageSourcePropType;
  width?: string;
  height?: string;
  onPress?: () => void;
}

const IconMsg = ({
  children,
  imgSrc,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  direction,
  width,
  height,
  onPress,
}: IconMsgProps) => {
  return (
    <Container
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      direction={direction}>
      <Image imgSrc={imgSrc} width={width} height={height} onPress={onPress} />
      {children}
    </Container>
  );
};

export default IconMsg;
