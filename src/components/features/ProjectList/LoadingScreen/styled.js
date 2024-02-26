import styled, { css } from "styled-components";
import { ReactComponent as LoadingIcon } from '../../../../images/loading-icon.svg';

const animationRotation = css`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const StyledWrapper = styled.section`
  max-width: 1216px;
  margin: auto;
  text-align: center;
`;

export const StyledDescription = styled.em`
  display: block;
  font-size: 20px;
  letter-spacing: 1px;
  margin-top: 88px;
  font-style: normal;
  transition-duration: 400ms;
  color: ${({ theme }) => theme.color.black};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
  margin-top: 48px;
  color: ${({ theme }) => theme.color.ironTransparent};

  ${animationRotation}
  animation: rotation 1s infinite;

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.mineshaftTransparent};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 80px;
    width: 80px;
  }
`;