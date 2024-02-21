import styled from "styled-components";

export const StyledArticle = styled.article`
  max-width: 1216px;
  box-shadow: 
    0px 16px 58px 0px ${({ theme }) => theme.color.violet},
    0px -2px 50px 0px ${({ theme }) => theme.color.violet};
  padding: 32px;
  margin: auto;
  margin-top: 72px;
`;

export const StyledTitle = styled.h2`
  font-weight: 900;
  size: 30px;
  margin: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  &:before {
    content: "•";
    color: ${({ theme }) => theme.color.scienceBlue};
  }

  color: ${({ theme }) => theme.color.slateGray};
`;