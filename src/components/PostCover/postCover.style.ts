import styled, { css } from 'styled-components';

export const Container = styled.img`
  display: block;
  width: 900px;
  height: 300px;
  object-fit: cover;
  margin: 0 auto;

  @media (max-width: 960px) {
    ${({ theme }) => css`
      max-width: 100%;
      /* height: 100%; */
      margin-bottom: ${theme.spacings.medium};
    `}
  }
`;
