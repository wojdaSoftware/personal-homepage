import styled from "styled-components";

export const StyledThemeButtonText = styled.span`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;
`;

export const StyledThemeButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 26px;
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;