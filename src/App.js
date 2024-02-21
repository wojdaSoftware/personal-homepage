import Header from "./components/Header";
import SkillsetList from "./components/SkillsetList";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <>
      <Header extraHeaderContent={<ThemeButton />} />
      <SkillsetList title={"My skillset includes 🛠️"} />
      <SkillsetList title={"What I want to learn next 🚀"} />
    </>
  );
}

export default App;