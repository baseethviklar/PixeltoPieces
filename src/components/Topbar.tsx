import Link from 'next/link';
import React from 'react';

export default function Topbar() {
  return (
    <header className="navbar" style={{ justifyContent: 'space-between', padding: '1rem 3rem', background: 'white', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 40 }}>
      <div className="search-bar" style={{ flex: 1, maxWidth: '600px', position: 'relative' }}>
         <input type="text" placeholder="Search" className="form-input" style={{ width: '100%', margin: 0, padding: '0.75rem 1rem', paddingRight: '3rem', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }} />
         <svg style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#333', cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
      
      <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginLeft: '2rem', fontSize: '0.9rem', fontWeight: 500, color: '#333' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
            <span>Help is here</span>
            <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 400 }}>022-9808-8767</span>
          </div>
        </div>

        <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          My Projects
        </Link>
        
        <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          My Favorites
        </Link>
        
        <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Sign in
        </Link>
        
        <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Cart
        </Link>
      </div>
    </header>
  );
}
