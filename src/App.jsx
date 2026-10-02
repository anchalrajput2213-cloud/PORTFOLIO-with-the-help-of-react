
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import Movies from './Components/Movies.jsx';
import MovieDetail from './Components/MovieDetails.jsx';
import MovieProvider from "./Context/ContextMovie";
function App() {
  return (
    <MovieProvider>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </HashRouter>
    </MovieProvider>
  );
}

export default App;



// import Navbar from './Components/Navbar.jsx';
// import Home from './Components/Home.jsx';
// import About from './Components/About.jsx';
// import Skills from './Components/Skills.jsx';
// import Projects from './Components/Projects.jsx';
// import Footer from './Components/Footer.jsx';
// import Contact from './Components/Contact.jsx';
// function App(){
//   return(
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// export default App;
//#context Api
// import MovieProvider from "./Context/ContextMovie";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
// import Movies from "./Components/Movies";
// import MovieDetails from "./Components/MovieDetails";

// function App() {
//   return (
//     <MovieProvider>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Movies />
//       <MovieDetails />
//       <Footer />
//     </MovieProvider>
//   );
// }

// export default App;