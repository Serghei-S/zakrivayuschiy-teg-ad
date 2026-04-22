const dialog = document.querySelector('.dialog');
const dialogOpenButton = document.querySelector('[data-dialog-open]');
const dialogCloseButton = document.querySelector('[data-dialog-close]');

if (dialog && dialogOpenButton && dialogCloseButton) {
  dialogOpenButton.addEventListener('click', () => {
    dialog.showModal();
  });

  dialogCloseButton.addEventListener('click', () => {
    dialog.close();
  });
}
