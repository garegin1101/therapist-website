# 🚀 Free Deployment Guide

## Option 1: Vercel (RECOMMENDED - Easiest & Best for Next.js)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Therapist website"

# Create a new repository on GitHub (github.com)
# Then connect and push:
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/therapist-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use your GitHub account - no credit card needed)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes ✅ Done!

### Your Site Will Be Live At:
- `https://your-project-name.vercel.app`

### Add Custom Domain (Optional):
1. In Vercel dashboard → Go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `aramiqayelyan.com`)
4. Follow the DNS instructions provided

---

## Option 2: Netlify (Alternative)

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub (free, no credit card)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"
7. Wait 2-3 minutes ✅ Done!

### Your Site Will Be Live At:
- `https://random-name-123.netlify.app`
- You can change the subdomain in settings

---

## Option 3: GitHub Pages (Free, but requires extra config)

**Note:** Requires converting to static export

### Step 1: Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Add deployment script to package.json
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build && next export",
  "deploy": "gh-pages -d out"
}
```

### Step 3: Install gh-pages
```bash
npm install -D gh-pages
```

### Step 4: Deploy
```bash
npm run export
npm run deploy
```

Your site will be at: `https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME`

---

## 🎯 Recommended Path (Easiest):

1. **Push your code to GitHub** (required for all options)
2. **Deploy to Vercel** (takes 5 minutes, no config needed)
3. **Add custom domain later** (optional)

### Quick Commands to Get Started:

```bash
# 1. Initialize git repository
cd 'c:/Users/user/OneDrive/Documents/Desktop/Arayik/Next.js-Developer-Portfolio-Starter-Code'
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Therapist website ready for deployment"

# 4. Create repository on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/therapist-website.git
git branch -M main
git push -u origin main

# 5. Go to vercel.com and import your GitHub repo
```

---

## 📋 Before Deploying - Final Checklist:

- [x] Cal.com URL updated
- [x] Personal information updated (name, email, phone)
- [ ] Test booking flow works
- [ ] Test on mobile browser
- [ ] Check all links work
- [ ] Review content for accuracy
- [ ] Add favicon (optional)
- [ ] Update meta descriptions (optional)

---

## 💰 Cost Comparison:

| Platform | Price | Bandwidth | SSL | Custom Domain |
|----------|-------|-----------|-----|---------------|
| **Vercel** | FREE | 100GB/month | ✅ Free | ✅ Free |
| **Netlify** | FREE | 100GB/month | ✅ Free | ✅ Free |
| **GitHub Pages** | FREE | 100GB/month | ✅ Free | ✅ Free |

All options are completely free and don't require a credit card!

---

## 🔄 Auto-Deploy on Changes:

Once connected to Vercel/Netlify:
- Every time you push to GitHub → Automatic deployment
- Changes go live in 2-3 minutes
- No manual deployment needed

---

## 🆘 Need Help?

If you encounter issues:
1. Check the build logs in Vercel/Netlify dashboard
2. Ensure all dependencies are in package.json
3. Make sure the build works locally: `npm run build`
