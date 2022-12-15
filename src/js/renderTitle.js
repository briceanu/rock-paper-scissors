export function renderTitle() {
  let i = 0;
  let text = 'Rock, Paper, Scissors?';
  function displayTitle() {
    if (i < text.length) {
      let title = document.querySelector('.title');
      title.innerHTML += text.charAt(i);
      i++;
      setTimeout(displayTitle, 50);
    }
  }
  setTimeout(displayTitle, 2000);
}
