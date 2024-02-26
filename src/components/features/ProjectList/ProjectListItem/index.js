import { StyledListItem, StyledProjectDescription, StyledProjectLink, StyledProjectTitle } from "./styled";

const ProjectListItem = ({ title, description, demoLink, codeLink, darkTheme }) => {
  return (
    <StyledListItem $darkTheme={darkTheme}>
      <StyledProjectTitle $darkTheme={darkTheme}>{title}</StyledProjectTitle>
      <StyledProjectDescription $darkTheme={darkTheme}>{description}</StyledProjectDescription>
      <StyledProjectDescription $darkTheme={darkTheme}>
        {`Demo: `}
        <StyledProjectLink
          href={demoLink}
          $darkTheme={darkTheme}
        >
          {demoLink}
        </StyledProjectLink><br />
        {`Code: `}
        <StyledProjectLink
          href={codeLink}
          $darkTheme={darkTheme}
        >
          {codeLink}
        </StyledProjectLink>
      </StyledProjectDescription >
    </StyledListItem>
  );
};

export default ProjectListItem;