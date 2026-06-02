import Link from 'next/link';
import { categoriesData } from '@/lib/categories';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Find category by matching slug to name
  const matchedCategory = categoriesData.find(
    cat => cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  // Fallback if somehow it doesn't match
  const data = matchedCategory || {
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    subCategories: []
  };

  return (
    <div className="category-page-container" style={{ padding: '2rem 3rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      
      {/* Category Banner */}
      <div className="category-header" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=1200&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 4rem',
        borderRadius: '16px',
        color: 'white',
        marginBottom: '4rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>{data.name}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', opacity: 0.9 }}>
          Explore our wide range of custom {data.name.toLowerCase()} to fit your exact needs and make a lasting impression.
        </p>
      </div>

      {/* Subcategories Grid */}
      <div className="subcategories-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>
        {data.subCategories.length > 0 ? data.subCategories.map((sub, idx) => (
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
                  <Link href={`/product/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{
                    color: 'var(--text-dark)',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  }}>
                    <span className="subcategory-link-text">{item.name}</span>
                    <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )) : (
          <p>No subcategories found for {data.name}.</p>
        )}
      </div>
    </div>
  );
}
