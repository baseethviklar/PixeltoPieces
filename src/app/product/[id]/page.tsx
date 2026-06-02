import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="product-page-container">
      {/* Top Section */}
      <div className="product-top-section">
        {/* Left: Image Carousel */}
        <div className="product-image-section">
          <div className="product-image-main" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80')" }}>
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
          <h1 className="product-page-title">Customised QR Code Stand</h1>
          <span className="badge-new">New</span>
          
          <p className="product-subtitle">Professional QR display stand for everyday business use</p>
          
          <ul className="product-features-list">
            <li>Customised with your QR code, logo or message</li>
            <li>Ideal for UPI payments, menus, social media links & more</li>
            <li>Perfect for counters, tables, reception desks & checkout areas</li>
            <li>Size: 6 inches x 4 inches</li>
            <li>Decoration Technology: Digital Printing</li>
            <li>Cash on Delivery available</li>
            <li><strong>Price below is MRP (inclusive of all taxes)</strong></li>
          </ul>
          
          <a href="#details" className="see-details-link">See Details</a>
          
          <div className="product-price-block">
            <h2>₹220.00</h2>
            <span>1 unit</span>
          </div>

          <div className="delivery-info">
            <p>Delivery to 110001 <a href="#" style={{textDecoration:'underline', fontWeight: 600}}>More information</a></p>
            <p style={{marginTop: '0.5rem'}}>🚚 <strong style={{color: 'var(--text-dark)'}}>5 June</strong> <span style={{color:'#16a34a', fontWeight: 600, marginLeft: '0.5rem'}}>FREE</span></p>
          </div>

          <div className="quantity-selector">
            <label>Quantity</label>
            <select className="form-input">
              <option>1 (₹220.00 / unit)</option>
              <option>5 (₹200.00 / unit)</option>
              <option>10 (₹180.00 / unit)</option>
            </select>
          </div>
          
          <button className="btn btn-primary" style={{width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1.1rem'}}>Start Designing</button>
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div id="details" className="product-bottom-section">
        <div className="product-description-text">
          <h2>Customised QR Code Stand — For Shops, Counters & Easy UPI Payments</h2>
          
          <h3>Why Use a QR Code Stand for Your Business?</h3>
          <p>Make scanning quick and effortless with a QR code stand designed to keep your code clearly visible at the point of interaction. Whether it's for UPI payments, a digital menu, social media links, or a feedback form — a dedicated stand ensures customers don't have to search for a printed slip or ask where to scan.</p>
          <p>This compact table QR code stand measures 6 inches x 4 inches, making it easy to place on counters, tables, reception desks, or checkout areas without taking up much space. The QR code is digitally printed for sharp visibility and reliable scanning every time.</p>

          <h3>Customise Your QR Code Stand with Logo & Branding</h3>
          <p>Unlike generic QR code stands, this one can be fully personalised with your business name, logo, QR code, and a short message. Whether you need a UPI QR code stand for your shop counter or a branded display stand for events, customisation helps your stand look professional and on-brand.</p>
          <p>Add your GPay, PhonePe, Paytm, or any UPI QR code alongside your logo — so customers know exactly who they're paying.</p>
        </div>
        <div className="product-description-image">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="QR Code Stand on Counter" style={{width: '100%', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
        </div>
      </div>
    </div>
  );
}
