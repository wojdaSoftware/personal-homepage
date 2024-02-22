import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import SectionHeader from "./components/SectionHeader";
import SkillsetList from "./components/SkillsetList";
import ThemeButton from "./components/ThemeButton";
import useSkills from "./useSkills";

function App() {
  const skills = useSkills();

  return (
    <>
      <Header extraHeaderContent={<ThemeButton />} />
      <SkillsetList
        title={"My skillset includes 🛠️"}
        skills={skills.currentSkills}
      />
      <SkillsetList
        title={"What I want to learn next 🚀"}
        skills={skills.futureSkills}
      />
      <SectionHeader />
      <ProjectList />
    </>
  );
}

export default App;