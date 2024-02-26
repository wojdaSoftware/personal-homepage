import styled, { css } from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
`;

export const StyledLinkButton = styled.a`
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

export const StyledLinkButtonText = styled.strong`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;