import Link from "next/link";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1>PixelToPieces</h1>
          </Link>
          <p>Create an account to start customizing.</p>
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="you@example.com" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Create a strong password" />
          </div>

          <button type="button" className="btn btn-primary auth-btn">Create Account</button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
