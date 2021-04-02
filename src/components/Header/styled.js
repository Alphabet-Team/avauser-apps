import styled from 'styled-components';
import breakpoint from '../../common/breakpoint';

export const Panel = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  height: 5rem;
  align-items: center;
  box-shadow: 0 1rem 4rem 0 rgba(106, 95, 199, 0.07);
  font-size: 1.5rem;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  @media only screen and ${breakpoint.tablet} {
    padding: 0;
    max-width: 640px;
  }

  @media only screen and ${breakpoint.laptop} {
    max-width: 1024px;
  }

  @media only screen and ${breakpoint.desktop} {
    max-width: 1280px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #F24571;
`; 

export const Badge = styled.span`
  background: #F24571;
  color: white;
  font-weight: bold;
  padding: 0.2rem 0.7rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
`;