import { StyledArticle, StyledList, StyledListItem, StyledTitle } from "./styled";

const SkillsetList = ({ title, skills }) => (
  <StyledArticle>
    <StyledTitle>{title}</StyledTitle>
    <StyledList>
      {skills && skills.map((skill, index) => (
        <StyledListItem key={index}>
          {skill}
        </StyledListItem>
      ))}
    </StyledList>
  </StyledArticle>
);

export default SkillsetList;