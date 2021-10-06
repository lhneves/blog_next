import styled, { css } from 'styled-components';
import { rem } from '../../../styles/global';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;

    @media (max-width: 560px) {
      font-size: ${rem(40)};
    }
  `}
`;
