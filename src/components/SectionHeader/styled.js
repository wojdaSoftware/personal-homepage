import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  transition-duration: 400ms;
  text-align: center;
  max-width: 1216px;
  margin: auto;
  margin-top: 72px;
  letter-spacing: 2px;
  
  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 48px;
  }
`;

export const StyledTitle = styled.h2`
  transition-duration: 400ms;
  font-size: 30px;
  font-weight: 900;
  margin-top: 12px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size: 18px;
  }
`;

export const StyledSubtitle = styled.h3`
  transition-duration: 400ms;
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size: 17px;
  }
`;