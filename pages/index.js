import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Swayam Gupta</h1>
        <p className="mt-4 text-xl">Full-Stack Developer | AI & ML Enthusiast</p>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            B.Tech CSE student at KIIT University. Passionate about AI, Machine Learning, and Web Development. I build interactive projects and enjoy solving real-world problems through technology.
          </p>
        </section>

        <section className="mt-12">
          <Link href="/projects">
            <a className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">View Projects</a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
