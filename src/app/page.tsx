import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Visiting Cards", image: "https://m.media-amazon.com/images/I/51AAkq0aAHL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Custom Polo T-shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
    { name: "Custom Dress Shirts", image: "https://deq64r0ss2hgl.cloudfront.net/images/opt/products_gallery_images/oxford-polycotton-shirt-60432152039260.jpg?v=6294" },
    { name: "Custom T-shirts", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" },
    { name: "Custom Caps", image: "https://images.unsplash.com/photo-1521369909029-14af6784d59a?w=500&q=80" },
    { name: "Signs, Posters & Marketing Materials", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&q=80" },
    { name: "Custom Stamps & Ink", image: "https://printo-s3.dietpixels.net/Soldout/Stamps/Self-ink-Rubber-Stamps_1775464218.jpg" },
    { name: "Photo Gifts", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80" },
  ];

  const popularProducts = [
    { name: "Standard Visiting Cards", badge: "BUY 100 @ Rs. 200", image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500&q=80" },
    { name: "Rounded Corner Visiting Cards", badge: "BUY 100 @ Rs. 250", image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=500&q=80" },
    { name: "Letterheads", badge: "BUY 10 @ Rs. 230", image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=500&q=80" },
    { name: "Photo Albums", badge: "BUY 1 @ Rs. 715", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" },
    { name: "Stickers", badge: "BUY 10 @ Rs. 150", image: "https://images.unsplash.com/photo-1555546599-231a44e578c7?w=500&q=80" },
    { name: "Men's Polo T-Shirts", badge: "BUY 1 @ Rs. 570", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80" },
  ];

  const trendingProducts = [
    { name: "Classic Visiting Cards", badge: "BUY 100 @ Rs. 230", image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500&q=80" },
    { name: "Spot UV Visiting Cards", badge: "BUY 100 @ Rs. 580", image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=500&q=80" },
    { name: "Printed Caps", badge: "BUY 1 @ Rs. 310", image: "https://images.unsplash.com/photo-1521369909029-14af6784d59a?w=500&q=80" },
    { name: "Premium Polo T-Shirts", badge: "BUY 1 @ Rs. 770", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80" },
    { name: "Printed Polos - Multi Location", badge: "BUY 1 @ Rs. 570", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
    { name: "Women's Polo T-shirts", badge: "BUY 1 @ Rs. 570", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3db8?w=500&q=80" },
  ];

  return (
    <main>
      <header className="navbar">
        <div className="search-bar">
           <input type="text" placeholder="Search products..." className="form-input" style={{ width: '300px', margin: 0, padding: '0.5rem 1rem' }} />
        </div>
        <div className="btn-group">
          <Link href="/login" className="btn" style={{border: '1px solid var(--border-color)'}}>Login</Link>
          <Link href="/register" className="btn btn-primary">Sign Up</Link>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero-grid">
          <div className="hero-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80')" }}>
            <div className="hero-content">
              <h3>Visiting Cards</h3>
              <p>100 Visiting Cards at Rs 200</p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
          
          <div className="hero-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525904097878-c0f1c69b4b49?w=1000&q=80')" }}>
            <div className="hero-content">
              <h3>Look professional with custom rainwear</h3>
              <p>1 Starting at Rs. 655</p>
              <div className="btn-group">
                <button className="btn btn-primary">Umbrellas</button>
                <button className="btn btn-primary">Raincoats</button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h2 className="section-title">Explore all categories</h2>
          <div className="categories-wrapper">
            <div className="categories-scroll">
              {categories.map((cat, idx) => (
                <Link href={`/category/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="category-card" key={idx}>
                  <div className="category-img" style={{ backgroundImage: `url(${cat.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div className="category-title">{cat.name}</div>
                </Link>
              ))}
            </div>
            <button className="nav-arrow next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </section>

        {/* Popular Products */}
        <section>
          <h2 className="section-title">Our Most Popular Products</h2>
          <div className="products-grid">
            {popularProducts.map((prod, idx) => (
              <Link href={`/product/${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="product-card" key={idx}>
                <div className="product-img-wrapper">
                  <div className="product-badge">{prod.badge}</div>
                  <img src={prod.image} alt={prod.name} className="product-img" />
                </div>
                <div className="product-info">
                  <div className="product-title">{prod.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section>
          <h2 className="section-title">Trending</h2>
          <div className="products-grid">
            {trendingProducts.map((prod, idx) => (
              <Link href={`/product/${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="product-card" key={idx}>
                <div className="product-img-wrapper">
                  <div className="product-badge" style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#0284c7' }}>{prod.badge}</div>
                  <img src={prod.image} alt={prod.name} className="product-img" />
                </div>
                <div className="product-info">
                  <div className="product-title">{prod.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
