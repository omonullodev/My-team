import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route  path="/" element={<Home/>  } />
        
      <Route path="/about" element={ <About/>} />
      <Route path="/contact" element={ <Contact/>} />
      
      </Routes>
      <Footer/>
      
      
  
      
      
     
    </div>
  );
}

export default App;
