 //function mouseover and mouseout links menu bar

 const changeColorMenuBtn = document.querySelectorAll(".linksMenu");

 changeColorMenuBtn.forEach(color => {
  color.addEventListener("mouseover", function(){
  color.style.backgroundColor = "#00d0b7";
  color.style.padding = "16px";
 });

 color.addEventListener("mouseout", function(){
 color.style.backgroundColor = "#8c15e9";
 color.style.padding = "16px";
 });

});

//function mouseover and mouseout button checkoy

const changeColorCheckoutBtn = document.querySelector(".checkout");

changeColorCheckoutBtn.addEventListener("mouseover", function(){
  changeColorCheckoutBtn.style.backgroundColor = "#8c15e9";
});

changeColorCheckoutBtn.addEventListener("mouseout", function(){
  changeColorCheckoutBtn.style.backgroundColor = "#00d0b7";
});

