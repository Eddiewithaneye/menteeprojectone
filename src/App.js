// App.js
// I am importing my css file here for my AboutMe component.
import './App.css';
// 1. IMPORT: The boss hires the AboutMe worker from the local file './AboutMe'.
import AboutMe from './AboutMe'; 
import Project from './Project';
import Contact from './Contact';
import Navbar from './Navbar';
export default function App() {
  return (
    <div>
      <Navbar/>
      <h1 id="home">My Developer Portfolio</h1>      
      {/* 2. USE: The boss places the AboutMe component right here */}
      <AboutMe />
      <h2 id="professional-materials"> My Portfolio Projects</h2>
      {/* I am about to use JSX so that I can call upon my properties within my Project componenet*/}
      < Project
      title = "My Personal Website"
      description = "I build this for my mentee project and my Technical writing class!"
      link = "#"
      />
      < Project
      title = "Hold Music Reviver"
      description = "I want to build this app inspired by my dislike of hold music!"
      link = "#"
      />
      < Project
      title = "The Glitter Gecko Website"
      description = "I want to build my enterainment company's website using Vanilla(HTML, CSS, JavaScript)!"
      link = "#"
      />
      <h2 id="writing-samples"> My Writing Samples </h2>
      <Contact />
    </div>
  );
}
