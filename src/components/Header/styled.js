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
  letter-spacing: 1px;
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
`;

export const HireMeButton = styled.a`
  transition-duration: 200ms;
  display: inline-block;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.ironTransparent};
  padding: 12px 16px;
  margin-top: 32px;
  letter-spacing: 1px;

  ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.dodgerBlue};
  `}

  &:hover, &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.anakiwa};
    outline: none;

    ${({ $darkTheme }) => $darkTheme && css`
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.shipCove};
    `}
  }

  &:active {
    box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.color.parsley} inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 24px;
  }
`;

export const HireMeButtonText = styled.strong`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const GridItem = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-column: 1 / span 2;
  }
`;