import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Swayam Gupta</a>
        </Link>
        <div className="space-x-6">
          <Link href="/projects"><a className="hover:text-yellow-400">Projects</a></Link>
          <Link href="/contact"><a className="hover:text-yellow-400">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
