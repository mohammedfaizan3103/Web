object = {
    "name": 'abc', 
    'age': 19
}
// forin
for (const key in object) {
    // console.log('hello');
    const element = object[key];
    console.log(key);
    console.log(element);
}
// forof
for (const c of "harry") {
    console.log(c);
}
for (l of "harry") {
    console.log(l);
}

function func(name, age, r = 9) {
    console.log("Hello " + name + " of age " + age)
    return r
}
result = func('harry', 20)
console.log(result)

// arrow function
const func1 = (x) => {
    console.log("I am an arrow function " + x)
}
func1(20)