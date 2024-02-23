import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from '../../../images/sun-icon.svg'

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
  border: 1px solid ${({ theme }) => theme.color.slateGray};
  background-color: ${({ theme }) => theme.color.mercury};
  border-radius: 13px;
  padding: 1px 3px;
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    align-items: start;
  }
`;

export const StyledSunIcon = styled(SunIcon)`
  align-self: center;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.color.slateGray};
  transition-duration: 100ms;

  ${({ darkTheme }) => darkTheme && css`
        transform: translateX(100%);
  `}
`;