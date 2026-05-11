import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import StarRating from './StarRating';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Loved by Thousands
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Real stories from real customers who love our products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-blue-200 dark:text-blue-900 mb-4" />
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
