export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto mt-6 space-y-4 bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg">
      <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-purple-500" />
      <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-purple-500" />
      <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-purple-500"></textarea>
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
        Send Message
      </button>
    </form>
  );
}
