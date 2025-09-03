const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.body;

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey'; //or you can write e.target.id becuse id of the element is name of the colour itself
    }
  });
});
