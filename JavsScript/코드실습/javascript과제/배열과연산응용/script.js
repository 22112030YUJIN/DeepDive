const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');


form.addEventListener('submit', handleEvent);



let data = [];
function handleEvent(e) {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    data.push({name:name, age:age});
    console.log("입력 데이터", data);


    const li = document.createElement('li');
    li.className = 'profile-details';
    li.id = 'details';


    li.appendChild(document.createTextNode(`이름 : ${name} 나이 : ${age}`));

    document.querySelector('ol.profile-title').appendChild(li);
    nameInput.value = '';
    ageInput.value = '';

    let sum =0;
   
    for(let i=0;i<data.length;i++){
        sum +=Number(data[i].age);    
    }

   
    let avg=0;

    avg = sum/data.length;
    console.log(avg);

    let h2 = document.getElementById('avgAge');

    let hr = document.createElement('hr');
    
    if(!h2){
        h2 = document.createElement('h2');
        h2.className = 'averageAge';
        h2.id = 'avgAge';
        
        document.querySelector('div.profile').appendChild(hr);
        document.querySelector('div.profile').appendChild(h2);
       
        //h2.appendChild(document.createTextNode(`나이 평균 : ${avg}`));
    }
      
    h2.textContent = `나이 평균 : ${avg}`;
   

    


}

   
