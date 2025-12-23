const historyData = {
  '2006': 'Thành lập theo Quyết định của Thủ tướng Chính phủ.',
  '2007': 'FPTU khai giảng khoá đầu tiên tại Hà Nội',
  '2011': 'Nội dung năm 2011',
  '2016': 'Nội dung năm 2016',
  '2018': 'Quyết định thành lập Phân hiệu Trường Đại học FPT tại TP Cần Thơ',
  '08/2018': 'Quyết định thành lập Phân hiệu Trường Đại học FPT tại TP Cần Thơ',
  '2021': 'Nội dung năm 2021'
};

document.querySelectorAll('.history-timeline-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.history-timeline-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    
    const year = this.querySelector('.history-timeline-year').textContent.trim();
    if (historyData[year]) {
      document.querySelector('.history-quote-year').textContent = year;
      document.querySelector('.history-quote-text').textContent = historyData[year];
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.achievements .counter');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
});

// Campus Accordion Toggle
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.vefptu-campus-accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.vefptu-campus-accordion-header');
    const toggle = item.querySelector('.vefptu-campus-accordion-toggle');
    
    // Click on header or toggle button
    const handleClick = (e) => {
      e.preventDefault();
      
      // Close all other items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    };
    
    header.addEventListener('click', handleClick);
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      handleClick(e);
    });
  });
});