import { StyledListItem, StyledProjectDescription, StyledProjectTitle } from "./styled";

const ProjectListItem = ({ title, description, demoLink, codeLink }) => {
  return (
    <StyledListItem>
      <StyledProjectTitle>{title}</StyledProjectTitle>
      <StyledProjectDescription>{description}</StyledProjectDescription>
      <StyledProjectDescription>
        {`Demo: ${demoLink}`}<br />
        {`Code: ${codeLink}`}
      </StyledProjectDescription>
    </StyledListItem>
  );
};

export default ProjectListItem;