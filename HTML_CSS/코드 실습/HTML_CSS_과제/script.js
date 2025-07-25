document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./images/aqua2.jpg",
    "./images/hogwarts.jpg",
    
  ];

  let index = 0;
  const slideImg = document.querySelector(".slide-image");


  if (slideImg) {
    setInterval(() => {
      index = (index + 1) % images.length;
      slideImg.style.opacity = 0;
      setTimeout(() => {
        slideImg.src = images[index];
        slideImg.style.opacity = 1;
      }, 800);
    }, 4000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typingText");

  typingText.addEventListener("animationend", () => {
    typingText.style.borderRight = "none";
  });
});

