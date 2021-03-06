import React from 'react';
import styled from 'styled-components/native';
import Layout from '~/constants/Layout';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: ${`${Layout.width / 18}px`};
  margin-right: ${`${Layout.width / 18}px`};
  justify-content: space-between;
`;

type HeaderWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
};

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
  return <Container>{children}</Container>;
};

export default HeaderWrapper;
