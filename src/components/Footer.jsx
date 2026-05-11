import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Shop: ['New Arrivals', 'Best Sellers', 'Flash Sale', 'Categories'],
    Support: ['Help Center', 'Shipping Info', 'Returns', 'Track Order'],
    Company: ['About Us', 'Careers', 'Press', 'Sustainability'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ShopEase</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Your premium destination for curated lifestyle products. Quality, craftsmanship, and innovation in every detail.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> San Francisco, CA
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@shopease.com
            </span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
