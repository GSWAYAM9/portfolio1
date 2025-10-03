import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Home() {
  useEffect(() => { AOS.init({ duration: 1200 }); }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
        <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg">Hi, I'm Swayam Gupta</h1>
        <p className="mt-6 text-xl md:text-2xl max-w-2xl drop-shadow">Full-Stack Developer | AI & ML Enthusiast</p>
        <div className="mt-8 flex space-x-4">
          <Link href="/projects">
            <a className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transform transition">View Projects</a>
          </Link>
          <Link href="/contact">
            <a className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-purple-600 transition">Contact Me</a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
