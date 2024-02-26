import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/features/ProjectList/ProjectList.js";
import SectionHeader from "./components/SectionHeader";
import SkillsetList from "./components/SkillsetList";
import ThemeButton from "./components/features/ThemeButton/ThemeButton.js";
import useSkills from "./useSkills";
import Wrapper from "./components/Wrapper/index.js";
import { useSelector } from "react-redux";
import { selectTheme } from "./components/features/ThemeButton/themeButtonSlice.js";

function App() {
  const skills = useSkills();
  const darkTheme = useSelector(selectTheme);

  return (
    <Wrapper darkTheme={darkTheme}>
      <Header
        extraHeaderContent={<ThemeButton darkTheme={darkTheme} />}
        darkTheme={darkTheme}
      />
      <SkillsetList
        title={"My skillset includes 🛠️"}
        skills={skills.currentSkills}
        darkTheme={darkTheme}
      />
      <SkillsetList
        title={"What I want to learn next 🚀"}
        skills={skills.futureSkills}
        darkTheme={darkTheme}
      />
      <SectionHeader darkTheme={darkTheme} />
      <ProjectList />
      <Footer darkTheme={darkTheme} />
    </Wrapper>
  );
}

export default App;