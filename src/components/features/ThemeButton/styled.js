import styled from "styled-components";

export const StyledThemeButtonText = styled.span`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const StyledThemeButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 26px;
  border: 1px solid ${({theme}) => theme.color.ironTransparent};
  background-color: ${({theme}) => theme.color.mercury};
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    align-items: start;
  }
`;