import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount, onCartClick, searchQuery, onSearchChange, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>ShopEasy</h1>
          </Link>
        </div>

        <form className="search-bar" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Products</Link>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#auth" className="nav-link" onClick={() => setMenuOpen(false)}>Sign In</a>
          <a href="#auth" className="nav-link signup-link" onClick={() => setMenuOpen(false)}>Sign Up</a>
          <button className="cart-btn" onClick={() => { onCartClick(); setMenuOpen(false); }}>
            Cart ({cartCount})
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
