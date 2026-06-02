"use client";
import Link from 'next/link';
import { useState } from 'react';

const categoriesData = [
  {
    name: "Visiting Cards",
    subCategories: [
      {
        title: "Visiting Cards",
        items: [
          { name: "Standard Visiting Cards", isNew: false },
          { name: "Classic Visiting Cards", isNew: false },
          { name: "Rounded Corner Visiting Cards", isNew: false },
          { name: "Square Visiting Cards", isNew: false },
          { name: "Leaf Visiting Cards", isNew: true },
          { name: "Oval Visiting Cards", isNew: true },
          { name: "Circle Visiting Cards", isNew: true }
        ]
      },
      {
        title: "Brilliant Finishes",
        items: [
          { name: "Spot UV Visiting Cards", isNew: false },
          { name: "Raised Foil Visiting Cards", isNew: false }
        ]
      },
      {
        title: "Standard Papers",
        items: [
          { name: "Glossy Visiting Cards", isNew: false },
          { name: "Matte Visiting Cards", isNew: false },
          { name: "Bulk Visiting Cards", isNew: true }
        ]
      },
      {
        title: "Premium Papers",
        items: [
          { name: "Premium Plus Visiting Cards", isNew: false },
          { name: "Non-Tearable Visiting Cards", isNew: false },
          { name: "Velvet Touch Visiting Cards", isNew: false },
          { name: "Pearl Visiting Cards", isNew: true },
          { name: "Kraft Visiting Cards", isNew: true }
        ]
      },
      {
        title: "Digital Visiting Cards",
        items: [
          { name: "QR Code Visiting Cards", isNew: false },
          { name: "NFC Visiting Cards", isNew: false }
        ]
      }
    ]
  },
  {
    name: "Stationery, Letterheads & Notebooks",
    subCategories: [
      {
        title: "Office Stationery",
        items: [
          { name: "Letterheads", isNew: false },
          { name: "Notebooks", isNew: false },
          { name: "Notepads", isNew: false }
        ]
      },
      {
        title: "Pens & Writing",
        items: [
          { name: "Engraved Pens", isNew: false },
          { name: "Plastic Pens", isNew: false }
        ]
      }
    ]
  },
  {
    name: "Stamps and Ink",
    subCategories: [
      {
        title: "Rubber Stamps",
        items: [
          { name: "Self-Inking Stamps", isNew: false },
          { name: "Pre-Inked Stamps", isNew: false },
          { name: "Pocket Stamps", isNew: true }
        ]
      }
    ]
  },
  {
    name: "Signs, Posters & Marketing Materials",
    subCategories: [
      {
        title: "Banners & Posters",
        items: [
          { name: "Vinyl Banners", isNew: false },
          { name: "Roll-Up Standees", isNew: false },
          { name: "Posters", isNew: false }
        ]
      },
      {
        title: "Marketing Materials",
        items: [
          { name: "Flyers & Leaflets", isNew: false },
          { name: "Brochures", isNew: false },
          { name: "Menu Cards", isNew: true }
        ]
      }
    ]
  },
  {
    name: "Labels, Stickers & Packaging",
    subCategories: [
      {
        title: "Stickers & Labels",
        items: [
          { name: "Custom Roll Labels", isNew: false },
          { name: "Die-Cut Stickers", isNew: true },
          { name: "Product Labels", isNew: false }
        ]
      },
      {
        title: "Packaging Solutions",
        items: [
          { name: "Custom Mailer Boxes", isNew: false },
          { name: "Paper Bags", isNew: false },
          { name: "Polymailers", isNew: true }
        ]
      }
    ]
  },
  {
    name: "Clothing, Caps & Bags",
    subCategories: [
      {
        title: "Apparel",
        items: [
          { name: "T-Shirts", isNew: false },
          { name: "Polo Shirts", isNew: false },
          { name: "Hoodies & Sweatshirts", isNew: true }
        ]
      },
      {
        title: "Accessories",
        items: [
          { name: "Custom Caps", isNew: false },
          { name: "Tote Bags", isNew: false },
          { name: "Laptop Backpacks", isNew: true }
        ]
      }
    ]
  },
  {
    name: "Mugs, Albums & Gifts",
    subCategories: [
      {
        title: "Drinkware Gifts",
        items: [
          { name: "Photo Mugs", isNew: false },
          { name: "Magic Mugs", isNew: true },
          { name: "Travel Mugs", isNew: false }
        ]
      },
      {
        title: "Photo Gifts",
        items: [
          { name: "Photo Albums", isNew: false },
          { name: "Canvas Prints", isNew: false },
          { name: "Custom Calendars", isNew: true }
        ]
      }
    ]
  },
  {
    name: "Umbrellas & Rainwear",
    subCategories: [
      {
        title: "Rain Protection",
        items: [
          { name: "Classic Umbrellas", isNew: false },
          { name: "Golf Umbrellas", isNew: false },
          { name: "Custom Raincoats", isNew: true }
        ]
      }
    ]
  },
  {
    name: "Drinkware",
    subCategories: [
      {
        title: "Bottles & Mugs",
        items: [
          { name: "Water Bottles", isNew: false },
          { name: "Stainless Steel Bottles", isNew: true },
          { name: "Coffee Mugs", isNew: false }
        ]
      }
    ]
  },
  {
    name: "Custom Polo T-shirts",
    subCategories: [
      {
        title: "Polo Styles",
        items: [
          { name: "Cotton Polo Shirts", isNew: false },
          { name: "Dry-Fit Polo Shirts", isNew: true },
          { name: "Embroidered Polos", isNew: false }
        ]
      }
    ]
  },
  {
    name: "Custom T-Shirts",
    subCategories: [
      {
        title: "T-Shirt Styles",
        items: [
          { name: "Round Neck T-Shirts", isNew: false },
          { name: "V-Neck T-Shirts", isNew: false },
          { name: "Graphic Printed Tees", isNew: true }
        ]
      }
    ]
  }
];

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const hoveredData = categoriesData.find(c => c.name === activeCategory);

  return (
    <>
      <aside className="sidebar" onMouseLeave={() => setActiveCategory(null)}>
        <div className="sidebar-logo">
          <Link href="/">PixelToPieces</Link>
        </div>
        
        <div className="sidebar-section">
          <h4 className="sidebar-title">Categories</h4>
          <ul className="sidebar-list">
            {categoriesData.map((cat, idx) => (
              <li 
                key={idx} 
                className="sidebar-item" 
                onMouseEnter={() => setActiveCategory(cat.name)}
              >
                <Link href={`/category/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className={`sidebar-link ${activeCategory === cat.name ? 'active' : ''}`}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="sidebar-footer">
          <p>PixelToPieces v1.0.0</p>
          <p>Built with ❤️ by the open source community.</p>
        </div>
      </aside>

      {/* Mega Menu Panel */}
      {hoveredData && hoveredData.subCategories.length > 0 && (
        <div 
          className="mega-menu"
          onMouseEnter={() => setActiveCategory(hoveredData.name)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="mega-menu-content">
            {hoveredData.subCategories.map((group, gIdx) => (
              <div key={gIdx} className="mega-menu-column">
                <h3 className="mega-menu-title">{group.title}</h3>
                <ul className="mega-menu-list">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <Link href={`/product/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="mega-menu-link">
                        {item.name}
                        {item.isNew && <span className="badge-new" style={{marginLeft: '0.5rem', marginBottom: 0, padding: '0.1rem 0.4rem', fontSize: '0.6rem'}}>NEW</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mega-menu-footer">
            <Link href={`/category/${hoveredData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{fontWeight: 700, color: 'var(--primary-color)'}}>
              See All {hoveredData.name}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
