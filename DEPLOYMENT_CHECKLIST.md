# Portfolio Deployment Checklist

## Before Pushing to GitHub

### 1. Personal Information
- [ ] Update name in `index.html`
- [ ] Update email in `index.html` contact section
- [ ] Update phone number
- [ ] Update location
- [ ] Update all social media links (GitHub, LinkedIn, TryHackMe)

### 2. Assets
- [ ] Replace `profile_pic.png` with your actual photo
- [ ] Update or remove `shannu_resume.pdf` (or keep it private in .gitignore)
- [ ] Add project screenshots (optional)

### 3. Content
- [ ] Update About section bio
- [ ] Update Skills and technologies
- [ ] Update Projects with your own
- [ ] Update stats (projects count, certifications, CGPA)
- [ ] Update TryHackMe badge userPublicId

### 4. Customization
- [ ] Test all sections scroll smoothly
- [ ] Check responsive design on mobile
- [ ] Test all links work correctly
- [ ] Verify contact form (consider setting up FormSpree or Netlify Forms)

### 5. Git & GitHub
- [ ] Review `.gitignore` - add any files you want to keep private
- [ ] Create GitHub repository
- [ ] Initialize git: `git init`
- [ ] Add remote: `git remote add origin YOUR_REPO_URL`
- [ ] Commit: `git add . && git commit -m "Initial commit"`
- [ ] Push: `git push -u origin main`

### 6. Deployment
- [ ] Enable GitHub Pages in repository Settings
- [ ] Test live URL
- [ ] Update README with live URL
- [ ] Share your portfolio!

## Quick Deploy Commands

```bash
# Initialize and push
git init
git add .
git commit -m "Initial commit: Cyberpunk portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## Or use the deployment script

```bash
./deploy.sh
```

## Post-Deployment

- [ ] Test portfolio on different devices
- [ ] Test on different browsers
- [ ] Share on LinkedIn
- [ ] Add to resume
- [ ] Update GitHub profile README with portfolio link

## Optional Enhancements

- [ ] Set up custom domain
- [ ] Add Google Analytics
- [ ] Set up contact form backend
- [ ] Add blog section
- [ ] Add dark/light mode toggle
- [ ] Add project case studies
- [ ] Create project demo videos

## SEO Optimization

- [ ] Update meta description in `index.html`
- [ ] Add Open Graph tags
- [ ] Add favicon
- [ ] Add robots.txt
- [ ] Add sitemap.xml

---

**Ready to deploy? Run `./deploy.sh` or follow the manual steps above!**
