let array =[1,2,3,4,5,6,7,8,9,10];
let arr;

arr = array.push(11);
console.log(`push : `+array);

arr = array.pop();
console.log(`pop : `+array);

arr = array.shift();
console.log(`shift : `+array);

arr = array.slice(3,9);
console.log(`slice array: `+array);
console.log(`slice arr: `+arr);
//slice는 원본 배열을 변경하지 않아서 변수에 담아 쓰기

arr = array.splice(3,4);
console.log(`splice array: `+ array);
console.log(`splice arr: `+ arr);
//splice는 원본 지움 3번째 인덱스부터 4개 원소를 지움

let animals=["Lion","Cat","Dog","Monkey","Rabbit"];
let UpperAnimal=[];

for(let i=0;i<animals.length;i++){
    UpperAnimal[i]=animals[i].toUpperCase();
}

console.log(UpperAnimal);

for(let element of animals){
    console.log(element.toLowerCase());
}

for(let element of animals){
    console.log(`substring : `+element.substring(2,3));
}
//start,end순으로변수 쓰는데 s>e면 둘이 반대로 동작.
//s혹은 e가 음수면 0으로 처리리
