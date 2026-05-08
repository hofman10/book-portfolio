# 📖 Interactive Portfolio Book

A creative and engaging portfolio website featuring an immersive 3D book interface with smooth page-turning animations. This project demonstrates advanced CSS3 transforms and vanilla JavaScript to create a memorable user experience.

![Portfolio Book Preview](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- **3D Book Animation** - Realistic page-turning effects using CSS3 3D transforms
- **Interactive Navigation** - Manual page controls and automated page-flip sequences
- **Smooth Transitions** - Custom cubic-bezier easing for natural motion
- **Opening Animation** - Dynamic entrance effect on page load
- **Six Content Pages**:
  - 📝 Profile introduction with social links
  - 💼 Work experience timeline
  - 🎓 Education history
  - 🛠️ Services offered
  - 💻 Technical skills showcase
  - 🎨 Latest project spotlight
  - 📧 Contact form

## 🚀 Demo

Open `https://nikola-bijelic-example.netlify.app/` in a modern browser to experience the interactive portfolio book.

### Navigation

- **Next/Previous Arrows** - Navigate through pages manually
- **Contact Me Button** - Auto-flip through all pages sequentially
- **Back to Profile Button** - Return to the first page with reverse animation

## 🛠️ Technologies

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with:
  - CSS Custom Properties (variables)
  - 3D Transforms & Perspective
  - Flexbox layouts
  - Keyframe animations
- **Vanilla JavaScript** - Pure JS for:
  - Event handling
  - DOM manipulation
  - Sequential animations
  - Dynamic z-index management
- **Font Awesome 7.0.1** - Icons for social media and UI elements
- **Google Fonts** - Poppins typeface

## 🎨 Key Implementation Details

### Page Turning Mechanism

The project uses CSS 3D transforms with `rotateY()` to create realistic page flips:

- Each page is positioned absolutely with `transform-origin` set to the binding edge
- JavaScript toggles CSS classes to trigger transitions
- Z-index values are dynamically adjusted to maintain proper stacking order

### Animation Timing

- **Opening sequence**: 2.1s initial delay → cover flip → profile reveal → page setup
- **Manual navigation**: 1s cubic-bezier transition per page
- **Auto-flip**: 300ms sequential delay between pages
- **Reverse animation**: 200ms staggered timing with 100ms offset

## 🎯 Customization

### Color Scheme

Edit CSS custom properties in `:root`:

```css
--bg-color: #081b29;
--main-color: #00abf0;
--text-color: #333;
```

### Content

Update the HTML sections for each page:

- Profile (page-left)
- Work Experience & Education (turn-1)
- Services & Skills (turn-2)
- Latest Project & Contact (turn-3)

### Timing

Adjust animation speeds in `script.js`:

- `setTimeout()` delays for opening animation
- Sequential flip intervals in Contact Me handler
- Page transition duration in CSS

## 📱 Browser Compatibility

Requires modern browser support for:

- CSS 3D Transforms
- CSS Custom Properties
- ES6 JavaScript features (arrow functions, forEach, template literals)

Tested and optimized for Chrome, Firefox, Safari, and Edge.
