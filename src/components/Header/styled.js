import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1216px;
  margin: auto;
  margin-top: 119px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 72px;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 398px;
  height: 398px;
  display: inline-block;
`;

export const StyledTitle = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  flex-basis: 100%;
`;

export const StyledPreTitle = styled.em`
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
  font-style: normal;
  margin-top: 38px;
  flex-basis: 100%;
`;