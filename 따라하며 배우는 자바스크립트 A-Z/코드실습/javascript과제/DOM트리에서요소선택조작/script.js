document.addEventListener("DOMContentLoaded", () => {
  
  
  const today = new Date();
  const datetime = document.createElement('p');
  datetime.className = 'today';

  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  

  const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
  const day = week[today.getDay()];

  //const format = `${year}년 ${month}월 ${date}일 ${day}`;
  datetime.textContent =`${year}년 ${month}월 ${date}일 ${day}`;
  document.querySelector('body').appendChild(datetime);
  
  
  
  
  const header = document.createElement('header');
  header.className = "title";

  const h1 = document.createElement('h1');
  h1.className = 'sub-title';
  h1.id = 'typingText';
  h1.textContent = 'Hello';

  const goal = document.createElement('p');
  goal.className = 'goal';
  goal.textContent = '안녕하세요 저는 웹 개발자가 목표인 김유진입니다.';

  document.querySelector('body').appendChild(header);
  header.appendChild(h1);
  header.appendChild(goal);


});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.createElement('section');
  section.className = "content";

  const slideshow = document.createElement('div');
  slideshow.className = 'slideshow fade-in';

  const img = document.createElement('img');
  img.className = 'slide-image';
  img.src = './images/sea.jpg';
  img.alt = '사진1';

 
  document.querySelector('body').appendChild(section);
  document.querySelector('section.content').appendChild(slideshow);
  document.querySelector('div.slideshow').appendChild(img);


  const intro = document.createElement('div');
  intro.className = 'intro fade-in';

  const profile = document.createElement('div');
  profile.className = 'profile fade-in';

  const profile_ul = document.createElement('ul');
  profile_ul.textContent = '프로필';

  const profile_li1 = document.createElement('li');
  profile_li1.textContent = '생년월일 : 02.04.19';

  const profile_li2 = document.createElement('li');
  profile_li2.textContent = '학과 : 영남대학교 컴퓨터공학과';

  const profile_li3 = document.createElement('li');
  profile_li3.textContent = '목표 : React 초급 마스터';


  document.querySelector('section.content').appendChild(intro);
  document.querySelector('div.intro').appendChild(profile);
  document.querySelector('div.profile').appendChild(profile_ul);
  document.querySelector('.profile ul').appendChild(profile_li1);
  document.querySelector('.profile ul').appendChild(profile_li2);
  document.querySelector('.profile ul').appendChild(profile_li3);


  const hobby = document.createElement('div');
  hobby.className = 'hobby fade-in';

  const hobby_ul = document.createElement('ul');
  hobby_ul.textContent = '취미';

  const hobby_li1 = document.createElement('li');
  hobby_li1.textContent = '웹 소설 읽기';

  const hobby_li2 = document.createElement('li');
  hobby_li2.textContent = '사진 찍기';

  const hobby_li3 = document.createElement('li');
  hobby_li3.textContent = '게임 하기';

  document.querySelector('div.intro').appendChild(hobby);
  document.querySelector('div.hobby').appendChild(hobby_ul);
  document.querySelector('.hobby ul').appendChild(hobby_li1);
  document.querySelector('.hobby ul').appendChild(hobby_li2);
  document.querySelector('.hobby ul').appendChild(hobby_li3);


});


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

