//for in loop

let student = {
    name: "Ankit Yadav",
    age: 23,
    cgpa: 6.8,
    isPass: true,
};

for(let key in student) {
    console.log("key=", key, "value=", student[key]);
}