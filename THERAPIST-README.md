# Therapist Personal Website

A professional, single-page website for a psychology therapist built with Next.js and Tailwind CSS. Features Cal.com integration for online booking.

## 🌟 Features

- **Static Site**: No backend required, fully client-side
- **Cal.com Integration**: Embedded booking system for therapy sessions
- **Responsive Design**: Mobile-friendly and accessible
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Therapist-Focused**: Sections for About, Services, Approach, and Contact

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Replace Placeholder Information

Search for and replace these placeholders throughout the site:

- **`Dr. Your Name`** → Your actual name
- **`Psychologist / Therapist`** → Your professional title
- **`Yerevan, Armenia`** → Your location
- **`your-email@example.com`** → Your email address
- **`+374 XX XXX XXX`** → Your phone number
- **`YOUR_USERNAME`** → Your Cal.com username

### 2. Update Cal.com Booking URL

In **two files**, replace the Cal.com URL:

**File 1: `src/pages/book.js`**

- Line ~40: `src="https://cal.com/YOUR_USERNAME/therapy-session"`
- Line ~53: `href="https://cal.com/YOUR_USERNAME/therapy-session"`

**File 2: Create your Cal.com account**

1. Go to [cal.com](https://cal.com) and sign up
2. Create an event type called "therapy-session" (or customize the slug)
3. Replace `YOUR_USERNAME` with your Cal.com username

### 3. Customize Content

#### Homepage (`src/pages/index.js`)

**Hero Section (Lines ~60-100)**

- Update the main description paragraph
- Modify the bio to reflect your actual experience

**About Section (Lines ~105-170)**

- Update years of experience (currently "8+")
- Modify education and credentials
- Change the statistics (500+ clients, etc.)
- Rewrite the bio paragraphs

**Services Section (Lines ~175-280)**

- Add, remove, or modify service cards
- Each service card has:
  - Icon (SVG)
  - Title
  - Description

**Approach Section (Lines ~285-370)**

- Modify therapeutic approaches
- Update language offerings
- Add or remove approach cards

**Contact Section (Lines ~375-470)**

- Update contact information
- Modify phone number
- Update location details

### 4. Styling & Colors

The site uses Tailwind CSS with a custom color palette defined in `tailwind.config.js`.

**To change the primary color:**

Edit `tailwind.config.js` and modify the `primary` color object (currently blue):

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // lightest
    500: '#0ea5e9',  // main color
    600: '#0284c7',  // hover states
    900: '#0c4a6e',  // darkest
  },
}
```

You can generate color palettes at [uicolors.app](https://uicolors.app/create)

### 5. Add Profile Photo (Optional)

1. Add your photo to `public/images/profile/`
2. In `src/pages/index.js`, import Next.js Image component
3. Add the image in the hero or about section:

```javascript
import Image from "next/image";

// In your component:
<div className="flex justify-center mb-8">
  <Image
    src="/images/profile/your-photo.jpg"
    alt="Dr. Your Name"
    width={200}
    height={200}
    className="rounded-full"
  />
</div>;
```

### 6. Update Meta Tags & SEO

In both `src/pages/index.js` and `src/pages/book.js`, update the `<Head>` section:

```javascript
<Head>
  <title>Your Actual Title</title>
  <meta name="description" content="Your actual description" />
</Head>
```

### 7. Add a Favicon

Replace the default favicon by adding your icon files to the `public/` directory:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

## 🛠️ Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next/` folder.

### Deploy

The site can be deployed to any static hosting service:

#### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

#### Netlify

1. Push your code to GitHub
2. Import the project at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

#### Other Options

- GitHub Pages (requires next-export configuration)
- AWS Amplify
- Cloudflare Pages
- Any static host that supports Next.js

## 📁 File Structure

```
.
├── src/
│   ├── pages/
│   │   ├── index.js          # Homepage with all main sections
│   │   ├── book.js           # Cal.com booking page
│   │   ├── _app.js           # Next.js app wrapper
│   │   └── _document.js      # Next.js document wrapper
│   └── styles/
│       └── globals.css       # Global styles with Tailwind
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🎨 Components & Sections

### Homepage Sections

1. **Navigation** - Sticky header with links and "Book a Session" CTA
2. **Hero** - Name, title, location, and main CTA buttons
3. **About** - Bio, credentials, experience stats
4. **Services** - 6 service cards (Individual, Couples, Online, etc.)
5. **Approach** - 4 therapeutic approach cards
6. **Contact** - Email, phone, location with booking CTA
7. **Footer** - Copyright and basic info

### Booking Page

- Cal.com iframe embed (responsive)
- Fallback link if iframe doesn't load
- "What to expect" section
- Consistent navigation

## 🔒 Privacy & Security

- **No backend**: No server-side code, no database
- **No user data storage**: All booking data is handled by Cal.com
- **HTTPS required**: Always use HTTPS in production
- **Cal.com privacy**: Review Cal.com's privacy policy and HIPAA compliance options

## 🐛 Troubleshooting

### Tailwind styles not working

Make sure you have the Tailwind directives in `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Cal.com iframe not loading

1. Check that your Cal.com URL is correct
2. Ensure your Cal.com event is set to public
3. Check browser console for any CORS or loading errors
4. Try the fallback link to verify the URL

### Build errors

Run `npm install` again to ensure all dependencies are installed:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is based on the Next.js Developer Portfolio Starter Code template and has been adapted for therapist use.

## 🤝 Support

For Next.js issues: [Next.js Documentation](https://nextjs.org/docs)
For Tailwind CSS: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
For Cal.com setup: [Cal.com Documentation](https://cal.com/docs)

## ✅ Checklist Before Going Live

- [ ] Replace all placeholder text (name, email, phone, location)
- [ ] Update Cal.com username in both files
- [ ] Set up your Cal.com account and event type
- [ ] Add your own content to About, Services, and Approach sections
- [ ] Add a profile photo (optional)
- [ ] Update favicon and meta tags
- [ ] Test the booking flow end-to-end
- [ ] Test on mobile devices
- [ ] Test in both light and dark mode
- [ ] Set up a custom domain
- [ ] Add Google Analytics or privacy-respecting analytics (optional)
- [ ] Review Cal.com privacy settings for HIPAA compliance if needed
- [ ] Add terms of service and privacy policy pages (recommended)

---

**Remember**: This is a static marketing site. All client data, scheduling, and intake information is handled securely through Cal.com. No sensitive information is stored on this website.
