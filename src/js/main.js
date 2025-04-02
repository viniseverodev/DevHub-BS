import '../scss/style.scss';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

document.getElementById('newPostBtnInput').addEventListener('click', () => {
  const modalElement = document.getElementById('postModal');
  const postModal = new bootstrap.Modal(modalElement);
  postModal.show();
  setTimeout(() => {
    document.getElementById('writePostInput').focus();
  }, 500);
});

document.getElementById('themeSwitcher').addEventListener('click', () => {
  const htmlElement = document.querySelector('html');
  const iconElement = document.querySelector('#themeSwitcher>i');
  if (htmlElement.dataset.bsTheme === 'dark') {
    htmlElement.dataset.bsTheme = 'light';
    iconElement.classList.remove('bi-moon-stars');
    iconElement.classList.add('bi-brightness-high');
  } else {
    htmlElement.dataset.bsTheme = 'dark';
    iconElement.classList.add('bi-moon-stars');
    iconElement.classList.remove('bi-brightness-high');
  }
});