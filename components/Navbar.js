import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800/70 backdrop-blur-md text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold hover:text-purple-400 transition">Swayam Gupta</a>
        </Link>
        <div className="space-x-6">
          <Link href="/projects"><a className="hover:text-purple-400 transition">Projects</a></Link>
          <Link href="/contact"><a className="hover:text-purple-400 transition">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
