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

    if (target > current) {
      const counterInterval = setInterval(() => {
        current += increment;
        counter.textContent = Math.floor(current);

        if (current >= target) {
          clearInterval(counterInterval);
          counter.textContent = target;
        }
      }, interval);
    }
  });
  // tab
  const tabItems = document.querySelectorAll(".overview-train-tab-item");
  const trainContents = document.querySelectorAll(".train-content-tab");
  tabItems.forEach((tabItem) => {
    tabItem.addEventListener("click", () => {
      trainContents.forEach((trainContent) => {
        trainContent.classList.remove("active");
      });
      tabItems.forEach((item) => {
        item.classList.remove("active");
      });
      tabItem.classList.add("active");
      const dataTab = tabItem.dataset.tab;
      const trainContent = document.getElementById(dataTab);
      trainContent.classList.add("active");
    });
  });

  // tab major mobile
  const media = window.matchMedia("(max-width: 767px)");
  if (media.matches) {
    const tabTitleMajor = document.querySelectorAll(
      ".overview-major-item-title"
    );
    const tabMajorItem = document.querySelectorAll(".overview-major-item");
    tabTitleMajor.forEach((tabTitle) => {
      tabTitle.addEventListener("click", () => {
        tabMajorItem.forEach((item) => {
          item.classList.remove("active");
        });
        tabTitle.parentElement.classList.add("active");
      });
    });
  }
});
