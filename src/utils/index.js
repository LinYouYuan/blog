export function scrollTop() {
  let scrollToptimer = setInterval(() => {
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    let speed = top / 4;
    if (document.body.scrollTop !== 0) {
      document.body.scrollTop -= speed;
    } else {
      document.documentElement.scrollTop -= speed;
    }
    if (top === 0) {
      clearInterval(scrollToptimer);
    }
  }, 25);
}

export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}

export function hexToRgba(hex, opacity = 1) {
  return "rgba(" + parseInt("0x" + hex.slice(0, 2)) + "," + parseInt("0x" + hex.slice(2, 4)) + "," + parseInt("0x" + hex.slice(4, 6)) + "," + opacity + ")";
}
