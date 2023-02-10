'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const popUp = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closePopup = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', popUp);
}

closeModal.addEventListener('click', closePopup);

overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closePopup();
  }
});
