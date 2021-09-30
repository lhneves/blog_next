import React from 'react';
import * as Styled from './mainContainer.style';

export type MainContainerProps = {
  children: React.ReactNode;
};

function MainContainer({ children }: MainContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default MainContainer;
