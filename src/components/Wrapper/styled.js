import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.whiteLilac};
  padding: 0 14px;

  ${({ $darkTheme }) => $darkTheme && css`
    background-color: ${({ theme }) => theme.color.black};
  `}
`;