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
};


  //reference letters popup
  document.querySelectorAll('.reference-popup').forEach(button => {
    button.addEventListener('click', function () {
      const popupClass = this.getAttribute('data-popup');
      const popup = document.querySelector(`.${popupClass}`);
      popup.style.display = 'block'; // Show the popup
    });
  });

  // Close popup
  document.querySelectorAll('.close-popup').forEach(button => {
    button.addEventListener('click', function () {
      this.closest('.popup').style.display = 'none'; // Hide the popup
    });
  });
