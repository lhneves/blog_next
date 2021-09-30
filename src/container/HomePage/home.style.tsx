import styled from 'styled-components';
import { rem } from '../../../styles/global';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${rem(30)};
`;
