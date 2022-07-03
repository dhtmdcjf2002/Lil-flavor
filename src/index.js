const outer = document.querySelector('.banner');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0;

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`;
})

innerList.style.width = `${outer.clientWidth * inners.length}px`;

const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 2000);
}

let interval = getInterval();

////////////////////////////////배너//////////////////////////

const items = document.querySelectorAll('.question');

function openCloseAnswer() {
  const answerId = this.id.replace('que', 'ans');

  if (document.getElementById(answerId).style.display === 'block') {
    document.getElementById(answerId).style.display = 'none';
  } else {
    document.getElementById(answerId).style.display = 'block';
  }
}

items.forEach(item => item.addEventListener('click', openCloseAnswer));