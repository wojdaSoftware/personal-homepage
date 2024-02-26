import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1216px;
  margin: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 21px;
  }
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 398px;
  height: 398px;
  display: inline-block;
  grid-area: 1 / 1 / span 2 / 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-area: 1 / 1 / 1 /1;
    width: 128px;
    height: 128px;
    margin-top: 13px;
  }
`;

export const StyledTitle = styled.h1`
  transition-duration: 400ms;
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  flex-basis: 100%;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   font-size : 22px;
   margin-top: 8px;
  }
`;

export const StyledPreTitle = styled.em`
  transition-duration: 400ms;
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  margin-top: 38px;
  flex-basis: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top : 16px;
  }

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const StyledDescription = styled.p`
  transition-duration: 400ms;
  margin-top: 35px;
  margin-bottom: 0;
  line-height: 28px;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.slateGray};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
    margin-top: 16px;
  }
`;

export const GridItem = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-column: 1 / span 2;
  }
`;