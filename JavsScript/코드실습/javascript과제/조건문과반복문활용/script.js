let array=[0,1,2,3,4,5,6,7,8,9,10];
let arr=[10,11,12,13,14,15,16,17,18,19,20]

for(let i=0; i<arr.length;i++){
    if(i%2==0){
        console.log(arr[i]);
        //console.log(i); 이러면 인덱스 번호 나옴옴
    }
}

for(const even of array){
    if(even%2==0)
    console.log(even);
}
