import { renderTitle } from './renderTitle.js';
import { renderPlayer } from './renderPlayer';
import style from '../style/style.scss';
import rock from '../assets/rock.svg';
import black_1280 from '../assets/images/black_1280.jpg';
import player from '../assets/player.svg';
import robot from '../assets/robot.svg';

function main() {
  function showAll() {
    const players_container = document.querySelector('.players_container');
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      button.classList.toggle('hide_button', renderTitle());
    });
  }
  renderPlayer();
  showAll();
}
main();
