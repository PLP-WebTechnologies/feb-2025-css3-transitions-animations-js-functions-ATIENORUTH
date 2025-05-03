document.getElementById('triggerAnimation').addEventListener('click', () => {
    const box = document.getElementById('animatedBox');
    
    // Check if animation has already been triggered
    if (localStorage.getItem('animationTriggered') === 'true') {
      alert('Animation already triggered.');
      return;
    }
  
    // Add the animation class to trigger the animation
    box.classList.add('animate');
  
    // Store in localStorage that the animation has been triggered
    localStorage.setItem('animationTriggered', 'true');
  });
  
  // Check if animation was triggered before (when the page is reloaded)
  if (localStorage.getItem('animationTriggered') === 'true') {
    document.getElementById('animatedBox').classList.add('animate');
  }
  