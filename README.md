# Portfolio Website - Kori D. Gichuki

A modern, responsive portfolio website showcasing cloud engineering expertise and professional services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Service Modals**: Showcase projects and expertise (ready for content)
- **Medium Blog Integration**: Automatically fetches and displays latest articles
- **Newsletter Subscription**: Google Sheets integration with CAPTCHA protection
- **Privacy Policy Modal**: GDPR-compliant privacy disclosure
- **Smooth Animations**: CSS animations with staggered loading effects
- **Security Hardened**: XSS protection, input validation, and security headers

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactive functionality
- **Font Awesome**: Icon library with SRI integrity
- **Google Apps Script**: Backend for newsletter collection
- **RSS2JSON API**: Medium article integration

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── config.js               # API configuration
├── websitecss/
│   └── styles.css          # External stylesheet
├── websiteimages/          # Image assets
│   ├── profile.jpeg        # Profile picture & favicon
│   └── *.pdf              # CV download
├── websitejs/
│   └── script.js           # External JavaScript
├── google-apps-script.js   # Google Sheets backend code
├── buildspec.yml          # AWS CodeBuild configuration
└── README.md
```

## 🔧 Setup & Configuration

### 1. Basic Setup
```bash
git clone <repository-url>
cd portfolio-website
```

### 2. Configure APIs
Edit `config.js` with your URLs:
```javascript
window.CONFIG = {
    GOOGLE_SCRIPT_URL: 'your-google-apps-script-url',
    RSS_API_URL: 'https://api.rss2json.com/v1/api.json?rss_url=your-medium-feed',
    MEDIUM_PROFILE_URL: 'your-medium-profile-url'
};
```

### 3. Google Sheets Integration
1. Create a Google Sheet for newsletter subscribers
2. Deploy the `google-apps-script.js` code as a web app
3. Update `GOOGLE_SCRIPT_URL` in `config.js`

### 4. Customize Content
- Replace `websiteimages/profile.jpeg` with your photo
- Update personal information in `index.html`
- Add your CV to `websiteimages/` folder

## 🚀 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)
```bash
# Simply push to your repository
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### AWS S3 + CloudFront
Use the included `buildspec.yml` for AWS CodeBuild deployment.

## 🔒 Security Features

- **XSS Protection**: HTML escaping for dynamic content
- **Input Validation**: Email validation and sanitization
- **Rate Limiting**: 1-minute cooldown between submissions
- **CAPTCHA**: Math problems after 3 submissions
- **Security Headers**: CSP, HSTS, X-Frame-Options
- **Safe External Links**: `rel="noopener noreferrer"`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (touch-scrollable articles)
- **Tablet**: 768px - 992px
- **Desktop**: > 992px (scroll arrows for articles)

## ✨ Key Features Explained

### Newsletter Subscription
- Collects emails to Google Sheets
- CAPTCHA protection after 3 attempts
- Privacy policy compliance
- Success/error feedback

### Medium Integration
- Fetches latest 5 articles via RSS
- Fallback content if API fails
- Touch-scrollable on mobile
- Desktop scroll arrows

### Service Modals
- Currently commented out for content updates
- Uncomment `onclick` attributes when ready
- Carousel with project showcases

## 🔧 Customization

### Enable Service Modals
Uncomment the onclick attributes in service cards:
```html
<!-- Change from: -->
<div class="service-card fade-in"> <!-- onclick="openServiceModal('cloud-engineering')" -->

<!-- To: -->
<div class="service-card fade-in" onclick="openServiceModal('cloud-engineering')">
```

### Update Contact Information
- Email links use `mailto:korigichuki@gmail.com`
- Social media links in the Connect section
- Privacy policy contact information

## 📊 Performance

- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized images and code
- **Error Handling**: Graceful degradation
- **Cross-Browser**: Compatible with modern browsers

## 📄 License

© 2025 Portfolio. All rights reserved.

## 📞 Contact

- **Email**: korigichuki@gmail.com
- **LinkedIn**: [kori-gichuki](https://linkedin.com/in/kori-gichuki/)
- **Medium**: [@korigichuki](https://medium.com/@korigichuki/)
- **Upwork**: [Hire me](https://www.upwork.com/freelancers/~0147703b7f9aa70d31)

---

**Built with ❤️ for showcasing cloud engineering expertise**