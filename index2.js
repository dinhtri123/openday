document.addEventListener("DOMContentLoaded", () => {
  const iconMenu = document.querySelector(".icon-menu");
  const iconCloseMenu = document.querySelector(".icon-close-menu");
  const headerNav = document.querySelector(".header-nav");
  iconMenu.addEventListener("click", () => {
    headerNav.classList.toggle("active");
  });
  iconCloseMenu.addEventListener("click", () => {
    headerNav.classList.remove("active");
  });

  // counter
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000; 
    const interval = 16;
    const steps = duration / interval;
    const increment = target / steps;
    let current = 0;
    
    if(target > current) {
      const counterInterval = setInterval(() => {
        current += increment;
        counter.textContent = Math.floor(current);
        
        if(current >= target) {
          clearInterval(counterInterval);
          counter.textContent = target;
        }
      }, interval);
    }
  });
}); 