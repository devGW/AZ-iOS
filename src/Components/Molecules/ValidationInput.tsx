import React from 'react';
import styled from 'styled-components/native';

import { Colbox, Text } from '../Atoms';
import { InputBindType } from '~/hooks/useHandleInput';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const Input = styled.TextInput<StyleProps>`
  width: 100%;
  background-color: #3a3a3a;
  padding: ${ifIphoneX('14px 24px 14px 24px', '8px 14px 8px 14px')};
  border: 2px solid ${({ isAvailable }) => (isAvailable ? '#5f5f5f' : '#EA4040')};
  border-radius: 10px;
  font-size: 17px;
  margin-bottom: ${({ isAvailable }) => (isAvailable ? '15px' : '10px')};
`;

interface StyleProps {
  isAvailable?: boolean;
}

interface ValidationInputProps extends StyleProps {
  placeholder: string;
  onBlur?: () => void;
  inputBinder: InputBindType;
  guideMsg: string;
  secureTextEntry?: boolean;
}

const ValidationInput = ({
  placeholder,
  onBlur,
  inputBinder,
  isAvailable,
  guideMsg,
  secureTextEntry,
}: ValidationInputProps) => {
  const isUsed = isAvailable !== undefined && isAvailable;
  return (
    <Colbox>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#5f5f5f"
        onBlur={onBlur}
        isAvailable={!isUsed}
        secureTextEntry={secureTextEntry}
        {...inputBinder}
      />
      <>
        {isUsed && guideMsg.length > 1 && (
          <Text
            text={guideMsg}
            fontSize="15px"
            fontWeight={600}
            color="#EA4040"
            marginBottom={'10px'}
          />
        )}
      </>
    </Colbox>
  );
};

export default ValidationInput;
