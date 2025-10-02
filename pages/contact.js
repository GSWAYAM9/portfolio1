import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

