
/*
//여긴event
window.onload = function () {
    // 문서가 load 될 때 이 함수 실행

    let text = document.getElementById("text");
    // 아이디가 "text"인 요소를 return

    text.innerHTML = "HTML 문서 loaded";
}

const aElement = document.querySelector('a');
aElement.addEventListener('click', () => {
    alert('a element clicked');
});
// a태그 클릭시 해당 문구 뜸 여기선 Hi

const buttonElement = document.querySelector('.btn2');
buttonElement.addEventListener('click', handleClick);
function handleClick(event) {
    let val;
    val = event;

    // Event target element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    //이러면 btn2 btn3 btn4 그냥 콘솔에 출력
    val = event.target.classList;
    //이러면 리스트에 들어있는 [btn2, btn3, btn4] 형태
    // Event type
    val = event.type;
    //버튼의 타입. click

    // 윈도우로부터의 거리 좌표
    val = event.clientY;
    val = event.clientX;
    //윈도우 창으로부터 내가 클릭한 좌표 위치

    // 요소로부터의 거리 좌표
    val = event.offsetY;
    val = event.offsetX;
    //해당 이벤트 요소의 테두리부터 거리

    console.log(val);
    console.log(event);
}*/


//=============================================================

//여기 event 종류/event listener 밑에 주석들도 이 파트 맞음

// CLICK EVENT
// const submitBtn = document.querySelector('.submit-btn');
// const container = document.querySelector('form');
// const title = document.querySelector('h2');
// Click
// submitBtn.addEventListener('click', handleEvent);
// Doubleclick
// submitBtn.addEventListener('dblclick', handleEvent);
// Mousedown
// submitBtn.addEventListener('mousedown', handleEvent);
// Mouseup
// submitBtn.addEventListener('mouseup', handleEvent);
// Mouseenter
// submitBtn.addEventListener('mouseenter', handleEvent);
// Mouseleave
// submitBtn.addEventListener('mouseleave', handleEvent);
// Mousemove
// container.addEventListener('mousemove', handleEvent);

// // Event Handler
// function handleEvent(e) {
//     e.preventDefault();
//     기본동작 방지 => 새로고침 되는걸 막아줌
//     console.log(`EVENT TYPE: ${e.type}`);
//     title.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     요소로부터의 좌표
// }



// FORM EVENT
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// Clear input
emailInput.value = '';

form.addEventListener('submit', handleEvent);

// Keydown
emailInput.addEventListener('keydown', handleEvent);
// keyup
emailInput.addEventListener('keyup', handleEvent);
// Keypress
emailInput.addEventListener('keypress', handleEvent);
// Focus
emailInput.addEventListener('focus', handleEvent);
// Blur (focus 하고 다른 곳 클릭하면...)
emailInput.addEventListener('blur', handleEvent);
// Cut (잘라내기 할 때)
emailInput.addEventListener('cut', handleEvent);
// Paste (붙여 넣기 할 때)
emailInput.addEventListener('paste', handleEvent);
// Input (input 요소 값이 달라졌을 때)
emailInput.addEventListener('input', handleEvent);

function handleEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    if (e.type === 'submit') {
        e.preventDefault();
    }
    //얘 조건문에 안넣으면 keypress가 동작을 못해서 글 써도 안나옴

    console.log(e.target.value);
    //title.innerText = e.target.value;
    title.textContent = e.target.value;
}


