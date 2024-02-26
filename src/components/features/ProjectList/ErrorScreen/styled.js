import styled, { css } from "styled-components";
import { ReactComponent as DangerIcon } from '../../../../images/danger-icon.svg'

export const StyledDangerIcon = styled(DangerIcon)`
  margin-top: 88px;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      width: 32px;
      height: 32px;
      margin-top: 36px;
    }
`;

export const StyledDisclaimer = styled.strong`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 2px;
  margin-top: 16px;
  display: block;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      font-size: 16px;
    }
`;

export const StyledDescription = styled.p`
  line-height: 28px;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 32px 0 0 0;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      font-size: 14px;
      line-height: 20px;
      margin-top: 16px;
    }
`;