import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const { addOrder } = useAuth();
  const [placed, setPlaced] = useState(false);

  // Shipping fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  // Payment fields
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const allFieldsFilled = useMemo(() => {
    return (
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      address.trim() &&
      city.trim() &&
      zip.trim() &&
      cardNumber.trim() &&
      expiry.trim() &&
      cvc.trim()
    );
  }, [firstName, lastName, email, address, city, zip, cardNumber, expiry, cvc]);

  const subtotal = totalPrice;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!allFieldsFilled) return;
    addOrder(items, total);
    clearCart();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Order Placed!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Shipping Info</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input-field" required
                  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" className="input-field" required
                  value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" className="input-field sm:col-span-2" required
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Address" className="input-field sm:col-span-2" required
                  value={address} onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="City" className="input-field" required
                  value={city} onChange={(e) => setCity(e.target.value)} />
                <input type="text" placeholder="ZIP Code" className="input-field" required
                  value={zip} onChange={(e) => setZip(e.target.value)} />
              </div>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Payment</h2>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" className="input-field" required
                  value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="input-field" required
                    value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                  <input type="text" placeholder="CVC" className="input-field" required
                    value={cvc} onChange={(e) => setCvc(e.target.value)} />
                </div>
              </div>
            </motion.div>

            {!allFieldsFilled && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Please fill in all fields to complete your order.
              </div>
            )}

            <form onSubmit={handlePlaceOrder}>
              <motion.button
                whileHover={allFieldsFilled ? { scale: 1.01 } : {}}
                whileTap={allFieldsFilled ? { scale: 0.99 } : {}}
                type="submit"
                disabled={!allFieldsFilled}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                  allFieldsFilled
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 cursor-pointer'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed shadow-none'
                }`}
              >
                {allFieldsFilled ? `Place Order — $${total.toFixed(2)}` : 'Complete All Fields to Checkout'}
              </motion.button>
            </form>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 h-fit"
          >
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{item.name}</p>
                    <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-semibold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-700 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="text-slate-900 dark:text-white font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Shipping</span>
                <span className={shipping === 0 ? 'text-green-600 font-medium' : 'text-slate-900 dark:text-white font-medium'}>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tax</span>
                <span className="text-slate-900 dark:text-white font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="text-slate-900 dark:text-white">Total</span>
                <span className="text-slate-900 dark:text-white">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 p-3 rounded-xl bg-green-50 dark:bg-green-900/20">
              <Shield className="w-5 h-5 text-green-600 shrink-0" />
              <p className="text-xs text-green-700 dark:text-green-400">
                Secure SSL Encryption. Your data is protected.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
