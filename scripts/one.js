'use strict';

var count = 2;

function decrement() {
  count -= 1;
  if (count < 0) count = 0;
  document.getElementById('seats').innerHTML = count + '';
}

function increment() {
  count += 1;
  if (count > 10) count = 10;
  document.getElementById('seats').innerHTML = count + '';
}
