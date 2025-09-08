# Minimal ReFi Theme for ReFi Barcelona 🌱

A sophisticated, minimal theme for the ReFi Barcelona Quartz site, inspired by the Minimal Theme by @kepano and converted for Quartz with enhanced ReFi branding.

## 🎨 Theme Features

### **Color Scheme**
- **Primary**: Navy Blue (`#002147`) - Professional and trustworthy
- **Secondary**: Light Blue (`#4C9AFF`) - Interactive elements and links
- **Accent**: Darker Blue (`#1A73E8`) - Hover states and emphasis
- **Text**: White and light gray for excellent readability
- **Backgrounds**: Layered navy blue for depth and sophistication

### **Typography**
- **Headers**: Bodoni Moda (serif) with italic styling for elegance
- **Body**: Source Sans Pro for excellent readability
- **Code**: IBM Plex Mono for technical content
- **Hierarchy**: Clear visual distinction between heading levels

### **Design Principles**
- **Minimalism**: Clean, uncluttered interface
- **Accessibility**: High contrast ratios and clear visual hierarchy
- **Responsiveness**: Mobile-first design with tablet and desktop optimizations
- **Consistency**: Unified color palette and spacing system

## 🚀 Installation & Usage

### **Option 1: Use Theme Switcher (Recommended)**
1. The theme switcher is automatically included when you build the site
2. Click the 🎨 button in the top-right corner
3. Select "Minimal ReFi" from the theme options
4. Click "Apply Theme"

### **Option 2: Manual Theme Application**
1. Replace the content of `quartz/styles/custom.scss` with:
   ```scss
   @use "./base.scss";
   @import "minimal-refi.scss";
   ```

2. Or use the dedicated custom file:
   ```scss
   @use "./base.scss";
   @import "custom-minimal.scss";
   ```

### **Option 3: CSS Class Application**
Add the `theme-minimal-refi` class to the `<body>` element:
```html
<body class="theme-minimal-refi">
```

## 📁 File Structure

```
quartz/styles/
├── minimal-refi.scss          # Main theme styles
├── custom-minimal.scss        # Enhanced customizations
├── theme-switcher.scss       # Theme switching functionality
└── README-Minimal-Refi-Theme.md  # This documentation
```

## 🎯 Customization Options

### **Color Variables**
The theme uses CSS custom properties for easy customization:

```scss
:root {
  --navy-primary: #002147;      // Main background
  --navy-secondary: #001a3a;    // Secondary background
  --navy-tertiary: #00152e;     // Tertiary background
  --accent-primary: #4C9AFF;    // Primary accent
  --accent-secondary: #1A73E8;  // Secondary accent
  --text-bright: #ffffff;       // Bright text
  --text-normal: #E1E1E6;       // Normal text
  --text-muted: #a8a8b3;        // Muted text
}
```

### **Typography Customization**
```scss
:root {
  --font-ui-smaller: 11px;
  --normal-weight: 400;
  --bold-weight: 600;
  --line-height: 1.6;
}
```

### **Layout Customization**
```scss
:root {
  --line-width: 40rem;
  --max-width: 88%;
  --border-width: 1px;
  --image-radius: 4px;
}
```

## 🔧 Advanced Customization

### **Component-Specific Styling**
The theme includes enhanced styling for:

- **Headers**: Elegant typography with accent borders
- **Links**: Smooth transitions and hover effects
- **Code Blocks**: Enhanced readability with shadows
- **Tables**: Professional appearance with hover effects
- **Navigation**: Smooth interactions and visual feedback
- **Forms**: Consistent styling and focus states

### **Responsive Design**
```scss
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.25rem; }
}
```

### **Print Styles**
```scss
@media print {
  :root {
    --bg1: white;
    --text-normal: black;
    --accent-primary: #002147;
  }
}
```

## 🌟 Theme Switcher Features

### **Available Themes**
1. **Navy Blue ReFi** (Default) - Professional navy aesthetic
2. **Green ReFi** - Earth-inspired green theme
3. **Minimal ReFi** - This theme, with enhanced minimalism

### **JavaScript API**
```javascript
// Get current theme
const currentTheme = window.reFiThemeSwitcher.getCurrentTheme();

// Set theme programmatically
window.reFiThemeSwitcher.setTheme('minimal-refi');

// Listen for theme changes
document.addEventListener('themeChanged', (e) => {
  console.log('Theme changed to:', e.detail.theme);
});
```

## 🎨 Design System

### **Spacing Scale**
- `--mt-1` to `--mt-4`: Margin top utilities
- `--mb-1` to `--mb-4`: Margin bottom utilities
- `--p-1` to `--p-4`: Padding utilities

### **Color Palette**
- **Primary Colors**: Navy blues for backgrounds
- **Accent Colors**: Blues for interactive elements
- **Semantic Colors**: Success, warning, error states
- **UI Colors**: Subtle overlays for depth

### **Component States**
- **Default**: Base styling
- **Hover**: Enhanced interactions
- **Active**: Pressed states
- **Focus**: Accessibility focus indicators

## 🔍 Browser Support

- **Modern Browsers**: Full support (Chrome 90+, Firefox 88+, Safari 14+)
- **CSS Custom Properties**: Required for theme functionality
- **CSS Grid**: Used for responsive layouts
- **CSS Transitions**: Enhanced user experience

## 📱 Mobile Optimization

- **Touch-Friendly**: Adequate touch targets (44px minimum)
- **Responsive Typography**: Scalable font sizes
- **Optimized Navigation**: Mobile-first navigation patterns
- **Performance**: Optimized animations and transitions

## ♿ Accessibility Features

- **High Contrast**: Excellent contrast ratios
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Reduced Motion**: Respects user motion preferences
- **Screen Reader**: Semantic HTML and ARIA support

## 🚀 Performance Considerations

- **CSS Variables**: Efficient theme switching
- **Minimal Animations**: Subtle, performant transitions
- **Optimized Selectors**: Efficient CSS selectors
- **Lazy Loading**: Theme assets loaded on demand

## 🔧 Troubleshooting

### **Theme Not Loading**
1. Check that `minimal-refi.scss` is properly imported
2. Verify CSS custom properties are supported
3. Check browser console for errors

### **Styles Not Applying**
1. Ensure theme class is applied to `<body>`
2. Check CSS specificity and cascade
3. Verify file paths and imports

### **Theme Switcher Issues**
1. Check JavaScript console for errors
2. Verify `theme-switcher.js` is loaded
3. Check localStorage permissions

## 🤝 Contributing

To contribute to the Minimal ReFi Theme:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** across different browsers
5. **Submit** a pull request

### **Development Guidelines**
- Follow existing CSS architecture
- Use CSS custom properties for theming
- Maintain accessibility standards
- Test responsive behavior
- Document new features

## 📄 License

This theme is based on the Minimal Theme by @kepano and is licensed under the MIT License.

## 🙏 Acknowledgments

- **@kepano** for the original Minimal Theme inspiration
- **ReFi Barcelona** community for feedback and testing
- **Quartz** team for the excellent framework

## 📞 Support

For support with the Minimal ReFi Theme:

1. Check this documentation first
2. Review the CSS files for examples
3. Open an issue on the repository
4. Contact the ReFi Barcelona team

---

**Enjoy the Minimal ReFi Theme! 🌱✨**
