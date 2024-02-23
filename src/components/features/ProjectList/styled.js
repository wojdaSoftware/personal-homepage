import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  max-width: 1216px;
  padding: 0;
  margin: auto;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;