const heartTemplate = document.querySelector('#heart-template');
const iconButtons = document.querySelectorAll('.card__icon-button');

if (heartTemplate) {
  iconButtons.forEach((button) => {
    if (!button.querySelector('.like-icon')) {
      const heartIcon = heartTemplate.content.firstElementChild.cloneNode(true);
      button.appendChild(heartIcon);
    }
  });
}
