document.addEventListener("DOMContentLoaded", () => {
  const media = window.matchMedia("(max-width: 767px)");
  const iconMenu = document.querySelector(".icon-menu");
  const iconCloseMenu = document.querySelector(".icon-close-menu");
  const headerNav = document.querySelector(".header-nav");
  const headerMenu = document.querySelector(".header-menu");
  const headerTop = document.querySelector(".header-top");
  const iconSearchSm = document.querySelector(".icon-search-sm");
  const headerSearchSm = document.querySelector(".header-search.sm .header-top-search");
  iconMenu.addEventListener("click", () => {
    headerNav.classList.toggle("active");
  });
  iconCloseMenu.addEventListener("click", () => {
    headerNav.classList.remove("active");
  });
  if(media.matches) {
    headerMenu.appendChild(headerTop);
    iconSearchSm.addEventListener("click", () => {
      headerSearchSm.classList.toggle("active");
    });
  }

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
  // hover event
  const eventItems = document.querySelectorAll(".event-item");
  eventItems.forEach((eventItem) => {
    eventItem.addEventListener("mouseenter", () => {
      const img = eventItem.dataset.img;
      document.querySelector(".event-img img").src = img;
    });
  });
  // hover campus
  const campusItems = document.querySelectorAll(".branch-item");
  let currentIndex = 0;
  let autoRotateInterval;

  const activateItem = (index) => {
    campusItems.forEach((item) => item.classList.remove("active"));
    campusItems[index].classList.add("active");
  };
  const startAutoRotate = () => {
    autoRotateInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % campusItems.length;
      activateItem(currentIndex);
    }, 3000);
  };

  const stopAutoRotate = () => {
    clearInterval(autoRotateInterval);
  };

  if (campusItems.length > 0) {
    activateItem(0);
    if(!media.matches) {
      startAutoRotate();
    }
  }

  campusItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      stopAutoRotate();
      currentIndex = index;
      activateItem(currentIndex);
    });
    item.addEventListener("mouseleave", () => {
      startAutoRotate();
    });
  });

  // show more major
  const btnShowMoreMajor = document.querySelector(".overview-major-btn");
  btnShowMoreMajor.addEventListener("click", (e) => {
    const majorList = document.querySelector(".overview-major-list");
    majorList.classList.toggle("active");
    majorList.style.maxHeight = majorList.classList.contains("active") ? `${majorList.scrollHeight}px` : "300px";
    btnShowMoreMajor.querySelector("span").textContent = majorList.classList.contains("active") ? "Thu gọn" : "Xem thêm";
  });

  
});
