 //function mouseover and mouseout title images 

const changeLinksTitlesImages = document.querySelectorAll(".titleHomeProduct");

changeLinksTitlesImages.forEach(link => {
  link.addEventListener("mouseover", function(){
  link.style.color = "#00d0b7";
  });

  link.addEventListener("mouseout", function(){
  link.style.color = "#8c15e9";
  });

});
