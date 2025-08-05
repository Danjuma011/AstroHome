# AstroHome Website - API Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [JavaScript APIs](#javascript-apis)
4. [HTML Components](#html-components)
5. [CSS Classes](#css-classes)
6. [Form Validation](#form-validation)
7. [Navigation System](#navigation-system)
8. [Usage Examples](#usage-examples)
9. [Installation and Setup](#installation-and-setup)

## Project Overview

AstroHome is a responsive real estate website built with HTML, CSS, and vanilla JavaScript. It features property listings, agent profiles, user registration/login functionality, and comprehensive form validation.

### Key Features
- Responsive design with mobile hamburger menu
- Real-time form validation
- Image carousel/slider functionality
- Property and agent showcases
- Multi-page navigation system

## File Structure

```
/workspace/
├── Index.html          # Homepage with property carousel
├── Properties.html     # Property listings page
├── Agents.html         # Real estate agents page
├── About.html          # About page
├── Contact.html        # Contact form page
├── sign-in.html        # User sign-in page
├── sign-up.html        # User registration page
├── style.css           # Main stylesheet (1252 lines)
├── astro.js           # Main JavaScript file with validation
└── img/               # Image assets directory
    ├── house-*.jpg    # Property images
    ├── agent-*.jpg    # Agent profile images
    └── interior-*.jpg # Interior property images
```

## JavaScript APIs

### Core JavaScript File: `astro.js`

#### Global Variables

```javascript
// Form field references
const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const dropDown = document.getElementById("drop-down");
const dial = document.getElementById("dial");
const mail = document.getElementById("email");
const password = document.getElementById("pass-word");
const conpassword = document.getElementById("confirm");

// Error display elements
const passError = document.getElementById("passError");
const conPassError = document.getElementById("conPassError");

// Form submission
const submit = document.getElementById("btn-sub");
const form = document.getElementById("parent");

// Navigation
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

// Country codes for phone validation
const countryCodes = ["+234", "+233", "+44", "+1", "+77", "+414"];
```

#### Navigation Functions

##### `hamburger.onclick`
**Purpose**: Toggles mobile navigation menu
**Usage**:
```javascript
hamburger.onclick = function () {
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");
}
```

#### Carousel/Slider Functions

##### Auto Carousel
**Purpose**: Automatically cycles through property images every 5 seconds
**Implementation**:
```javascript
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
```

##### Manual Carousel Control
**Purpose**: Allows users to manually select carousel slides
**Usage**:
```javascript
document.querySelectorAll(".slc").forEach(ele => {
    ele.addEventListener("click", function (e) {
        e.stopPropagation();
        let id = this.id;
        counter = id.slice(5);
    });
});
```

#### Form Validation Functions

##### `validateName(field)`
**Purpose**: Validates name fields (firstname, surname)
**Parameters**: 
- `field` (HTMLElement): The input field to validate
**Returns**: Boolean - true if valid, false if invalid
**Validation Rules**: 
- 3-20 characters
- Only letters (A-Z, a-z)
**Usage**:
```javascript
// Example usage
if (validateName(firstname)) {
    console.log("First name is valid");
}
```

##### `validateNumber()`
**Purpose**: Validates phone number input
**Returns**: Boolean - true if valid, false if invalid
**Validation Rules**: 
- Exactly 10 digits
- Numbers only (0-9)
**Usage**:
```javascript
// Automatically called on keyup event
dial.addEventListener("keyup", (e) => {
    validateNumber();
});
```

##### `validateEmail()`
**Purpose**: Validates email address format
**Returns**: Boolean - true if valid, false if invalid
**Validation Rules**: 
- Starts with lowercase letter
- Contains alphanumeric, dot, underscore (2-30 chars)
- @ symbol
- Domain (5-20 lowercase letters)
- Top-level domain (2+ letters)
**Regex Pattern**: `/^[a-z][a-z0-9\.\_]{2,30}@[a-z]{5,20}\.[a-z]{2}/`
**Usage**:
```javascript
if (validateEmail()) {
    console.log("Email is valid");
}
```

##### `validatePassword(field, errorfield)`
**Purpose**: Validates password strength with multiple criteria
**Parameters**: 
- `field` (HTMLElement): Password input field
- `errorfield` (HTMLElement): Error display element
**Returns**: Boolean - true if valid, false if invalid
**Validation Rules**: 
- Minimum 8 characters
- At least one digit (0-9)
- At least one uppercase letter (A-Z)
- At least one lowercase letter (a-z)
- At least one special character (!-/:-@[-`{-~)
**Usage**:
```javascript
// Example validation
if (validatePassword(password, passError)) {
    console.log("Password meets all requirements");
}
```

##### `validateBothPassword()`
**Purpose**: Ensures password and confirm password fields match
**Returns**: Boolean - true if passwords match, false otherwise
**Usage**:
```javascript
if (validateBothPassword()) {
    console.log("Passwords match");
}
```

##### `updateElementStyle(field, action)`
**Purpose**: Updates visual styling for form field validation
**Parameters**: 
- `field` (HTMLElement): Input field to style
- `action` (String): "valid" or "invalid"
**Returns**: Boolean - true for valid, false for invalid
**Visual Changes**:
- Valid: Green border (3px)
- Invalid: Red border (3px)
**Usage**:
```javascript
updateElementStyle(emailField, "valid");   // Green border
updateElementStyle(nameField, "invalid");  // Red border
```

##### `displayPasswordError(element, msg)`
**Purpose**: Shows password validation error messages
**Parameters**: 
- `element` (HTMLElement): Error display element
- `msg` (String): Error message to display
**Behavior**: 
- Shows error for 3 seconds
- Auto-hides after timeout
**Usage**:
```javascript
displayPasswordError(passError, "Password must contain at least one digit");
```

#### Form Submission

##### Submit Handler
**Purpose**: Validates entire form before submission
**Validation Checks**: 
- First name validation
- Surname validation
- Phone number validation
- Email validation
- Password validation (both fields)
- Password matching validation
**Usage**:
```javascript
submit.onclick = (e) => {
    e.preventDefault();
    
    if (
        validateName(firstname) &&
        validateName(surname) &&
        validateNumber(dial) &&
        validateEmail(mail) &&
        validatePassword(password) &&
        validatePassword(conpassword) &&
        validateBothPassword()
    ) {
        form.submit(); // Submits to https://astrohome.netlify.app
    } else {
        alert("form not validated");
    }
}
```

## HTML Components

### Navigation Component

#### Header Structure
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

### Form Components

#### Registration Form (sign-up.html)
```html
<form id="parent" method="post" action="https://astrohome.netlify.app">
    <h1>Sign-up (Agent)</h1>
    
    <!-- First Name Field -->
    <label for="first-name">
        <input type="text" name="name" placeholder="firstname" id="firstname">
        <p id="firstValid" class="valid">valid</p>
        <p id="firstError" class="invalid">invalid</p>
    </label>
    
    <!-- Surname Field -->
    <label for="surname">
        <input type="text" placeholder="surname" id="surname">
        <p id="lastValid" class="valid">valid</p>
        <p id="lastError" class="invalid">invalid</p>
    </label>
    
    <!-- Country Code Dropdown -->
    <label for="ccode">
        Country
        <select name="ccode" id="drop-down" class="drop-down">
            <!-- Options populated by JavaScript -->
        </select>
    </label>

    <!-- Phone Number Field -->
    <label for="dial">
        <input type="tel" placeholder="telephone number" id="dial">
        <p id="numValid" class="valid">valid</p>
        <p id="numError" class="invalid">invalid</p>
    </label>
    
    <!-- Email Field -->
    <label for="email">
        <input type="email" placeholder="email" id="email">
        <p id="emailValid" class="valid">valid</p>
        <p id="emailError" class="invalid">invalid</p>
    </label>
    
    <!-- Password Field -->
    <label for="password">
        <input type="password" name="password" placeholder="password" id="pass-word">
        <p id="str" class="str"></p>
        <p id="passValid" class="valid">valid</p>
        <p id="passError" class="invalid">invalid</p>
    </label>
    
    <!-- Confirm Password Field -->
    <label for="confirm-password">
        <input type="password" placeholder="confirm password" id="confirm">
        <p id="conValid" class="valid">valid</p>
        <p id="conPassError" class="invalid">invalid</p>
    </label>

    <button id="btn-sub" type="submit">Submit</button>
</form>
```

### Property Display Components

#### Properties Grid (Properties.html)
```html
<div class="properties-big-container">
    <div class="properties-container">
        <div>
            <img src="/img/house 2.jpg" alt="" class="house-img">
            <h3>$450,000</h3>
            <p>Beautiful Family Home</p>
            <a href=""><button class="properties-btn">Details</button></a>
        </div>
        <!-- Additional property cards... -->
    </div>
</div>
```

#### Agents Grid (Agents.html)
```html
<div class="agents-container">
    <div class="agents-small-container">
        <div class="agent-frames">
            <img src="/img/agent-7.jpg" alt="" class="agents-img" id="agent-7">
            <h3>John Smith</h3>
            <p>Senior Real Estate Agent</p>
            <a href=""><button class="agent-btn">Details</button></a>
        </div>
        <!-- Additional agent cards... -->
    </div>
</div>
```

### Contact Form Component
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

## CSS Classes

### Layout Classes

#### `.logo`
**Purpose**: Main brand logo styling
**Properties**:
- Font size: 40px
- Font weight: bold
- Color: black
**Usage**: Applied to the main AstroHome logo

#### `.logo span`
**Purpose**: Accent color for "HOME" in logo
**Properties**:
- Color: #ff523b (red-orange)

### Navigation Classes

#### `.nav-bar`
**Purpose**: Main navigation container
**Responsive**: Transforms into mobile menu on smaller screens

#### `.nav-bar ul li a`
**Purpose**: Navigation link styling
**Properties**:
- Font size: 20px
- Padding: 10px 25px
- Border radius: 50px
- Transition: 0.2s

#### `.nav-bar ul li a:hover`
**Purpose**: Hover effect for navigation links
**Properties**:
- Color: white
- Background: #ff523b

#### `.nav-bar ul li a.active`
**Purpose**: Active page indicator
**Properties**:
- Color: #fefefe
- Background: #ff523b

#### `.dropdown-1`
**Purpose**: Dropdown menu for Sign-in submenu
**Behavior**: 
- Hidden by default
- Shows on parent hover
- Positioned absolutely

#### `.hamburger`
**Purpose**: Mobile menu toggle button
**Responsive**: Only visible on mobile devices

#### `.bar`
**Purpose**: Hamburger menu lines
**Properties**:
- Width: 25px
- Height: 3px
- Background: #000
- Transition animations

### Form Classes

#### `.valid`
**Purpose**: Success validation indicator
**Usage**: Shows when form field passes validation

#### `.invalid`
**Purpose**: Error validation indicator
**Usage**: Shows when form field fails validation

#### `.drop-down`
**Purpose**: Country code selection dropdown
**Usage**: Applied to country code select element

### Content Display Classes

#### `.properties-container`
**Purpose**: Grid container for property listings
**Layout**: Responsive grid system

#### `.house-img`
**Purpose**: Property image styling
**Usage**: Applied to property listing images

#### `.properties-btn`
**Purpose**: Property detail buttons
**Styling**: Consistent button design

#### `.agents-container`
**Purpose**: Grid container for agent profiles
**Layout**: Responsive grid system

#### `.agents-img`
**Purpose**: Agent profile image styling
**Usage**: Applied to agent profile photos

#### `.agent-btn`
**Purpose**: Agent detail buttons
**Styling**: Consistent button design

### Footer Classes

#### `.footer-container`
**Purpose**: Main footer container
**Layout**: Multi-column footer layout

#### `.footer-about`
**Purpose**: About section in footer
**Content**: Company information

#### `.footer-quick-links`
**Purpose**: Quick navigation links in footer
**Content**: Important page links

#### `.footer-subscribe`
**Purpose**: Newsletter subscription section
**Content**: Email subscription form

#### `.follow-us`
**Purpose**: Social media section header
**Usage**: Social media links container

## Form Validation

### Validation Rules Summary

| Field | Rules | Error Messages |
|-------|-------|----------------|
| **First Name** | 3-20 characters, letters only | Visual border color change |
| **Surname** | 3-20 characters, letters only | Visual border color change |
| **Phone** | Exactly 10 digits | Visual border color change |
| **Email** | Valid email format | Visual border color change |
| **Password** | Min 8 chars, 1 digit, 1 uppercase, 1 lowercase, 1 special char | Specific error messages |
| **Confirm Password** | Must match password | "password dont match" |

### Real-time Validation

All form fields validate on `keyup` events:
```javascript
// Example implementation
firstname.addEventListener("keyup", function (e) {
    validateName(firstname);
});
```

### Visual Feedback System

- **Valid Fields**: Green border (3px)
- **Invalid Fields**: Red border (3px)
- **Error Messages**: Displayed for 3 seconds, then auto-hide

## Navigation System

### Page Structure
- **Index.html**: Homepage with property carousel
- **Properties.html**: Property listings
- **Agents.html**: Real estate agent profiles
- **About.html**: Company information
- **Contact.html**: Contact form and information
- **sign-in.html**: User login
- **sign-up.html**: User registration

### Responsive Navigation
- **Desktop**: Horizontal navigation bar
- **Mobile**: Hamburger menu with slide-out navigation

### Active Page Indication
Current page is highlighted with `.active` class showing red background.

## Usage Examples

### Basic Form Implementation

```html
<!-- Include the main JavaScript file -->
<script src="./astro.js"></script>

<!-- Form with validation -->
<form id="parent">
    <input type="text" id="firstname" placeholder="First Name">
    <input type="email" id="email" placeholder="Email">
    <button id="btn-sub" type="submit">Submit</button>
</form>
```

### Custom Validation Implementation

```javascript
// Custom validation for additional fields
function validateCustomField(field, pattern) {
    if (field.value.match(pattern)) {
        return updateElementStyle(field, "valid");
    }
    return updateElementStyle(field, "invalid");
}

// Usage
const customField = document.getElementById("custom-field");
customField.addEventListener("keyup", () => {
    validateCustomField(customField, /^[A-Za-z0-9]+$/);
});
```

### Adding New Navigation Items

```html
<!-- Add to existing nav-bar ul -->
<li>
    <a href="new-page.html">New Page</a>
</li>
```

### Creating Property Cards

```html
<div class="properties-container">
    <div>
        <img src="/img/new-house.jpg" alt="" class="house-img">
        <h3>$500,000</h3>
        <p>Modern Apartment</p>
        <a href=""><button class="properties-btn">Details</button></a>
    </div>
</div>
```

## Installation and Setup

### Prerequisites
- Web server (local or remote)
- Modern web browser
- Font Awesome account (for icons)

### Installation Steps

1. **Clone/Download the project files**
2. **Set up file structure**:
   ```
   /your-website/
   ├── Index.html
   ├── Properties.html
   ├── Agents.html
   ├── About.html
   ├── Contact.html
   ├── sign-in.html
   ├── sign-up.html
   ├── style.css
   ├── astro.js
   └── img/
   ```

3. **Configure Font Awesome**:
   - Update the Font Awesome kit URL in each HTML file:
   ```html
   <script src="https://kit.fontawesome.com/YOUR_KIT_ID.js"></script>
   ```

4. **Update form action URLs**:
   - Modify form action in sign-up.html:
   ```html
   <form id="parent" method="post" action="YOUR_FORM_HANDLER_URL">
   ```

5. **Add your images**:
   - Place property images in `/img/` directory
   - Follow naming convention: `house-1.jpg`, `agent-1.jpg`, etc.

6. **Test the website**:
   - Open `Index.html` in a web browser
   - Test all navigation links
   - Verify form validation functionality
   - Test responsive design on different screen sizes

### Customization

#### Changing Brand Colors
Update the primary color (#ff523b) in `style.css`:
```css
.logo span,
.nav-bar ul li a:hover,
.nav-bar ul li a.active {
    background: #YOUR_COLOR; /* Replace #ff523b */
}
```

#### Adding New Validation Rules
Extend the validation functions in `astro.js`:
```javascript
function validateCustomField(value) {
    // Add your custom validation logic
    return value.length > 0;
}
```

#### Modifying Carousel Timing
Change the carousel interval in `astro.js`:
```javascript
setInterval(function () {
    // Carousel logic
}, 3000); // Change from 5000ms to 3000ms
```

---

**Note**: This documentation covers all public APIs, functions, and components in the AstroHome website. For additional customization or advanced features, refer to the individual source files and modify according to your requirements.