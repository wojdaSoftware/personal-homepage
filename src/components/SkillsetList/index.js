import { StyledArticle, StyledList, StyledListItem, StyledTitle } from "./styled";

const SkillsetList = ({title, skills}) => (
  <StyledArticle>
    <StyledTitle>{title}</StyledTitle>
    <StyledList>
      <StyledListItem>Lorem Ipsum</StyledListItem>
      <StyledListItem>Lorem Ipsum</StyledListItem>
      <StyledListItem>Lorem Ipsum</StyledListItem>
      <StyledListItem>Lorem Ipsum</StyledListItem>
    </StyledList>
  </StyledArticle>
);

export default SkillsetList;