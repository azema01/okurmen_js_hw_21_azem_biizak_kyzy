const array1 = [1, 2, 3, 4, 3];
const index1 = array1.indexOf(3);
console.log("indexOf(3):", index1);  

const array2 = [1, 2, 3];
const isArray = Array.isArray(array2);
console.log("isArray:", isArray);  

const array3 = ['Hello', 'world', '!'];
const joined = array3.join(' ');
console.log("join():", joined); 

const array4 = ['a', 'b', 'c'];
const keys = array4.keys();
for (const key of keys) {
  console.log("keys():", key);  
}

const array5 = [1, 2, 3, 4, 3];
const lastIndex = array5.lastIndexOf(3);
console.log("lastIndexOf(3):", lastIndex); 

const newArray = Array.of(1, 2, 3, 4, 5);
console.log("of():", newArray);  

const array6 = [1, 2, 3, 4];
const reduced = array6.reduceRight((acc, val) => acc + val, 0);
console.log("reduceRight():", reduced); 

const array7 = [1, 2, 3];
const shifted = array7.shift();
console.log("shift() array:", array7);  
console.log("shift() shifted:", shifted);  

const array8 = [1, 2, 3];
const reversed = array8.slice().reverse();
console.log("toReversed():", reversed); 

const array9 = [3, 1, 2];
const sorted = array9.slice().sort();
console.log("toSorted():", sorted); 

const array10 = [1, 2, 3, 4, 5];
const spliced = array10.slice(2);
console.log("toSpliced():", spliced);  
