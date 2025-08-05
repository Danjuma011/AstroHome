# AstroHome Components Guide

## 🧩 Reusable HTML Components

### 1. Navigation Header Component

**Location**: Used in all HTML files  
**Purpose**: Consistent site navigation with responsive design

```html
<header>
    <a href="/Index.html">
        <li class="logo">ASTRO<span>HOME</span></li>
    </a>
    
    <div class="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>

    <nav class="nav-bar">
        <ul>
            <li><a href="Index.html" class="active">Home</a></li>
            <li><a href="Properties.html">Properties</a></li>
            <li>
                <a href="Sign-in.html">Sign-in +</a>
                <div class="dropdown-1">
                    <ul>
                        <li><a href="sign-up.html">Sign-up</a></li>
                        <li><a href="Agents.html">Agents</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="About.html">About</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

**Key Features**:
- Responsive hamburger menu for mobile
- Dropdown submenu for authentication
- Active page highlighting
- Brand logo with styling

**Usage Notes**:
- Add `class="active"` to current page link
- Hamburger functionality requires `astro.js`

---

### 2. Property Card Component

**Location**: `Properties.html`  
**Purpose**: Display individual property listings

```html
<div class="property-card">
    <img src="/img/house-2.jpg" alt="Property Image" class="house-img">
    <h3>$450,000</h3>
    <p>Beautiful Family Home</p>
    <a href="property-details.html">
        <button class="properties-btn">Details</button>
    </a>
</div>
```

**Props/Attributes**:
- `src`: Property image path
- `alt`: Image description
- Price in `<h3>`
- Description in `<p>`
- Detail link in button

**CSS Classes**:
- `.house-img`: Property image styling
- `.properties-btn`: Consistent button design

---

### 3. Agent Profile Component

**Location**: `Agents.html`  
**Purpose**: Display real estate agent information

```html
<div class="agent-frames">
    <img src="/img/agent-7.jpg" alt="Agent Photo" class="agents-img" id="agent-7">
    <h3>John Smith</h3>
    <p>Senior Real Estate Agent</p>
    <a href="agent-profile.html">
        <button class="agent-btn">Details</button>
    </a>
</div>
```

**Props/Attributes**:
- `src`: Agent photo path
- `id`: Unique agent identifier
- Agent name in `<h3>`
- Title/role in `<p>`
- Profile link in button

**CSS Classes**:
- `.agents-img`: Agent photo styling
- `.agent-btn`: Consistent button design
- `.agent-frames`: Container styling

---

### 4. Validation Input Component

**Location**: `sign-up.html`, forms  
**Purpose**: Input field with real-time validation feedback

```html
<label for="field-name">
    <input type="text" placeholder="Field Label" id="field-id">
    <p id="field-valid" class="valid">valid</p>
    <p id="field-error" class="invalid">invalid</p>
</label>
```

**Props/Attributes**:
- `type`: Input type (text, email, tel, password)
- `placeholder`: Field hint text
- `id`: Unique field identifier
- Validation feedback elements

**Validation States**:
- `.valid`: Green border, success message
- `.invalid`: Red border, error message

**JavaScript Integration**:
- Requires corresponding validation function
- Auto-validates on `keyup` events

---

### 5. Country Code Dropdown Component

**Location**: `sign-up.html`  
**Purpose**: International phone number prefix selection

```html
<label for="ccode">
    Country
    <select name="ccode" id="drop-down" class="drop-down">
        <!-- Options populated by JavaScript -->
    </select>
</label>
```

**Features**:
- Auto-populated via JavaScript
- Predefined country codes: `["+234", "+233", "+44", "+1", "+77", "+414"]`
- Integrated with phone validation

**JavaScript Population**:
```javascript
for (let index = 0; index < countryCodes.length; index++) {
    dropDown.innerHTML += `<option id=${index}>${countryCodes[index]}</option>`;
}
```

---

### 6. Contact Form Component

**Location**: `Contact.html`  
**Purpose**: User inquiry and message submission

```html
<div class="contact-container">
    <div class="form">
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        <input type="text" placeholder="Subject">
        <textarea class="message" placeholder="Write your message here"></textarea>
        <button class="btn">Send Message</button>
    </div>
