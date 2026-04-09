/**
 * ReFi Barcelona Theme Switcher
 * Handles theme switching between different ReFi themes
 */

class ReFiThemeSwitcher {
  constructor() {
    this.currentTheme = 'default';
    this.themes = ['default', 'green-refi', 'minimal-refi'];
    this.init();
  }

  init() {
    this.createThemeSwitcher();
    this.loadSavedTheme();
    this.bindEvents();
  }

  createThemeSwitcher() {
    // Create theme switcher toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-switcher-toggle';
    toggleBtn.setAttribute('aria-label', 'Switch Theme');
    document.body.appendChild(toggleBtn);

    // Create theme switcher panel
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = `
      <button class="theme-switcher-close" aria-label="Close Theme Switcher">×</button>
      <h3>Choose Theme</h3>
      <div class="theme-options">
        <div class="theme-option" data-theme="default">
          <div class="theme-preview default"></div>
          <input type="radio" name="theme" id="theme-default" value="default">
          <label for="theme-default">Navy Blue ReFi</label>
        </div>
        <div class="theme-option" data-theme="green-refi">
          <div class="theme-preview green"></div>
          <input type="radio" name="theme" id="theme-green-refi" value="green-refi">
          <label for="theme-green-refi">Green ReFi</label>
        </div>
        <div class="theme-option" data-theme="minimal-refi">
          <div class="theme-preview minimal"></div>
          <input type="radio" name="theme" id="theme-minimal-refi" value="minimal-refi">
          <label for="theme-minimal-refi">Minimal ReFi</label>
        </div>
      </div>
      <button class="theme-save-btn">Apply Theme</button>
      <div class="theme-switcher-footer">
        Theme preferences are saved locally
      </div>
    `;
    document.body.appendChild(themeSwitcher);

    // Store references
    this.toggleBtn = toggleBtn;
    this.themeSwitcher = themeSwitcher;
    this.themeOptions = themeSwitcher.querySelectorAll('.theme-option');
    this.radioButtons = themeSwitcher.querySelectorAll('input[type="radio"]');
    this.saveBtn = themeSwitcher.querySelector('.theme-save-btn');
    this.closeBtn = themeSwitcher.querySelector('.theme-switcher-close');
  }

  bindEvents() {
    // Toggle theme switcher
    this.toggleBtn.addEventListener('click', () => {
      this.toggleThemeSwitcher();
    });

    // Close theme switcher
    this.closeBtn.addEventListener('click', () => {
      this.hideThemeSwitcher();
    });

    // Theme selection
    this.themeOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        const theme = option.dataset.theme;
        this.selectTheme(theme);
      });
    });

    // Radio button changes
    this.radioButtons.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const theme = e.target.value;
        this.selectTheme(theme);
      });
    });

    // Apply theme
    this.saveBtn.addEventListener('click', () => {
      this.applyTheme();
      this.hideThemeSwitcher();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.themeSwitcher.contains(e.target) && !this.toggleBtn.contains(e.target)) {
        this.hideThemeSwitcher();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideThemeSwitcher();
      }
    });
  }

  toggleThemeSwitcher() {
    if (this.themeSwitcher.classList.contains('show')) {
      this.hideThemeSwitcher();
    } else {
      this.showThemeSwitcher();
    }
  }

  showThemeSwitcher() {
    this.themeSwitcher.classList.add('show');
    this.toggleBtn.style.display = 'none';
  }

  hideThemeSwitcher() {
    this.themeSwitcher.classList.remove('show');
    this.toggleBtn.style.display = 'flex';
  }

  selectTheme(theme) {
    // Update radio button
    const radio = this.themeSwitcher.querySelector(`input[value="${theme}"]`);
    if (radio) {
      radio.checked = true;
    }

    // Update active state
    this.themeOptions.forEach(option => {
      option.classList.remove('active');
    });
    
    const selectedOption = this.themeSwitcher.querySelector(`[data-theme="${theme}"]`);
    if (selectedOption) {
      selectedOption.classList.add('active');
    }

    this.currentTheme = theme;
  }

  applyTheme() {
    // Remove all theme classes
    document.body.classList.remove(...this.themes.map(t => `theme-${t}`));
    
    // Add selected theme class
    if (this.currentTheme !== 'default') {
      document.body.classList.add(`theme-${this.currentTheme}`);
    }

    // Save theme preference
    this.saveTheme();
    
    // Dispatch theme change event
    this.dispatchThemeChangeEvent();
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('refi-theme');
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.currentTheme = savedTheme;
      this.selectTheme(savedTheme);
      
      // Apply theme immediately if not default
      if (savedTheme !== 'default') {
        document.body.classList.add(`theme-${savedTheme}`);
      }
    }
  }

  saveTheme() {
    localStorage.setItem('refi-theme', this.currentTheme);
  }

  dispatchThemeChangeEvent() {
    const event = new CustomEvent('themeChanged', {
      detail: { theme: this.currentTheme }
    });
    document.dispatchEvent(event);
  }

  // Public method to get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Public method to set theme programmatically
  setTheme(theme) {
    if (this.themes.includes(theme)) {
      this.currentTheme = theme;
      this.selectTheme(theme);
      this.applyTheme();
    }
  }
}

// Initialize theme switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.reFiThemeSwitcher = new ReFiThemeSwitcher();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReFiThemeSwitcher;
}
