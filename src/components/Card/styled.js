import styled from 'styled-components';

export const Wrapper = styled.article`
  background: white;
  padding: 2rem;
  box-shadow: 0 1rem 4rem 0 rgba(106, 95, 199, 0.07);
  border-radius: 1rem;
  text-align: center;
`;

export const MiddleArea = styled.div`
  margin: 2.5rem 0;
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const MiddleColumn = styled.div`
  flex: auto;
  padding-right: 2rem;
`;

export const Avatar = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 7rem;
  filter: grayscale(1);

  ${Wrapper}:hover & {
    filter: grayscale(0);
  }
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2E3041;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const Location = styled.p`
  color: #7C93A9;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-transform: capitalize;
`;

export const Button = styled.button `
    background: ${props => props.isActive ? '#22d827' : '#107EFF'};
    cursor: pointer;
    color: white;
    border: none;
    padding: 1.2rem 2rem;
    font-size: 1.4rem;
    border-radius: 10rem;
    width: 12rem;

    &:hover {
      background: #0271f2;
    }
`;