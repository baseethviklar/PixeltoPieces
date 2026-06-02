import Image from 'next/image';
import { getProductBySlug } from '@/lib/products';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.id);

  return (
    <div className="product-page-container">
      {/* Top Section */}
      <div className="product-top-section">
        {/* Left: Image Carousel */}
        <div className="product-image-section">
          <div className="product-image-main" style={{ backgroundImage: `url('${product.image}')` }}>
            <button className="wishlist-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <button className="nav-arrow next" style={{ right: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Right: Details & Add to Cart */}
        <div className="product-details-section">
          <h1 className="product-page-title">{product.name}</h1>
          {product.badge && <span className="badge-new" style={{background: 'var(--secondary-color)'}}>{product.badge}</span>}
          
          <p className="product-subtitle">Premium custom design options for everyday business use</p>
          
          <ul className="product-features-list">
            <li>Fully customised with your logo, text, or artwork</li>
            <li>Premium quality printing materials used</li>
            <li>Ideal for branding, events, and giveaways</li>
            <li>Cash on Delivery available across India</li>
            <li><strong>Price below is MRP (inclusive of all taxes)</strong></li>
          </ul>
          
          <a href="#details" className="see-details-link">See Details</a>
          
          <div className="product-price-block">
            <h2>₹{product.price}.00</h2>
            <span>{product.unit}</span>
          </div>

          <div className="delivery-info">
            <p>Delivery to 110001 <a href="#" style={{textDecoration:'underline', fontWeight: 600}}>More information</a></p>
            <p style={{marginTop: '0.5rem'}}>🚚 <strong style={{color: 'var(--text-dark)'}}>5 June</strong> <span style={{color:'#16a34a', fontWeight: 600, marginLeft: '0.5rem'}}>FREE</span></p>
          </div>

          <div className="quantity-selector">
            <label>Quantity</label>
            <select className="form-input">
              <option>1 (₹{product.price}.00 / {product.unit.replace(/[0-9]+ /g, '')})</option>
              <option>5 (₹{Math.floor(product.price * 0.9)}.00 / {product.unit.replace(/[0-9]+ /g, '')})</option>
              <option>10 (₹{Math.floor(product.price * 0.8)}.00 / {product.unit.replace(/[0-9]+ /g, '')})</option>
            </select>
          </div>
          
          <button className="btn btn-primary" style={{width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1.1rem'}}>Start Designing</button>
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div id="details" className="product-bottom-section">
        <div className="product-description-text">
          <h2>{product.name} — Premium Custom Printing</h2>
          
          <h3>Why Choose Our Custom Prints?</h3>
          <p>We deliver high-quality, professional printing services designed to elevate your brand. Whether you're ordering marketing materials, custom apparel, or everyday business stationery, our products are built to leave a lasting impression.</p>

          <h3>Customise with Your Logo & Branding</h3>
          <p>Easily personalize this item with your business name, logo, and artwork. Our intuitive design studio makes it simple to align every print perfectly with your brand identity.</p>
        </div>
        <div className="product-description-image">
          <img src={product.image.startsWith('http') ? product.image : "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"} alt={product.name} style={{width: '100%', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
        </div>
      </div>
    </div>
  );
}
