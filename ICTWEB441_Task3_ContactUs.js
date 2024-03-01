const changeSubmitContactColor = document.querySelector(".submitContactForm");

changeSubmitContactColor.addEventListener("mouseover", function(){
changeSubmitContactColor.style.backgroundColor = "#00d0b7";
});

changeSubmitContactColor.addEventListener("mouseout", function(){
  changeSubmitContactColor.style.backgroundColor = "#8c15e9";
});

const changeClearContactBtn = document.querySelector(".clearForm");

changeClearContactBtn.addEventListener("mouseover", function(){
changeClearContactBtn.style.backgroundColor ="#8c15e9";
});

changeClearContactBtn.addEventListener("mouseout", function(){
changeClearContactBtn.style.backgroundColor = "#00d0b7";
});