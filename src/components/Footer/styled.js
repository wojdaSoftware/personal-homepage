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
    }
    &:hover path {
      fill: ${({ theme }) => theme.color.scienceBlue};
    }
  `;
}

export const StyledFooter = styled.footer`
  max-width: 1216px;
  margin: 120px auto 109px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 48px auto 31px;
  }
`;

export const StyledCaption = styled.strong`
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const StyledLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  transition-duration: 250ms;
  color: ${({ theme }) => theme.color.black};

  &:visited {
    color: ${({ theme }) => theme.color.black};
  }

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
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