import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";
import ProjectListItem from "./ProjectListItem";
import { StyledList } from "./styled";
import useProjectData from "./useProjectsData";

const ProjectList = ({ darkTheme }) => {
  const { projectsData } = useProjectData();

  switch (projectsData.status) {
    case "pending":
      return (
        <LoadingScreen darkTheme={darkTheme} />
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
    default:
      return (
        <ErrorScreen darkTheme={darkTheme} />
      );
  }
}

export default ProjectList;