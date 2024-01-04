function $(selector) {
  return document.querySelector(selector);
}
let speed = 50;
const wait = 1200;
const p = $("#typeWriter");
//stroe the text you want to type in an array.
const text = [
  "hello how are you doing",
  "so happy to hear you are fine",
  "this is a simple typewriter",
];
//x is the text pointer, it is 0 meaning it is the in the beginning of the text
//we are to type
let x = 0;
//d is a pointer pointing to the text we want to type, it is 0 meaning we are
// going to be typing the first text in the store.
let d = 0;
//activeText is the text we are typing now
let activeTxt = text[d];
function typewrite() {
  //if not end of text start typing else wait for some time and then erase
  //the text
  if (x > activeTxt.length) {
    setTimeout(erase, wait);
  } else {
    p.innerHTML = activeTxt.substring(0, x + 1);
    x++;
    setTimeout(typewrite, speed);
  }
}

function erase() {
  if (x < 0) {
    //if x < 0 means we have finish erasing the text.
    //then we check if the text we just finish  typing and erasing is the last
    // text in the store, if it is, we move to the first text, if not we go to the
    //next text in the store
    //we do this by moving the pointer to the text forward or taking it to the first
    //text depending on the condition
    if (d < text.length - 1) {
      ++d;
    } else {
      d = 0;
    }
    activeTxt = text[d];
    setTimeout(typewrite, 600);
  } else {
    p.innerHTML = activeTxt.substring(0, x);
    x--;
    setTimeout(erase, speed);
  }
}
typewrite();
