import "./style/input.css";
import "./App.css";
// components
import { MyContainer } from "./components";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider>
        <MyContainer />
      </ThemeProvider>
    </>
  );
}
export default App;
