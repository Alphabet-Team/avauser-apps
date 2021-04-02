import styled from 'styled-components';
import breakpoint from '../../common/breakpoint';

export const Container = styled.section`
  max-width: 100%;
  padding: 8rem 1.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media only screen and ${breakpoint.tablet} {
    padding: 8rem 0;
    max-width: 640px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  @media only screen and ${breakpoint.laptop} {
    padding: 10rem 0;
    max-width: 1024px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media only screen and ${breakpoint.desktop} {
    padding: 10rem 0;
    max-width: 1280px;
  }
`;