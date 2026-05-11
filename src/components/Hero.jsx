import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-blue-200 mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Spring Sale — Up to 40% Off</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover Premium
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Living Essentials
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Curated collection of the finest products designed for modern life. 
              Experience quality, craftsmanship, and innovation in every detail.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#categories"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white rounded-full font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Explore Categories
              </motion.a>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-slate-400">Happy Customers</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-white">2K+</div>
                <div className="text-sm text-slate-400">Products</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-sm text-slate-400">Average Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&h=600&fit=crop"
                alt="Featured collection"
                className="rounded-2xl shadow-2xl shadow-black/30 w-full object-cover"
              />
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-xl">🎧</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">AirPulse Pro</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Just added to cart</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
