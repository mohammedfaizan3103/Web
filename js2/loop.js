arr = [1, 2, 4, 5]
for (const i of arr) {
    console.log(i)
}
o = {
    a:1,
    b:2
}
for (const iterator in o) {
    console.log(iterator)
}
for (const iterator in arr) {
    console.log(iterator)
}