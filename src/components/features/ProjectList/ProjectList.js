import ProjectListItem from "./ProjectListItem";
import { StyledList } from "./styled";
import useProjectData from "./useProjectsData";

const ProjectList = ({ darkTheme }) => {
  const { projectsData } = useProjectData();

  switch (projectsData.status) {
    case "pending":
      return (
        <div>Ładowanie</div>
      );
    case "success":
      return (
        <StyledList>
          {projectsData.data && projectsData.data.map((project) => (
            <ProjectListItem
              key={project.id}
              title={project.name}
              description={project.description}
              demoLink={project.homepage}
              codeLink={project.html_url}
              darkTheme={darkTheme}
            />
          ))}
        </StyledList>
      );
    case "error":
      return (
        <div>Wystąpił błąd</div>
      );
    default:
      return (
        <div>Wystąpił błąd</div>
      );
  }
}

export default ProjectList;