// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from "./Components/NavBarr";
import Banner  from "./Components/Banner";
import Skills  from "./Components/Skills";
import  Projects  from "./Components/Projects";
import  Contact  from "./Components/Contact";
import  Footer  from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
