import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import StarRating from './StarRating';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function QuickViewModal({ product, onClose }) {
  const { addItem } = useCart();
  const { toggleWishlist, isWished } = useWishlist();

  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square bg-slate-100 dark:bg-slate-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {discount > 0 && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8 flex flex-col">
                <button
                  onClick={onClose}
                  className="self-end p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mb-2"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {product.category}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-3">
                  <StarRating rating={product.rating} size={16} />
                  <span className="text-sm text-slate-400">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-slate-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { icon: Truck, label: 'Free Shipping' },
                    { icon: Shield, label: '2yr Warranty' },
                    { icon: RotateCcw, label: '30d Returns' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                      <Icon className="w-5 h-5 text-blue-600" />
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 text-center">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { addItem(product); onClose(); }}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3.5 rounded-xl border transition-colors ${
                      isWished(product.id)
                        ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 text-rose-500'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWished(product.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
