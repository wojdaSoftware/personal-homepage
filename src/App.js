import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/features/ProjectList/ProjectList.js";
import SectionHeader from "./components/SectionHeader";
import SkillsetList from "./components/SkillsetList";
import ThemeButton from "./components/features/ThemeButton/ThemeButton.js";
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
      <Footer />
    </>
  );
}

export default App;