console.log("Start app");
const colorBtn = document.querySelector('.changeClr');
const bodyBackground = document.querySelector('body');
const rndmText = document.querySelector(".hex")

const hexNumbers = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];

colorBtn.addEventListener('click', getHex);
function getHex() {
  let hexCol = '#';
  for (let i=0; i<6; i++){
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexCol += hexNumbers[random];
    
  }
  bodyBackground.style.backgroundColor = hexCol;
  rndmText.innerHTML = hexCol;
}
// <C> Māris Vītols//