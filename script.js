/// relogio digital:
let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
  let now = new Date(); /// pegar a hora atual;
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second,
  )}`;

  function fixZero(time) {
    return time < 10 ? `0${time}` : time;
  }

  let secondDeg = (360 / 60) * second - 90;
  let minuteDeg = (360 / 60) * minute - 90;
  let hourDeg = (360 / 12) * hour - 90;
  secondElement.style.transform = `rotate(${secondDeg}deg)`;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000); /// a cada 1 segundo ele irá executar essa função;
updateClock(); /// para quando atualizar a tela ele já rodar para aparecer as horas;
