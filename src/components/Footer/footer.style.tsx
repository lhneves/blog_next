import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;
