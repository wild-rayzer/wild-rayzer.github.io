document.addEventListener('DOMContentLoaded', () => {
    // Get the iframe element by its ID
    const iframe = document.getElementById('point-cloud-viewer');
  
    // Check if the iframe exists in the DOM
    if (iframe) {
      // Load the iframe content by setting its src attribute from the data-src attribute
      iframe.src = iframe.getAttribute('data-src');
  
      // Make the iframe visible by adding the 'show' class (if applicable)
      iframe.classList.add('show');
    }
  });