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


  //reference letters popup
document.querySelectorAll('.popup').forEach((popup) => {
  popup.addEventListener('click', function () {
    this.style.display = 'none';
  });

  popup.querySelector('.popup-inner').addEventListener('click', function (e) {
    e.stopPropagation();
    console.log(e);
  });

  popup.querySelector('.close-popup').addEventListener('click', function () {
    popup.style.display = 'none';
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.popup').forEach((popup) => {
      popup.style.display = 'none';
    });
  }
});
