import styled, { css } from "styled-components";
import { ReactComponent as GithubIcon } from '../../images/github-link.svg';
import { ReactComponent as LinkedInIcon } from '../../images/linkedin-link.svg';


const svgLinkStyle = () => {
  return css`
    width: 48px;
    height: 48px;
      
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      width: 32px;
      height: 32px
    }

    & path {
      transition-duration: 200ms;
      fill: ${({ theme }) => theme.color.black};

      ${({ $darkTheme }) => $darkTheme && css`
        fill: ${({ theme }) => theme.color.white};
      `}
    }
    &:hover path {
      fill: ${({ theme }) => theme.color.scienceBlue};

      ${({ $darkTheme }) => $darkTheme && css`
        fill: ${({ theme }) => theme.color.dodgerBlue};
      `}
    }
  `;
}

export const StyledFooter = styled.footer`
  max-width: 1216px;
  margin: 120px auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 48px auto 31px;
  }
`;

export const StyledCaption = styled.strong`
  transition-duration: 400ms;
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const StyledLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  transition-duration: 250ms;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.black};
  
  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  &:visited {
    color: ${({ theme }) => theme.color.black};
  }

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};

    ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.dodgerBlue};
  `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin-top: 12px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  margin: 24px 0 0 0;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 1px;

  ${({ $darkTheme }) => $darkTheme && css`
    color: ${({ theme }) => theme.color.white};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const StyledGridContainer = styled.div`
  margin: 56px 0 0 0;
  display: grid;
  grid-template-columns: min-content min-content;
  grid-column-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 32px;
    grid-column-gap: 16px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 691px;
`;

export const StyledGithubIcon = styled(GithubIcon)`
  ${(props) => svgLinkStyle(props)};
`;

export const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${(props) => svgLinkStyle(props)};
`;