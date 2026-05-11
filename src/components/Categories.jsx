import { motion } from 'framer-motion';
import { Cpu, Shirt, Home, Watch, Dumbbell, Sparkles } from 'lucide-react';

const iconMap = { Cpu, Shirt, Home, Watch, Dumbbell, Sparkles };

export default function Categories({ categories }) {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Browse by
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Shop by Category
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Explore our curated collections across every lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            return (
              <motion.a
                key={cat.id}
                href="#products"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Very light overlay so image stays visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Text badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg">
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{cat.name}</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
