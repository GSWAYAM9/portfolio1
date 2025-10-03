import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Chess Board Game",
    description: "Interactive chess game built using Python and Pygame.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_python-pygame-chess-activity-7378679248351465472-hhMU"
  },
  {
    title: "Invisibility Cloak",
    description: "Real-time invisibility effect using OpenCV.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_opencv-python-computervision-activity-7378371359208407041-0xW4"
  },
  {
    title: "AI Money Mentor",
    description: "AI-powered finance advisor for spending & saving insights.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_hackathon-esummit2025-teamwork-activity-7366673134105616384-eju4"
  },
  {
    title: "YouTube Clone",
    description: "Responsive frontend replica using HTML, CSS & JS.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_webdevelopment-frontend-html-activity-7354221359700369408-T0np"
  }
];

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 1200 }); }, []);

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-900">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h1>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
          {projects.map((proj, idx) => <ProjectCard key={idx} {...proj} />)}
        </div>
      </section>
      <Footer />
    </>
  );
}
