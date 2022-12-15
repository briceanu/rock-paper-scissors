export function renderPlayer() {
  const button = document.querySelector('button');
  button.addEventListener('click', show);
  function show() {
    const players_container = document.querySelector('.players_container');
    players_container.classList.remove('players_container');
    players_container.classList.add('show_players_container');
  }
}
