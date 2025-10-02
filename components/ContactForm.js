export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto mt-6 space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
      <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" required></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Send</button>
    </form>
  );
}

