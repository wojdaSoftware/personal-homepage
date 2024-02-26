import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.whiteLilac};
  padding: 119px 14px 0;
  transition-duration: 200ms;

  ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.black};
  `}
`;