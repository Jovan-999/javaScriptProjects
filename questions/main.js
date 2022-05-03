//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
  // console.log(question);
  const button = question.querySelector('.question-btn');
  // console.log(btn);
  button.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// traversing the dom
// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(function (button) {
//   button.addEventListener('click', function (event) {
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
