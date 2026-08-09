import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortalAccess from '../components/PortalAccess';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PortalAccess />
    </main>
  );
}
