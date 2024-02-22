import styled from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
  max-width: 1216px;
  margin: auto;
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
   margin-top: 48px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-top: 12px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledSubtitle = styled.h3`
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.color.black};
`;