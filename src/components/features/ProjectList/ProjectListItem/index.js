import { StyledListItem, StyledProjectDescription, StyledProjectLink, StyledProjectTitle, StyledListItemLink } from "./styled";

const ProjectListItem = ({ title, description, demoLink, codeLink }) => {
  return (
    <StyledListItem>
      <StyledProjectTitle>{title}</StyledProjectTitle>
      <StyledProjectDescription>{description}</StyledProjectDescription>
      <StyledProjectDescription>
        {`Demo: `} <StyledProjectLink href={demoLink}>{demoLink}</StyledProjectLink><br />
        {`Code: `} <StyledProjectLink href={codeLink}>{codeLink}</StyledProjectLink>
      </StyledProjectDescription>
    </StyledListItem>
  );
};

export default ProjectListItem;