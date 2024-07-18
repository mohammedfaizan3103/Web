// use("CrudDb")
// directly created database

// Create Operation
// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// directly create courses 2 collection
// db.courses2.insertOne({
//     name: "Harrys web dev free course",
//     price: 45,
//     assignments: 2,
//     projects: 450
// })

// db.courses.insertMany([
//         {
//           "name": "Python Masterclass",
//           "price": 0,
//           "assignments": 10,
//           "projects": 30
//         },
//         {
//           "name": "JavaScript Basics",
//           "price": 0,
//           "assignments": 8,
//           "projects": 20
//         },
//         {
//           "name": "C# for Beginners",
//           "price": 0,
//           "assignments": 15,
//           "projects": 40
//         },
//         {
//           "name": "Web Development Fundamentals",
//           "price": 0,
//           "assignments": 12,
//           "projects": 35
//         },
//         {
//           "name": "Java Programming Essentials",
//           "price": 0,
//           "assignments": 14,
//           "projects": 38
//         },
//         {
//           "name": "ReactJS Crash Course",
//           "price": 0,
//           "assignments": 10,
//           "projects": 25
//         },
//         {
//           "name": "SQL Simplified",
//           "price": 0,
//           "assignments": 12,
//           "projects": 30
//         },
//         {
//           "name": "Responsive Web Design",
//           "price": 0,
//           "assignments": 10,
//           "projects": 28
//         },
//         {
//           "name": "Node.js for Beginners",
//           "price": 0,
//           "assignments": 13,
//           "projects": 36
//         },
//         {
//           "name": "Frontend Development with Vue.js",
//           "price": 0,
//           "assignments": 11,
//           "projects": 32
//         }
//       ]
//       )

// READ
// let a = db.courses.find({price: 0}) 
// let c = a.toArray()
// for(let i of c) {
//   console.log(i._id.toString())
//   console.log(i.assignments);
// }
// // a is a cursor object convert into array


// let b = db.courses.findOne({price: 0}) 
// console.log(b)

// UPDATE
// condition, set
// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})

// DELETE

// db.courses.deleteOne({price: 1000})

// db.courses.deleteMany({price: 1000})


use("TestDB1")

let c = db.Fifa.find({"Jersey Number": 10, 
  Club: "Paris Saint-Germain"})

for(let i of c) {
  console.log(i.Name);
}

let d = db.Fifa.find({Overall : {$gt: 90}})
for(let i of d) {
  console.log(i.Name);
}