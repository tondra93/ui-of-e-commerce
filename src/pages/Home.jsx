import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSale from '../components/FlashSale';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import { products, categories, testimonials } from '../data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <Hero />
      <Categories categories={categories} />
      <FeaturedProducts products={products} />
      <FlashSale products={products} />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
      <Footer />
      <CartSidebar />
    </div>
  );
}
