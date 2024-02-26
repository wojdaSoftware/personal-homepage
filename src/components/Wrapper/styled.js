import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.whiteLilac};
  padding: 119px 14px 109px;
  transition-duration: 200ms;

  ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.black};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: 34px;
    padding-bottom: 31px;
  }
`;