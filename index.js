document.addEventListener('DOMContentLoaded', () => {
  const scheduleItems = document.querySelectorAll('.schedule-item');
  const scheduleDates = document.querySelectorAll('.schedule-date');
  scheduleDates.forEach(date => {
    date.addEventListener('click', () => {
      scheduleItems.forEach(item => {
        item.classList.remove('active');
      });
      const scheduleItem = date.closest('.schedule-item');  
      scheduleItem.classList.add('active');
    });
  });
});