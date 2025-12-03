import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Index() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onContactClick={scrollToContact} />
      <Services />
      <Advantages />
      <ContactForm />
      <Footer />
    </div>
  );
}
