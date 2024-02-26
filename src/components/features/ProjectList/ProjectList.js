import ProjectListItem from "./ProjectListItem";
import { StyledList } from "./styled";
import useProjectData from "./useProjectsData";

const ProjectList = ({ darkTheme }) => {
  const { projectsData } = useProjectData();

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
}

export default ProjectList;