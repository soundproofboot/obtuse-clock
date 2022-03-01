let divs = document.querySelectorAll('div');

divs.forEach((div) => (div.style.opacity = 0));

let timeout = 939/2;

function callBack() {
  let time = Date.now().toString();

  let milli = Number(time[time.length - 1]);
  let hundredth = Number(time[time.length - 2]);
  let tenth = Number(time[time.length - 3]);
  let second = Number(time[time.length - 4]);

  let div1 = document.querySelector(`#div${milli}`);
  div1.style.opacity = `.${hundredth}`;

  setTimeout(() => {
    div1.style.opacity = `0`;
  }, timeout/2);

  let div2 = document.querySelector(`#div1${hundredth}`);
  div2.style.opacity = `.${tenth}`;

  setTimeout(() => {
    div2.style.opacity = `.0`;
  }, timeout/4);

  let div3 = document.querySelector(`#div2${tenth}`);
  div3.style.opacity = `.${second}`;

  setTimeout(() => {
    div3.style.opacity = `.0`;
  }, timeout/8);

  let div4 = document.querySelector(`#div3${milli}`);

  setTimeout(() => {
    div4.style.opacity = `.0`;
  }, timeout/2);

  setTimeout(() => {
    // if (timeout >= 150) {
    //   timeout -= 10;
    // }
    callBack();
  }, timeout);

  
}

// setTimeout(() => {
//   callBack();
// }, timeout);

let startBtn = document.querySelector('button');
// startBtn.textContent = 'Start';

// div.appendChild(startBtn);
startBtn.addEventListener('click', () => {
  var audio = new Audio('./get-away-from-me.mp3');
  audio.play();
  // setTimeout(() => {
    callBack();
    // }, 10)
  // setInterval(() => {
  // divs.forEach((div) => (div.style.opacity = 1));

  // divs.forEach((div) => (div.style.opacity = 0));

  // },timeout*8);
  startBtn.style.display = 'none';
  // setInterval(flash, 960);
  
});