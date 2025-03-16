let val;
val =String(111);
val =String(8+4);

val=String(false);
val = String(new Date())
val=String([1,2,3,4]);

val=(5).toString();
val=(true).toString();
/////////////////////////////////



val=Number('1');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('hello');
val=Number([1,2,3]);


console.log(val);
console.log(typeof val);
console.log(val.length)


let i=0;
do{
    console.log('Number '+i);
    i++
}
while(i<10);
