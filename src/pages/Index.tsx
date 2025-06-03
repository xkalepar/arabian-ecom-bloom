
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Benefits } from '@/components/Benefits';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
