// This script enhances SEO by improving user engagement metrics

document.addEventListener('DOMContentLoaded', function() {
  // Track user engagement time and page scrolling
  let startTime = new Date();
  let scrollPercentage = 0;
  let maxScroll = 0;
  
  // Function to calculate scroll percentage
  function getScrollPercent() {
    const h = document.documentElement, 
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  }
  
  // Track scrolling
  window.addEventListener('scroll', function() {
    scrollPercentage = getScrollPercent();
    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage;
    }
  });
  
  // Highlight important keywords in text
  const keywords = ['harp', 'lessons', 'NYC', 'Brooklyn', 'music', 'teacher'];
  const paragraphs = document.querySelectorAll('.lessonsblurb p');
  
  paragraphs.forEach(p => {
    keywords.forEach(keyword => {
      // Create regex to match the keyword
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      // Replace with the keyword wrapped in a span
      p.innerHTML = p.innerHTML.replace(regex, match => 
        `<span class="seo-keyword">${match}</span>`);
    });
  });
  
  // Add lazy loading to images that don't already have it
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
  
  // Add schema.org LocalBusiness structured data
  if (!document.querySelector('script[type="application/ld+json"]')) {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Harp Lessons by Esther Sibiude",
      "description": "Professional harp lessons in NYC",
      "url": "https://www.harplessonsnyc.com",
      "telephone": "917-463-8958"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);
  }
});