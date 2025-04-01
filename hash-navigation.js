// Handle hash-based navigation
document.addEventListener('DOMContentLoaded', function() {
  // Function to scroll to an element with offset for the navbar
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
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
    }, 100);
  }
  
  // Also handle clicks on hash links within the page
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return; // Skip empty hash
      
      e.preventDefault(); // Prevent default anchor behavior
      
      // Get the target ID without the # character
      const targetId = this.getAttribute('href').substring(1);
      
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
});