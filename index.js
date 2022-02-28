const arrow1 = document.querySelector(".arrow-1");
const arrow2 = document.querySelector(".arrow-2");
const arrow3 = document.querySelector(".arrow-3");
const arrow4 = document.querySelector(".arrow-4");

arrow1.addEventListener("click", () => {
  const answer1 = document.querySelector(".answer-1");
  answer1.classList.toggle('main-question-box-one-noshow')
  answer1.classList.toggle('main-question-box-one-show')
  arrow1.classList.toggle('arrow-answer')
});

arrow2.addEventListener("click", () => {
  const answer2 = document.querySelector(".answer-2");
  answer2.classList.toggle('main-question-box-one-noshow')
  answer2.classList.toggle('main-question-box-one-show')
  arrow2.classList.toggle('arrow-answer')
});

arrow3.addEventListener("click", () => {
  const answer3 = document.querySelector(".answer-3");
  answer3.classList.toggle('main-question-box-one-noshow')
  answer3.classList.toggle('main-question-box-one-show')
  arrow3.classList.toggle('arrow-answer')
});

arrow4.addEventListener("click", () => {
  const answer4 = document.querySelector(".answer-4");
  answer4.classList.toggle('main-question-box-one-noshow')
  answer4.classList.toggle('main-question-box-one-show')
  arrow4.classList.toggle('arrow-answer')
});


//Active feature
const feature1 = document.querySelector('.feature-option-one')
const feature2 = document.querySelector('.feature-option-two')
const feature3 = document.querySelector('.feature-option-three')

const featureBox1 = document.querySelector('.main-features-one')
const featureBox2 = document.querySelector('.main-features-two')
const featureBox3 = document.querySelector('.main-features-three')

const feature1Box = document.querySelector('.feature-one')
const feature2Box = document.querySelector('.feature-two')
const feature3Box = document.querySelector('.feature-three')

function cleanActiveFeature() {
  feature1Box.classList.remove('active-feature')
  feature2Box.classList.remove('active-feature')
  feature3Box.classList.remove('active-feature')
}

function cleanBorders() {
  featureBox1.style.border = 'none'
  featureBox2.style.border = 'none'
  featureBox3.style.border = 'none'
}

feature1.addEventListener('click', () => {
  cleanActiveFeature()
  cleanBorders()
  feature1Box.classList.add('active-feature')
  featureBox1.style.borderBottom = '3px solid hsl(0, 94%, 66%)'
})

feature2.addEventListener('click', () => {
  cleanActiveFeature()
  cleanBorders()
  feature2Box.classList.add('active-feature')
  featureBox2.style.borderBottom = '3px solid hsl(0, 94%, 66%)'
})

feature3.addEventListener('click', () => {
  cleanActiveFeature()
  cleanBorders()
  feature3Box.classList.add('active-feature')
  featureBox3.style.borderBottom = '3px solid hsl(0, 94%, 66%)'
})


//Validate Email
const emailInput = document.querySelector('.email')
const submitBtn = document.querySelector('.submit')
let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const emailError = document.querySelector('.error-email')

submitBtn.addEventListener('click', () => {
  if(regex.test(emailInput.value) === false) {
    emailInput.classList.add('error-email-input')
    emailError.style.display = 'block'
  } else {
    emailInput.classList.remove('error-email-input')
    emailError.style.display = 'none'
  }
})


const menu = document.querySelector('.header-options')

//Open hamburguer menu
const hamburguerIcon = document.querySelector('.hamburguer')
hamburguerIcon.addEventListener('click', () => {
  menu.style.display = 'flex'
})

//Close hamburguer
const closeIcon = document.querySelector('.close-hamburguer')
closeIcon.addEventListener('click', () => {
  menu.style.display = 'none'
})