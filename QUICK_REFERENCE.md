# AstroHome - Quick Reference Guide

## 🚀 Essential JavaScript Functions

### Form Validation Functions
```javascript
validateName(field)           // Validates name fields (3-20 chars, letters only)
validateNumber()              // Validates phone (10 digits)
validateEmail()               // Validates email format
validatePassword(field, err)  // Complex password validation
validateBothPassword()        // Confirms passwords match
updateElementStyle(field, action) // Visual feedback (green/red borders)
```

### Navigation & UI
```javascript
hamburger.onclick            // Toggle mobile menu
// Auto carousel (5 second intervals)
setInterval(() => { /* carousel logic */ }, 5000)
```

## 🎨 Key CSS Classes

### Navigation
- `.logo` - Main brand styling
- `.nav-bar` - Navigation container
- `.hamburger` - Mobile menu toggle
- `.dropdown-1` - Dropdown submenu
- `.active` - Active page indicator

### Forms
- `.valid` - Success validation state
- `.invalid` - Error validation state  
- `.drop-down` - Country code selector

### Content
- `.properties-container` - Property grid
- `.agents-container` - Agent grid
- `.house-img` - Property images
- `.agents-img` - Agent photos

## 📋 Form Field IDs

### Registration Form (sign-up.html)
```javascript
firstname     // First name input
surname       // Last name input
drop-down     // Country code select
dial          // Phone number input
email         // Email input
pass-word     // Password input
confirm       // Confirm password input
btn-sub       // Submit button
```

## 🔧 Quick Setup

1. **Include astro.js**: `<script src="./astro.js"></script>`
2. **Form structure**: Use IDs listed above
3. **Validation**: Automatic on `keyup` events
4. **Styling**: Green border = valid, Red border = invalid

## 📱 Responsive Breakpoints

- **Desktop**: Full horizontal navigation
- **Mobile**: Hamburger menu with `.active` toggles

## 🎯 Common Tasks

### Add New Validation
```javascript
function validateCustomField(field) {
    if (field.value.match(/your-regex/)) {
        return updateElementStyle(field, "valid");
    }
    return updateElementStyle(field, "invalid");
}
```

### Add Navigation Item
```html
<li><a href="new-page.html">New Page</a></li>
```

### Create Property Card
```html
<div>
    <img src="/img/house.jpg" class="house-img">
    <h3>$450,000</h3>
    <p>Description</p>
    <button class="properties-btn">Details</button>
</div>
```

### Change Brand Color
Replace `#ff523b` in CSS with your color:
```css
.logo span { color: #YOUR_COLOR; }
.nav-bar ul li a:hover { background: #YOUR_COLOR; }
```

## ⚡ Validation Rules Summary

| Field | Pattern | Example |
|-------|---------|---------|
| Name | `/^[A-Za-z]{3,20}$/` | "John" |
| Phone | `/^[0-9]{10}$/` | "1234567890" |
| Email | `/^[a-z][a-z0-9\.\_]{2,30}@[a-z]{5,20}\.[a-z]{2}/` | "user@domain.com" |
| Password | Min 8 chars + digit + upper + lower + special | "Pass123!" |

## 🔗 Page Navigation Structure

```
Index.html ──── Properties.html
    │                │
    ├── About.html   ├── Agents.html
    │                │
    ├── Contact.html ├── sign-up.html
    │                │
    └── sign-in.html └── (dropdown menu)
```

---
**💡 Tip**: For detailed documentation, see `API_DOCUMENTATION.md`