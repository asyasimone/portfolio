new Swiper('.card-wrap', {
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//about tab
const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', function () {
      for (let j = 0; j < tablinks.length; j++) {
          tablinks[j].classList.remove('active-link');
          tabcontents[j].classList.remove('active-tab');
      }

      this.classList.add('active-link');
      tabcontents[i].classList.add('active-tab');
  });
}
