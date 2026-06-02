# 🔐 Authentication & Access Rules

As PixelToPieces is an open-source project, contributors must adhere to strict access control guidelines when building new pages, UI components, or API endpoints.

## 👤 Guest Users (Not Logged In)

### ✅ Can Access
- Browse all products
- Search products
- Filter by category
- View product details
- View templates/designs
- Use product customization preview (limited)
- View reviews and ratings
- View design marketplace
- Read FAQs
- Contact support

### ❌ Cannot Access (Must Prompt Login)
- Place orders
- Save designs
- Add items to wishlist
- Add items to cart (or allow temporary cart only)
- Leave reviews
- Upload designs
- Track orders

---
**Developers:** When implementing any feature under the "❌ Cannot Access" list, you must ensure the UI redirects the user to `/login` or shows an authentication modal. Server-side API endpoints for these features must return a `401 Unauthorized` response if a valid user session is not present.
