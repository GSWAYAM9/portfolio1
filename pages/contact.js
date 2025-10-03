import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gradient-to-b from-purple-600 to-pink-500">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h1>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
