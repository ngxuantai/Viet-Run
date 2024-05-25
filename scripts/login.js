function navigateToSignUp() {
  window.location.href = '/signup.html';
}

function loadHTML(id, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => {
      console.error(`Failed to load HTML from ${url}:`, error);
    });
}

let tabMenu;
function toggleTabMenu() {
  const tabMenuContainer = document.getElementById('tab-menu-container');
  tabMenuContainer.style.display =
    tabMenuContainer.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('footer-placeholder', './components/footer.html');
  tabMenu = document.getElementById('menu');
  tabMenu.addEventListener('click', toggleTabMenu);
  const closeMenu = document.getElementById('close-btn');
  closeMenu.addEventListener('click', toggleTabMenu);
});
