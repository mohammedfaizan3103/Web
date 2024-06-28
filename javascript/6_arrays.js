let arr = [1, 2, 3, 4, 5 ,6]
/* 
length - This method returns the number of elements in an array. For example, the following code will return 3:

var myArray = [1, "Hello", [2, 3]];
console.log(myArray.length);

.join(-) 1-2-3-4-5-6 as string
.to string 1,2,3,4,5,6

push - This method is used to add an element to the end of an array. For example, the following code will add the element "World" to the end of the array:

var myArray = [1, "Hello", [2, 3]];
myArray.push("World");
console.log(myArray); // [1, "Hello", [2, 3], "World"]
 

pop - This method is used to remove the last element of an array. For example, the following code will remove the last element ("World") from the array:

var myArray = [1, "Hello", [2, 3], "World"];
myArray.pop();
console.log(myArray); // [1, "Hello", [2, 3]]
 

shift - This method is used to remove the first element of an array. For example, the following code will remove the first element (1) from the array:

var myArray = [1, "Hello", [2, 3]];
myArray.shift();
console.log(myArray); // ["Hello", [2, 3]]
 

unshift - This method is used to add an element to the beginning of an array. For example, the following code will add the element 0 to the beginning of the array:

var myArray = [1, "Hello", [2, 3]];
myArray.unshift(0);
console.log(myArray); // [0, 1, "Hello", [2, 3]]
 

slice - This method is used to extract a portion of an array. For example, the following code will extract the elements from index 1 to 2 (exclusive):

var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2)); // ["Hello"]
*/

// for each loop
arr.forEach((value, index, arr) => {
    console.log(value, index, arr)
});
// for in for indexes
for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key]; 
        console.log(key, element)
    }
}
//for of for values
for (const value of arr) {
    console.log(value)
}
arr.splice(1, 3)
console.log(arr)
let arr2 = [1, 2, 3, 4, 5 ,6]
arr2.splice(1, 3, 222, 333)
console.log(arr2)