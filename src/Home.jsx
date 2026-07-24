import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './pages/Hero.jsx'; // Hero-va separate file-la vachukalam
import Skills from './pages/Skills.jsx';
import Tools from './pages/Tools.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';


function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <main className="container mx-auto pt-20">
        <Hero />
        <Skills />
        <Tools />
        <Projects />
        <Contact />
        {/* Projects section (Backend data fetching) next! */}
      </main>
    </div>
  );
}

export default Home;