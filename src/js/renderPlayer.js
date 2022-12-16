export function renderPlayer() {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    function show() {
      const players_container = document.querySelector('.players_container');
      players_container.classList.add('show_players_container');
    }
    setTimeout(show, 5000);
  });
}
