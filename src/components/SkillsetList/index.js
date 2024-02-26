import { StyledArticle, StyledList, StyledListItem, StyledTitle } from "./styled";

const SkillsetList = ({ title, skills, darkTheme }) => (
  <StyledArticle $darkTheme={darkTheme}>
    <StyledTitle $darkTheme={darkTheme}>{title}</StyledTitle>
    <StyledList >
      {skills && skills.map((skill, index) => (
        <StyledListItem
          key={index}
          $darkTheme={darkTheme}
        >
          {skill}
        </StyledListItem>
      ))}
    </StyledList>
  </StyledArticle>
);

export default SkillsetList;