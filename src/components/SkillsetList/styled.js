import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  transition-duration: 250ms;
  max-width: 1216px;
  box-shadow: 
    0px 16px 58px 0px ${({ theme }) => theme.color.violet},
    0px -2px 50px 0px ${({ theme }) => theme.color.violet};
  padding: 32px;
  margin: auto;
  margin-top: 72px;

  ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.mineshaftTransparent};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 48px;
   padding: 16px;
  }
`;

export const StyledTitle = styled.h2`
  transition-duration: 400ms;
  font-weight: 900;
  size: 30px;
  margin: 0;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size: 18px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.color.ironTransparent};
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
  transition-duration: 400ms;
  &:before {
    content: "•";
    color: ${({ theme }) => theme.color.scienceBlue};
    padding-right: 16px;

    ${({ $darkTheme }) => $darkTheme && css`
      color: ${({ theme }) => theme.color.dodgerBlue};
    `}
  }

  color: ${({ theme }) => theme.color.slateGray};
  
  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;