import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import ProductCard from './ProductCard';

export default function FlashSale({ products }) {
  const scrollRef = useRef(null);
  const saleProducts = products.filter((p) => p.badge === 'Sale' || p.originalPrice);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="flash-sale" className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-100 dark:bg-rose-900/30 rounded-xl">
              <Flame className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                Flash Sale
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Limited time offers — grab them before they're gone
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {saleProducts.map((product, i) => (
            <div key={product.id} className="snap-start shrink-0 w-[280px] sm:w-[300px]">
              <ProductCard product={product} index={i} onQuickView={() => {}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
