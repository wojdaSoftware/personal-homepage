import styled from "styled-components";

export const StyledArticle = styled.article`
  max-width: 1216px;
  box-shadow: 
    0px 16px 58px 0px ${({ theme }) => theme.color.violet},
    0px -2px 50px 0px ${({ theme }) => theme.color.violet};
  padding: 32px;
  margin: auto;
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 48px;
   padding: 16px;
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 900;
  size: 30px;
  margin: 0;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size: 18px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.color.iron};
  padding: 32px 0 0 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
  gap: 8px 115px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    padding-top: 12px;
  }
`;

export const StyledListItem = styled.li`
  &:before {
    content: "•";
    color: ${({ theme }) => theme.color.scienceBlue};
    padding-right: 16px;
  }

  color: ${({ theme }) => theme.color.slateGray};
  
  
`;