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


// JavaScript for tab switching and Swiper initialization
document.addEventListener('DOMContentLoaded', function() {
  // Tab switching
  const tabButtons = document.querySelectorAll('.activity-tab');
  const tabContents = document.querySelectorAll('.activity-tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');

      // Remove active class from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(tabName).classList.add('active');
    });
  });

  // Initialize Swiper for each tab
  const activitySliders = document.querySelectorAll('.activity-slider');
  
  activitySliders.forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    });
  });
});

// Simple Vanilla Calendar Implementation
class SimpleCalendar {
  constructor(element, options = {}) {
    this.element = element;
    this.currentDate = new Date();
    this.selectedDate = null;
    this.events = options.events || [];
    this.onDateClick = options.onDateClick || null;
    this.render();
  }

  render() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    let html = `
      <div class="vanilla-calendar">
        <div class="vanilla-calendar-header">
          <button class="vanilla-calendar-header__button" data-action="prev">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <span class="vanilla-calendar-header__label">Lịch sự kiện ${monthNames[month]}</span>
          <button class="vanilla-calendar-header__button" data-action="next">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div class="vanilla-calendar-week">
          <div class="vanilla-calendar-week__day">T2</div>
          <div class="vanilla-calendar-week__day">T3</div>
          <div class="vanilla-calendar-week__day">T4</div>
          <div class="vanilla-calendar-week__day">T5</div>
          <div class="vanilla-calendar-week__day">T6</div>
          <div class="vanilla-calendar-week__day">T7</div>
          <div class="vanilla-calendar-week__day">CN</div>
        </div>
        <div class="vanilla-calendar-days">
    `;
    
    // Previous month days
    const startDay = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = startDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      html += `<div class="vanilla-calendar-day is-other-month">${day}</div>`;
    }
    
    // Current month days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      const hasEvent = this.events.includes(dateString);
      
      let classes = 'vanilla-calendar-day';
      if (date.toDateString() === today.toDateString()) {
        classes += ' is-today';
      }
      if (this.selectedDate && date.toDateString() === this.selectedDate.toDateString()) {
        classes += ' is-selected';
      }
      if (hasEvent) {
        classes += ' has-event';
      }
      
      html += `<div class="${classes}" data-date="${dateString}">${day}</div>`;
    }
    
    // Next month days
    const totalCells = startDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remainingCells; i++) {
      html += `<div class="vanilla-calendar-day is-other-month">${i}</div>`;
    }
    
    html += `
        </div>
      </div>
    `;
    
    this.element.innerHTML = html;
    this.attachEvents();
  }
  
  attachEvents() {
    // Navigation buttons
    this.element.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.getAttribute('data-action');
        if (action === 'prev') {
          this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        } else {
          this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        }
        this.render();
      });
    });
    
    // Day clicks
    this.element.querySelectorAll('.vanilla-calendar-day:not(.is-other-month)').forEach(day => {
      day.addEventListener('click', (e) => {
        const dateString = e.currentTarget.getAttribute('data-date');
        if (dateString) {
          this.selectedDate = new Date(dateString);
          this.render();
          if (this.onDateClick) {
            this.onDateClick(this.selectedDate);
          }
        }
      });
    });
  }
}

// Initialize calendar
document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('eventsCalendar');
  
  if (calendarEl) {
    // Example events (dates with events)
    const eventDates = [
      '2025-11-18',
      '2025-11-30'
    ];
    
    new SimpleCalendar(calendarEl, {
      events: eventDates,
      onDateClick: (date) => {
        console.log('Selected date:', date);
      }
    });
  }
});

// Initialize Swiper for Major News
document.addEventListener('DOMContentLoaded', function() {
  const majorNewsSlider = new Swiper('.major-news-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '.major-news-slider .swiper-button-next',
      prevEl: '.major-news-slider .swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // Tab Filter (Optional - if you want to filter content)
  const majorNewsTabs = document.querySelectorAll('.major-news-tab');
  
  majorNewsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active from all tabs
      majorNewsTabs.forEach(t => t.classList.remove('active'));
      
      // Add active to clicked tab
      this.classList.add('active');
      
      // Filter logic here (if needed)
      const category = this.getAttribute('data-category');
      console.log('Selected category:', category);
      
      // You can add AJAX call here to load filtered content
    });
  });
});