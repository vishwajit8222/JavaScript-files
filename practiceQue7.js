//find avg of students marks.

let marks = [85,97,44,37,76,60];
let sum = 0;

for(let mark of marks){
    sum += mark;
}

let avg = sum/marks.length;
console.log("avg marks of the students =",avg)