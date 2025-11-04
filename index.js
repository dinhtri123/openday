document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  if(mediaQuery.matches) {
    const scheduleItems = document.querySelectorAll(".schedule-item");
    const scheduleDates = document.querySelectorAll(".schedule-date");
    scheduleDates.forEach((date) => {
      date.addEventListener("click", () => {
        scheduleItems.forEach((item) => {
          item.classList.remove("active");
        });
        const scheduleItem = date.closest(".schedule-item");
        scheduleItem.classList.add("active");
      });
    });
  }

  // countdowwn
  const countdown = document.querySelector(".countdown");
  const countdownDays = document.querySelector(".countdown-days");
  const countdownHours = document.querySelector(".countdown-hours");
  const countdownMinutes = document.querySelector(".countdown-minutes");
  const countdownSeconds = document.querySelector(".countdown-seconds");
  if (countdown) {
    const countdownDate = new Date("2026-01-18").getTime();
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdownDays.textContent = days;
      countdownHours.textContent = hours;
      countdownMinutes.textContent = minutes;
      countdownSeconds.textContent = seconds;
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownDays.textContent = "0";
        countdownHours.textContent = "0";
        countdownMinutes.textContent = "0";
        countdownSeconds.textContent = "0";
      }
    }, 1000);
  }
  // swiper common
  const createResponsiveSwiper = ({
    selector,
    breakpoint = "(max-width: 767px)",
    options = {},
  }) => {
    const container = document.querySelector(selector);

    if (!container) {
      return;
    }

    const mediaQuery = window.matchMedia(breakpoint);
    let instance = null;

    const mount = () => {
      if (instance) {
        return;
      }

      const nextEl = container.querySelector(".swiper-button-next");
      const prevEl = container.querySelector(".swiper-button-prev");
      const paginationEl = container.querySelector(".swiper-pagination");

      const config = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        ...options,
      };

      if (nextEl && prevEl) {
        config.navigation = {
          nextEl,
          prevEl,
        };
      }

      if (paginationEl) {
        config.pagination = {
          el: paginationEl,
          clickable: true,
        };
      }
      if(selector === ".campus-swiper") {
        config.autoplay = {
          delay: 1000,
          disableOnInteraction: false,
        };
      }

      instance = new Swiper(container, config);
    };

    const unmount = () => {
      if (!instance) {
        return;
      }

      instance.destroy(true, true);
      instance = null;
    };

    const handle = (event) => {
      if (event.matches) {
        mount();
      } else {
        unmount();
      }
    };

    handle(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handle);
    } else if (typeof mediaQuery.addEventListener  === "function") {
      mediaQuery.addEventListener(handle);
    }
  };

  createResponsiveSwiper({ selector: ".activity-swiper" });
  createResponsiveSwiper({ selector: ".campus-swiper" });
  createResponsiveSwiper({ selector: ".exp-swiper" });
  createResponsiveSwiper({ selector: ".explore-swiper" });
  createResponsiveSwiper({ selector: ".openday-swiper" });
  createResponsiveSwiper({ selector: ".campus-explore-swiper" });
  createResponsiveSwiper({ selector: ".campus-experience-swiper" });

  // form
  const campusSelect = document.querySelector("#campus");
  const timeSelect = document.querySelector("#time");
  campusSelect?.addEventListener("change", () => {
    const campus = campusSelect.value;
    if(campus === "HN") {
      timeSelect.innerHTML = `
        <option selected>Chọn thời gian</option>
        <option value='16/11/2025'>16/11/2025  Đang mở đăng ký</option>
        <option value='30/11/2025'>30/11/2025  Đang mở đăng ký</option>
        <option value='18/01/2026'>18/01/2026 Big Open day </option>
      `;
    }
    if(campus === "DN") {
      timeSelect.innerHTML = `
        <option selected>Chọn thời gian</option>
        <option value='6/11/2025'>6/11/2025  Đang mở đăng ký</option>
        <option value='30/11/2025'>8/11/2025  Đang mở đăng ký</option>
        <option value='30/11/2025'>30/11/2025 Đang mở đăng ký</option>
      `;
    }
    if(campus === "HCM") {
      timeSelect.innerHTML = `
        <option selected>Chọn thời gian</option>
        <option value='29/11/2025'>29 - 30/11/2025  Đang mở đăng ký</option>
        <option value='18/01/2026'>18/01/2026 Big Open day </option>
      `;
    }
    if(campus === "CT") {
      timeSelect.innerHTML = `
        <option selected>Chọn thời gian</option>
        <option value='16/11/2025'>16/11/2025  Đang mở đăng ký</option>
        <option value='30/11/2025'>30/11/2025 Đang mở đăng ký</option>
        <option value='18/01/2026'>18/01/2026 Big Open day</option>
      `;
    }
    if(campus === "QN") {
      timeSelect.innerHTML = `
        <option selected>Chọn thời gian</option>
        <option value='22/11/2025'>22 - 23/11/2025  Đang mở đăng ký</option>
        <option value='18/01/2026'>18/01/2026 Big Open day</option>
      `;
    }
  });
});
