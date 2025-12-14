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