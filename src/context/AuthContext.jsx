import { createContext, useContext, useState, useCallback } from 'react';

const generateOrderId = () => 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [orders, setOrders] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('orders');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }, []);

  const signup = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    // Seed a demo order so user can see the orders UI immediately
    const demoOrder = {
      id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      items: [
        { id: 1, name: 'AirPulse Pro Wireless', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop', price: 299, quantity: 1 },
        { id: 4, name: 'Nomad Travel Pack', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop', price: 129, quantity: 1 },
      ],
      total: 428,
      status: 'shipped',
      estimatedDelivery: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    };
    setOrders([demoOrder]);
    localStorage.setItem('orders', JSON.stringify([demoOrder]));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  const updateUser = useCallback((updates) => {
    setUser((prev) => {
      if (!prev) return null;
      const next = { ...prev, ...updates };
      localStorage.setItem('user', JSON.stringify(next));
      return next;
    });
  }, []);

  const addOrder = useCallback((cartItems, total) => {
    const order = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      items: cartItems.map(i => ({ id: i.id, name: i.name, image: i.image, price: i.price, quantity: i.quantity })),
      total,
      status: 'placed',
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    };
    setOrders((prev) => {
      const next = [order, ...prev];
      localStorage.setItem('orders', JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, orders, login, signup, logout, updateUser, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
