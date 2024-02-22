import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 1216px;
  margin: 120px auto 109px;
`;

export const StyledCaption = styled.strong`
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: ${({theme}) => theme.color.slateGray};
`;

export const StyledLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  color: ${({theme}) => theme.color.black};

  &:visited {
    color: ${({theme}) => theme.color.black};
  }

  &:hover {
    color: ${({theme}) => theme.color.scienceBlue};
  }
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  margin: 24px 0 0 0;
  color: ${({theme}) => theme.color.black};
`;

export const StyledGridContainer = styled.div`
  margin: 56px 0 0 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 24px;
`;

export const StyledContainer = styled.div`
  max-width: 691px;
`;