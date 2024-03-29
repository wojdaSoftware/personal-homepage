import styled, { css } from "styled-components";

export const StyledListItem = styled.li`
  padding: 56px;
  transition-duration: 200ms;
  background-color: ${({ theme }) => theme.color.white};
  border: 6px solid ${({ theme }) => theme.color.ironTransparent};
  letter-spacing: 1px;
  box-shadow: 
    0px 16px 58px 0px ${({ theme }) => theme.color.violet},
    0px -2px 50px 0px ${({ theme }) => theme.color.violet};

  ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.mineshaftTransparent};
  `}

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.scienceBlueTransparent};

    ${({ $darkTheme }) => $darkTheme && css`
      border: 6px solid ${({ theme }) => theme.color.scienceBlue};
    `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   padding: 24px;
  }
`;

export const StyledProjectTitle = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-weight: 700;
  font-size: 24px;
  margin: 0;

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size: 16px;
  }
`;

export const StyledProjectDescription = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  line-height: 25.2px;
  font-size: 18px;
  margin: 24px 0 0 0;

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 16px;
   font-size: 14px;
  }
`;

export const StyledProjectLink = styled.a`
  text-decoration: none;
  transition-duration: 200ms;
  color: ${({ theme }) => theme.color.scienceBlue};
  border-bottom: 1px solid ${({ theme }) => theme.color.ironTransparent};
  word-break: break-all;

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.dodgerBlue};
  `}

  &:visited {
    color: ${({ theme }) => theme.color.scienceBlue};
    
    ${({ $darkTheme }) => $darkTheme && css`
      color: ${({ theme }) => theme.color.dodgerBlue};
    `}
  }

  &:hover {
    color: ${({ theme }) => theme.color.sienceBlue};
    border-bottom: 1px solid ${({ theme }) => theme.color.scienceBlue};

    ${({ $darkTheme }) => $darkTheme && css`
      color: ${({ theme }) => theme.color.dodgerBlue};
      border-bottom: 1px solid ${({ theme }) => theme.color.dodgerBlue};
    `}
  }
`;