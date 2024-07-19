import "./App.css";
import About from "./components/About";
import Aboutcourse from "./components/Aboutcourse";

import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Home />
      <Main />
      <Courses/>
      <Aboutcourse/>
      <About />

      <Footer />
    </div>
  );
}

export default App;
