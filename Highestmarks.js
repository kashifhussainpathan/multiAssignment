let marks = [89, 87,68,67,54];
let highestMarks =0;
for(let i=0; i<marks.length; i++){
    highestMarks  = (marks[i]>highestMarks)
     ? marks[i] : highestMarks;
}
console.log("The highest marks in the class is:", highestMarks);