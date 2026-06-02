import Link from 'next/link';

// Simple mock data for the category page
const categoryDetails: Record<string, { title: string; image: string; subCategories: { title: string; items: string[] }[] }> = {
  'visiting-cards': {
    title: 'Visiting Cards',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=1200&q=80',
    subCategories: [
      { title: 'Standard', items: ['Standard Visiting Cards', 'Classic Visiting Cards', 'Rounded Corner'] },
      { title: 'Premium', items: ['Spot UV', 'Raised Foil', 'Velvet Touch'] },
      { title: 'Specialty', items: ['Magnetic', 'Transparent', 'NFC Cards'] }
    ]
  },
  'custom-polo-t-shirts': {
    title: 'Custom Polo T-shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
    subCategories: [
      { title: 'Men\'s Polos', items: ['Cotton Polo', 'Dry-Fit Polo'] },
      { title: 'Women\'s Polos', items: ['Classic Polo', 'Sport Polo'] }
    ]
  }
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // We simulate finding the category by slug, but we'll fall back to a generic one
  const data = categoryDetails[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
    subCategories: [
      { title: 'Most Popular', items: ['Standard Option', 'Premium Quality', 'Bulk Pack'] },
      { title: 'New Arrivals', items: ['Eco-Friendly', 'Limited Edition'] },
      { title: 'Accessories', items: ['Pro Kit', 'Starter Bundle', 'Gift Box'] }
    ]
  };

  return (
    <div className="category-page-container" style={{ padding: '2rem 3rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      
      {/* Category Banner */}
      <div className="category-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 4rem',
        borderRadius: '16px',
        color: 'white',
        marginBottom: '4rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>{data.title}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', opacity: 0.9 }}>
          Explore our wide range of custom {data.title.toLowerCase()} to fit your exact needs and make a lasting impression.
        </p>
      </div>

      {/* Subcategories Grid */}
      <div className="subcategories-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>
        {data.subCategories.map((sub, idx) => (
          <div key={idx} className="subcategory-card" style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border-color)',
            transition: 'var(--transition)'
          }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 800 }}>
              {sub.title}
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {sub.items.map((item, iIdx) => (
                <li key={iIdx}>
                  <Link href={`/product/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{
                    color: 'var(--text-dark)',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  }}>
                    <span className="subcategory-link-text">{item}</span>
                    <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
