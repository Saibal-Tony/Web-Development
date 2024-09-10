let arr = [ 1 , 2 , 3 , 4 , 7 , 9 ];

console.log(arr);
console.log(arr.length);
console.log(arr[3]); // 4

arr[4] = 6;

// toString()
console.log(arr.toString());

// join()
console.log(arr.join("-")) // joins the different arrays together by the given value

// pop() - removes the last element and prints it
console.log(arr.pop());

// push() - add new value at the end and prints the updated length 
console.log(arr.push(10));

// shift() - romoves the first element and prints it 
console.log(arr.shift());

// unshift() - add the new value at the first position and prints the new length 
console.log(arr.unshift("Tony"));

// delete
console.log(delete arr[2]); // length is not changed but swpaed the value with 'empty'

// concatinate 
let a1 = [1 , 2 , 3];
let a2 = [4 , 5 , 6];
let a3 = [7 , 8 , 9];
console.log(a1.concat(a2 ,a3)); // joins all three together

// sort()
let srt = [ 2 , 9 , 5 , 1 , 8 , 10 ];
console.log(srt.sort());

// splice()
let spl1 = [ 1 , 2 , 3 , 4 , 5 ];
console.log(spl1.splice(1 , 3)); // it will slice the array from address '1' and '3' elements and remove it and print it 

let spl2 = [ 1 , 2 , 3 , 4 , 5 ];
console.log(spl2.splice(2 , 3 , 233 , 222 , 444  , 555)); // removes the elements and add these numbers after the address mentioned
console.log(spl2); 

let lp = [ 1 , 2 , 3 , 4 , 15 ];
for (let index = 0; index < lp.length; index++) {
    const element =lp[index];
    console.log(element);
}

lp.forEach((value , index , arr)=>{
    console.log(value , index , arr); // prints the value of that index with the full array
})

let obj ={
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , element);
    }
}

for (const element of obj) {
    console.log(element);
}

// map()
let mp = [ 1 , 2 , 3 , 4 , 15 ];
let newArr = mp.map((e)=>{
    return e**2;
})
console.log(newArr);

// filter()
const greaterThanSeven = (e)=>{
    if(e > 7){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThanSeven));