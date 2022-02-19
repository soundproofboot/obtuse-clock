let divs = document.querySelectorAll('div');

divs.forEach(div => div.style.opacity = 0);
// const heading = document.querySelector('h1');
let timeout = 1000;

function callBack() {
  let time = Date.now().toString();
  
  let milli = Number(time[time.length - 1])
  let hundredth = Number(time[time.length-2])
  let tenth = Number(time[time.length -3]);
  let second = Number(time[time.length -4]);

  let div1 = document.querySelector(`#div${milli}`);
  div1.style.opacity = `.${hundredth}`;

  setTimeout(() => {
    div1.style.opacity = `0`
  },timeout*hundredth)

  let div2 = document.querySelector(`#div1${hundredth}`);
  div2.style.opacity = `.${tenth}`;

  setTimeout(() => {
    div2.style.opacity = `.0`;
  },timeout*tenth)


  let div3 = document.querySelector(`#div2${tenth}`);
  div3.style.opacity = `.${second}`;

  setTimeout(() => {
    div3.style.opacity = `.0`;
  },timeout*second)

  let div4 = document.querySelector(`#div3${milli}`);

  setTimeout(() => {
    div4.style.opacity = `.0`;
  },timeout*milli)

  setTimeout(() => {
    if (timeout >= 200) {
      timeout -= 10;
    };
    callBack();
  }, timeout);
}
setTimeout(() => {
  callBack();
}, 1000)

// const intervalID = setInterval(callBack, 100);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 5000);