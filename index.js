// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function quickSort(list) {
  if (!list.length || list.length === 1) {
    return list;
  }

  const center = Math.floor((list.length - 1) / 2);
  const rootEl = list[center];

  const leftSide = [];
  const rightSide = [];

  for (let i = 0; i < list.length; i++) {
    if (i !== center) {
      if (list[i] < rootEl) {
        leftSide.push(list[i]);
      } else {
        rightSide.push(list[i]);
      }
    }
  }

  return [...quickSort(leftSide), rootEl, ...quickSort(rightSide)];
}

const arr = [1, 3, 7, 6, 8, 9, 1000, 12123123123];
console.log(quickSort(arr));
