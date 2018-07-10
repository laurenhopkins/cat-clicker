// Counts every time the cat picture is clicked

const catPic = document.querySelector('.cat-picture');
let numberClicks = 0;

catPic.addEventListener('click', function(){
  catClicks();
}, false);

function catClicks() {
    numberClicks++;
    let numberClicksText = document.querySelector('.number-clicks-text');
    numberClicksText.innerHTML = `Number of Clicks: ${numberClicks}`;
}