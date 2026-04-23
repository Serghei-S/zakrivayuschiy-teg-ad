/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const popup = document.getElementById('popup-id');
const openButton = document.querySelector('.button__popup-open');
const closeButton = document.querySelector('.button__popup-close');
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

if (openButton && popup) {
  openButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    popup.showModal();
  });
}

if (closeButton && popup) {
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    popup.close();
  });
}

document.addEventListener('submit', (event) => {
  event.preventDefault();
});

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  if (!heart || !button) {
    return;
  }

  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const textElement = button.querySelector('.button__text');

  if (!textElement) {
    return;
  }

  setTimeout(() => {
    textElement.textContent = heart.classList.contains('is-liked')
      ? 'Unlike'
      : 'Like';
  }, 500);
}
