# Pragatheeswaran S K — Portfolio Website

A cinematic dark-theme personal portfolio website.

---

## File Structure

```
portfolio/
├── index.html                  ← Main website file (open this in a browser)
├── README.md                   ← This file
└── assets/
    ├── css/
    │   └── style.css           ← All styles (edit colors, fonts, layout here)
    ├── js/
    │   └── main.js             ← All interactions (cursor, tabs, typewriter)
    └── images/
        ├── posters/            ← Put your poster/graphic design images here
        ├── video-thumbnails/   ← Put your video thumbnail images here
        └── 3d-renders/         ← Put your 3D render images here
```

---

## How to Customize

### Change Accent Color
Open `assets/css/style.css` and edit line 14:
```css
--accent: #FF5C00;   /* Change this hex to any color you like */
```

### Add Your Real Work (Replace Placeholders)
1. Drop your image file into the correct folder (e.g. `assets/images/posters/mywork.jpg`)
2. Open `index.html`
3. Find a poster card like this:
```html
<div class="poster-card">
  <div class="card-ph">...</div>   ← DELETE this div
  <div class="card-overlay">...</div>
</div>
```
4. Replace the `<div class="card-ph">` with:
```html
<img src="assets/images/posters/mywork.jpg" style="width:100%;height:100%;object-fit:cover;">
```

### Link Your Google Drive Portfolio
In `index.html`, find near the bottom:
```html
<a href="#" class="drive-btn">
```
Replace `#` with your Google Drive share URL.

### Update Your LinkedIn URL
In `index.html`, find:
```html
<a href="https://linkedin.com/in/pragatheeswaran-s-k" ...>
```
Update the URL to your actual LinkedIn profile link.

### Add More Portfolio Cards
Copy any card block in `index.html` and paste it inside the panel. Example for a poster:
```html
<div class="poster-card">
  <img src="assets/images/posters/your-new-image.jpg" style="width:100%;height:100%;object-fit:cover;">
  <div class="card-overlay">
    <div class="card-overlay-title">Your Project Name</div>
    <div class="card-overlay-cat">Client / Studio</div>
  </div>
</div>
```

---

## How to Go Live (Free Hosting)

### Option 1 — Netlify (easiest, recommended)
1. Go to https://netlify.com and sign up free
2. Drag and drop the entire `portfolio/` folder onto the Netlify dashboard
3. Your site goes live instantly with a link like `yourname.netlify.app`

### Option 2 — GitHub Pages
1. Create a free account at https://github.com
2. Create a new repository named `portfolio`
3. Upload all files maintaining the folder structure
4. Go to Settings → Pages → Source: main branch
5. Your site will be live at `yourusername.github.io/portfolio`

### Option 3 — Vercel
1. Go to https://vercel.com and sign up free
2. Import your GitHub repo or drag-drop the folder
3. Done — gets a `yourname.vercel.app` link

---

## Sections in the Site

| Section | What to Edit |
|---------|-------------|
| Hero | Name, tagline, typewriter words in `main.js` |
| About | Bio text, stats numbers in `index.html` |
| Skills | Tool chips, skill cards in `index.html` |
| Work | Replace placeholder cards with your images |
| Experience | Timeline roles and dates in `index.html` |
| Education | Degree, CGPA in `index.html` |
| Contact | Email, phone, LinkedIn links in `index.html` |
