import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Chess Board Game",
    description: "Interactive chess game built using Python and Pygame.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_python-pygame-chess-activity-7378679248351465472-hhMU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
  {
    title: "Invisibility Cloak",
    description: "Real-time invisibility effect using OpenCV.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_opencv-python-computervision-activity-7378371359208407041-0xW4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
  {
    title: "AI Money Mentor",
    description: "AI-powered finance advisor for spending & saving insights.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_hackathon-esummit2025-teamwork-activity-7366673134105616384-eju4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
  {
    title: "YouTube Clone",
    description: "Responsive frontend replica using HTML, CSS & JS.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_webdevelopment-frontend-html-activity-7354221359700369408-T0np?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

