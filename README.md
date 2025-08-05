# 🏠 AstroHome - Real Estate Website

A modern, responsive real estate website built with HTML, CSS, and vanilla JavaScript featuring property listings, agent profiles, and comprehensive form validation.

## 📋 Documentation Overview

This project includes comprehensive documentation covering all public APIs, functions, and components:

### 📚 Documentation Files

| Document | Purpose | Contents |
|----------|---------|----------|
| **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** | Complete API Reference | Detailed documentation of all JavaScript functions, HTML components, CSS classes, and usage examples |
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | Quick Lookup Guide | Essential functions, CSS classes, and common tasks for rapid development |
| **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)** | Component Library | Reusable HTML components with implementation details and styling guides |

## 🚀 Features

- **📱 Responsive Design**: Mobile-first approach with hamburger navigation
- **✅ Real-time Validation**: Comprehensive form validation with visual feedback
- **🎠 Image Carousel**: Auto-rotating property showcase
- **🏘️ Property Listings**: Grid-based property display system
- **👥 Agent Profiles**: Real estate agent showcase
- **📧 Contact Forms**: Multiple contact and inquiry forms
- **🎨 Modern UI**: Clean, professional design with consistent styling

## 📁 Project Structure

```
AstroHome/
├── 📄 Index.html              # Homepage with carousel
├── 📄 Properties.html         # Property listings page
├── 📄 Agents.html            # Agent profiles page
├── 📄 About.html             # Company information
├── 📄 Contact.html           # Contact forms
├── 📄 sign-in.html           # User authentication
├── 📄 sign-up.html           # User registration
├── 🎨 style.css              # Main stylesheet (1252 lines)
├── ⚡ astro.js               # Core JavaScript functionality
├── 🖼️ img/                   # Image assets
│   ├── house-*.jpg          # Property images
│   ├── agent-*.jpg          # Agent photos
│   └── interior-*.jpg       # Interior shots
└── 📚 Documentation/
    ├── API_DOCUMENTATION.md  # Complete API reference
    ├── QUICK_REFERENCE.md    # Quick lookup guide
    └── COMPONENT_GUIDE.md    # Component library
```

## 🔧 Quick Start

### Prerequisites
- Modern web browser
- Web server (local or remote)
- Font Awesome account (for icons)

### Installation

1. **Clone the repository**
2. **Configure Font Awesome** - Update kit URLs in HTML files
3. **Set up images** - Add property and agent photos to `/img/`
4. **Configure forms** - Update form action URLs for submission
5. **Test functionality** - Verify navigation, validation, and responsiveness

## 💡 Key APIs & Functions

### 🔍 Form Validation
```javascript
validateName(field)           // Name validation (3-20 chars, letters)
validateEmail()               // Email format validation  
validatePassword(field, err)  // Complex password rules
validateNumber()              // Phone number validation (10 digits)
```

### 🧭 Navigation
```javascript
hamburger.onclick            // Mobile menu toggle
// Auto carousel (5-second intervals)
setInterval(() => { /* carousel logic */ }, 5000)
```

### 🎨 Key CSS Classes
```css
.logo                        /* Brand styling */
.nav-bar                     /* Navigation container */
.hamburger                   /* Mobile menu toggle */
.valid / .invalid            /* Validation states */
.properties-container        /* Property grid */
.agents-container           /* Agent grid */
```

## 📱 Responsive Design

- **Desktop**: Full horizontal navigation and grid layouts
- **Tablet**: Adjusted spacing and responsive grids  
- **Mobile**: Hamburger menu, stacked layouts, touch-friendly

## ✅ Form Validation Rules

| Field | Requirements | Pattern |
|-------|-------------|---------|
| **Name** | 3-20 characters, letters only | `/^[A-Za-z]{3,20}$/` |
| **Phone** | Exactly 10 digits | `/^[0-9]{10}$/` |
| **Email** | Standard email format | `/^[a-z][a-z0-9\.\_]{2,30}@[a-z]{5,20}\.[a-z]{2}/` |
| **Password** | 8+ chars, digit, upper, lower, special | Multiple patterns |

## 🎨 Design System

### Colors
- **Primary**: `#ff523b` (Brand red-orange)
- **Text**: `#000000` (Black)
- **Background**: `#fefefe` (Off-white)
- **Success**: `green` (Validation)
- **Error**: `red` (Validation)

### Typography
- **Font**: Sans-serif system fonts
- **Logo**: 40px bold
- **Navigation**: 20px
- **Body**: Browser default

## 🔗 Page Navigation

```
Index.html (Home)
├── Properties.html
├── Agents.html  
├── About.html
├── Contact.html
└── Authentication
    ├── sign-in.html
    └── sign-up.html
```

## 🛠️ Development Guide

### Adding New Features

1. **New Page**: Follow existing HTML structure, include navigation
2. **New Component**: Use consistent CSS naming conventions
3. **Form Fields**: Include validation feedback elements
4. **Styling**: Follow color scheme and spacing patterns

### Testing Checklist

- ✅ Cross-browser compatibility
- ✅ Mobile responsiveness  
- ✅ Form validation functionality
- ✅ Navigation flow
- ✅ Image loading and optimization
- ✅ Accessibility compliance

## 📖 Usage Examples

### Basic Form Implementation
```html
<script src="./astro.js"></script>
<form id="parent">
    <input type="text" id="firstname" placeholder="First Name">
    <input type="email" id="email" placeholder="Email">
    <button id="btn-sub" type="submit">Submit</button>
</form>
```

### Adding Property Card
```html
<div class="properties-container">
    <div>
        <img src="/img/house.jpg" class="house-img">
        <h3>$450,000</h3>
        <p>Beautiful Home</p>
        <button class="properties-btn">Details</button>
    </div>
</div>
```

## 🤝 Contributing

1. Follow existing code style and structure
2. Update documentation for any new features
3. Test across different browsers and devices
4. Ensure accessibility compliance

## 📞 Support

For detailed implementation help, refer to:
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - Complete function reference
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Fast lookup guide  
- **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)** - Component implementation

## 📄 License

This project documentation provides comprehensive coverage of all public APIs, functions, and components for the AstroHome real estate website.

---

**Built with ❤️ using HTML, CSS, and JavaScript**