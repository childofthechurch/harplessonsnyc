// Handle hash-based navigation
document.addEventListener('DOMContentLoaded', function() {
  // Function to find element regardless of case
  function findElementByCaseInsensitiveId(id) {
    // Try direct match first
    let element = document.getElementById(id);
    
    // If not found, try case insensitive match
    if (!element) {
      // Check for known section IDs with specific capitalization
      const knownIds = {
        'contact': 'CONTACT',
        'about': 'ABOUT',
        'faq': 'FAQ',
        'lessons': 'LESSONS'
      };
      
      // Try to match with known capitalization
      const lowerId = id.toLowerCase();
      if (knownIds[lowerId]) {
        element = document.getElementById(knownIds[lowerId]);
      }
      
      // If still not found, try to find by attribute selector (slower but more thorough)
      if (!element) {
        element = document.querySelector(`[id="${id}"], [id="${id.toUpperCase()}"], [id="${id.toLowerCase()}"]`);
      }
    }
    
    return element;
  }
  
  // Function to scroll to an element with offset for the navbar
  function scrollToElement(elementId) {
    const element = findElementByCaseInsensitiveId(elementId);
    if (!element) {
      console.log('Element not found:', elementId);
      return;
    }
    
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const extraOffset = window.innerWidth < 992 ? 10 : 0; // Mobile adjustment
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Check if there's a hash in the URL when the page loads
  if (window.location.hash) {
    // Remove the '#' character
    const targetId = window.location.hash.substring(1);
    
    // Add a slight delay to ensure the page is fully loaded
    setTimeout(() => {
      scrollToElement(targetId);
    }, 300); // Increased delay for more reliability
  }
  
  // Also handle clicks on hash links within the page
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return; // Skip empty hash

      e.preventDefault(); // Prevent default anchor behavior

      // Get the target ID without the # character
      const targetId = this.getAttribute('href').substring(1);

      // Track the navigation event in analytics
      try {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_to_section', {
            'event_category': 'Navigation',
            'event_label': targetId,
            'target_section': targetId
          });
        }

        // Meta Pixel
        if (typeof fbq !== 'undefined') {
          fbq('trackCustom', 'ScrollToSection', {
            section: targetId
          });
        }
      } catch (error) {
        console.error('Error tracking navigation:', error);
      }

      // Update the URL without reloading the page
      history.pushState(null, null, `#${targetId}`);

      // Scroll to the element
      scrollToElement(targetId);

      // Close mobile navbar if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
  
  // Debug information to console
  console.log('Hash navigation script loaded');
  if (window.location.hash) {
    console.log('Initial hash:', window.location.hash);
  }
});