</div>
```

**Features**:
- Multi-field contact form
- Textarea for longer messages
- Consistent styling with other forms

**CSS Classes**:
- `.contact-container`: Form wrapper
- `.form`: Form styling container
- `.message`: Textarea styling
- `.btn`: Submit button styling

---

### 7. Footer Component

**Location**: All pages  
**Purpose**: Site-wide footer with links and subscription

```html
<div class="footer-container">
    <div class="footer-about">
        <h3>AstroHome</h3>
        <p>Your trusted real estate partner</p>
    </div>
    
    <div class="footer-quick-links">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="Index.html">Home</a></li>
            <li><a href="Properties.html">Properties</a></li>
            <li><a href="Agents.html">Agents</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>
    </div>
    
    <div class="footer-subscribe">
        <h3>Newsletter</h3>
        <input type="email" placeholder="Your email">
        <button class="right-rounded">Send</button>
    </div>
    
    <h3 class="follow-us">Follow Us</h3>
</div>
```

**Sections**:
- Company information
- Quick navigation links
- Newsletter subscription
- Social media section

---

## 🎨 Component Styling Guide

### Color Scheme
- **Primary Brand**: `#ff523b` (Red-orange)
- **Text**: `#000000` (Black)
- **Background**: `#fefefe` (Off-white)
- **Success**: `green` (Validation)
- **Error**: `red` (Validation)

### Typography
- **Font Family**: `sans-serif`
- **Logo Size**: `40px`
- **Navigation**: `20px`
- **Body Text**: Default browser size

### Spacing
- **Navigation Padding**: `10px 25px`
- **Border Radius**: `50px` (buttons, nav links)
- **Header Padding**: `0px 100px`

---

## 📱 Responsive Design

### Breakpoints
Components automatically adapt using CSS media queries:

- **Desktop**: Full horizontal layout
- **Tablet**: Adjusted padding and spacing
- **Mobile**: Hamburger menu, stacked layout

### Mobile Adaptations
1. **Navigation**: Hamburger menu replaces horizontal nav
2. **Grid Layouts**: Stack vertically on mobile
3. **Images**: Responsive scaling
4. **Forms**: Full-width inputs

---

## 🔧 Implementation Tips

### Adding New Components

1. **Follow naming conventions**:
   ```css
   .component-name        /* Main container */
   .component-name-item   /* Child elements */
   .component-name-btn    /* Component buttons */
   ```

2. **Include validation for forms**:
   ```html
   <input id="unique-id" type="text">
   <p class="valid">valid</p>
   <p class="invalid">invalid</p>
   ```

3. **Maintain consistent styling**:
   - Use existing color variables
   - Follow spacing patterns
   - Include hover states

### Testing Components

1. **Cross-browser compatibility**
2. **Mobile responsiveness**
3. **Form validation functionality**
4. **Navigation flow**
5. **Image loading**

---

## 🚀 Best Practices

### Performance
- **Optimize images**: Use appropriate formats and sizes
- **Minimize CSS**: Group related styles
- **JavaScript efficiency**: Use event delegation where possible

### Accessibility
- **Alt text**: Always include for images
- **Form labels**: Proper label associations
- **Keyboard navigation**: Ensure tab order
- **Color contrast**: Meet WCAG guidelines

### Maintainability
- **Consistent naming**: Use descriptive class names
- **Component isolation**: Avoid deep nesting
- **Documentation**: Comment complex functionality
- **Version control**: Track component changes

---

**📚 Related Documentation**:
- `API_DOCUMENTATION.md` - Complete API reference
- `QUICK_REFERENCE.md` - Quick function lookup