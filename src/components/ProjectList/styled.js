import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  max-width: 1216px;
  padding: 0;
  margin: auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const StyledListItem = styled.li`
  padding: 56px;
  background-color: ${({ theme }) => theme.color.white};
  border: 6px solid ${({ theme }) => theme.color.iron};
  box-shadow: 
    0px 16px 58px 0px ${({ theme }) => theme.color.violet},
    0px -2px 50px 0px ${({ theme }) => theme.color.violet};

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.scienceBlueTransparent};
  }
`;

export const StyledProjectTitle = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`;

export const StyledProjectDescription = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  line-height: 25.2px;
  size: 18px;
  margin: 24px 0 0 0;
`;