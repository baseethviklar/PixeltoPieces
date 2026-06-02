# 🌟 Contributing to PixelToPieces

First off, thank you for considering contributing to PixelToPieces! Whether you're a seasoned developer or this is your very first open-source contribution, we are incredibly excited to have you here. 

This document is designed to make it as easy as possible for you to get involved.

---

## 🗺️ Finding Issues to Work On

Not sure where to start? We've got you covered!
- **Beginners:** Look for issues labeled `good first issue` or `beginner-friendly`. These are specifically chosen to be easy introductions to the codebase.
- **UI/UX Enthusiasts:** Look for the `design` or `frontend` labels.
- **Bug Hunters:** Look for the `bug` label.

If you find an issue you'd like to work on, simply comment **"I would like to work on this!"** on the issue thread so we can assign it to you and avoid duplicate work.

---

## 📁 File Structure

Here is a quick map of the project to help you navigate:

```text
pixeltopieces/
├── src/
│   ├── app/            # Next.js App Router pages (Home, Login, Register)
│   │   ├── globals.css # Global styles and CSS tokens (colors, fonts, etc.)
│   │   ├── layout.tsx  # Global app layout (contains the Sidebar)
│   │   └── page.tsx    # The main landing page
│   └── components/     # Reusable UI components (like the Sidebar)
├── public/             # Static assets (images, icons)
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## ✨ Quality Expectations

To keep our codebase secure and our app looking beautiful, we have a few strict but simple rules:

1. **Input Validation:** All new API endpoints **must** have proper input validation. We never trust raw user input!
2. **Design Consistency:** All new features **must** follow our existing design tokens (CSS variables) found in `src/app/globals.css`. Please use the predefined `--primary-color`, `--card-bg`, etc., instead of hardcoding raw hex values.
3. **Show Your Work:** **Screenshots are MANDATORY** for any Pull Request that changes the User Interface. We want to see what you built!

---

## 💬 Commit Guidelines

We like our Git history to be readable. When making commits, please use clear and descriptive messages:

- `feat:` for new features (e.g., `feat: add user profile page`)
- `fix:` for bug fixes (e.g., `fix: resolve sidebar scrolling issue`)
- `docs:` for documentation changes (e.g., `docs: update readme with quickstart`)
- `style:` for visual changes that don't affect logic (e.g., `style: update button hover colors`)
- `refactor:` for code improvements without adding new features

---

## 🚀 Pull Request Process

Ready to submit your code? Awesome! Just follow these steps:

1. **Fork the Repository:** Create your own copy of the project on GitHub.
2. **Clone Locally:** `git clone https://github.com/YOUR_USERNAME/pixeltopieces.git`
3. **Create a Branch:** Create a branch for your work (`git checkout -b feat/my-awesome-feature`).
4. **Make Your Changes:** Write your code, ensuring you follow the Quality Expectations above.
5. **Test Your Code:** Ensure the app still runs correctly locally using `npm run dev`.
6. **Commit & Push:** Commit your changes using our commit guidelines and push to your fork.
7. **Open a PR:** Go to the original repository and click "New Pull Request". 
8. **Add Screenshots:** If you changed the UI, don't forget to attach screenshots to your PR description!

Once submitted, one of our maintainers will review your code. Don't worry if we ask for changes—code review is a normal part of the process and a great way to learn!

---

🎉 **Thank you for making PixelToPieces better! Happy coding!** 🎉
