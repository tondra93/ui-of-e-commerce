import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Your Wishlist ({wishlist.length})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-slate-300" />
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-2">Your wishlist is empty</p>
            <p className="text-sm text-slate-400 mb-6">Save items you love for later</p>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700"
              >
                <div className="relative aspect-square">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-rose-500 text-white shadow-lg"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2">
                    <StarRating rating={product.rating} />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addItem(product)}
                      className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
