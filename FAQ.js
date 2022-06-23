

let clickQuestion = document.getElementsByClassName('expand__cont');
let expandAnswer = document.getElementsByClassName('.answer');

for (i=0; i<clickQuestion.length; i++) {
  clickQuestion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
};
