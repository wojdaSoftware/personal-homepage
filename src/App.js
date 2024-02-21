import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <>
      <Header extraHeaderContent={<ThemeButton />} />
    </>
  );
}

export default App;