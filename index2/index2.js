document.addEventListener("DOMContentLoaded", () => {
  const media = window.matchMedia("(max-width: 767px)");
  const iconMenu = document.querySelector(".icon-menu");
  const iconCloseMenu = document.querySelector(".icon-close-menu");
  const popupMenu = document.querySelector(".popup-menu");
  const iconSearchSm = document.querySelector(".icon-search-sm");
  const headerSearchSm = document.querySelector(
    ".header-search.sm .header-top-search"
  );
  iconMenu.addEventListener("click", () => {
    popupMenu.classList.toggle("active");
  });
  iconCloseMenu.addEventListener("click", () => {
    popupMenu.classList.remove("active");
  });
  if (media.matches) {
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
  if(tabItems.length > 0) {
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
  }

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
    if (!media.matches) {
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
  if(btnShowMoreMajor) {
    btnShowMoreMajor.addEventListener("click", (e) => {
      const majorList = document.querySelector(".overview-major-list");
      majorList.classList.toggle("active");
      majorList.style.maxHeight = majorList.classList.contains("active")
        ? `${majorList.scrollHeight}px`
        : "300px";
      btnShowMoreMajor.querySelector("span").textContent =
        majorList.classList.contains("active") ? "Thu gọn" : "Xem thêm";
    });
  }

  // life desktop hover 
  if(!media.matches) {
    const lifeDkItems = document.querySelectorAll(".life-dk-item");
    lifeDkItems.forEach((lifeDkItem) => {
      lifeDkItem.addEventListener("mouseenter", () => {
        lifeDkItems.forEach((item) => {
          item.classList.remove("active");
        });
        lifeDkItem.classList.add("active");
      });
    });
    lifeDkItems.forEach((lifeDkItem) => {
      lifeDkItem.addEventListener("mouseleave", () => {
        lifeDkItems.forEach((item) => {
          item.classList.remove("active");
        });
      });
    });
  }
  // slider career
  const btnPrevCareer = document.querySelector(".career-right-bottom-btn-prev");
  const btnNextCareer = document.querySelector(".career-right-bottom-btn-next");
  const careerImg = document.querySelector(".career-img");
  const careerImgItems = document.querySelectorAll(".career-img img");
  const careerRightNumberCurrent = document.querySelector(".career-right-number-current");
  if(btnPrevCareer && btnNextCareer && careerImg && careerRightNumberCurrent) {
    btnPrevCareer.addEventListener("click", () => {
      careerImg.scrollLeft -= careerImg.scrollWidth / careerImgItems.length;
    });
    btnNextCareer.addEventListener("click", () => {
      careerImg.scrollLeft += careerImg.scrollWidth / careerImgItems.length; 
    });
    careerImg.addEventListener("scroll", () => {
      const itemWidth = careerImgItems[0].offsetWidth;
      const currentIndex = Math.round(careerImg.scrollLeft / itemWidth) + 1;
      careerRightNumberCurrent.textContent = Math.min(currentIndex, careerImgItems.length);
    });
  }
});
