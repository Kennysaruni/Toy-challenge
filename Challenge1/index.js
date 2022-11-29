function studentGrade(){
let marks = prompt("Please enter the student marks")
// asks user to input the student marks
if(marks>=80 && marks<= 100){
    console.log("A")
}
else if( marks>=60 && marks <80){
    console.log("B")
}
else if (marks >= 49 && marks <60){
    console.log("C")
}
else if (marks >= 40 && marks < 50){
    console.log("D")
}
else if (marks < 40 && marks >0){
    console.log("E")
}
else{console.log("Please enter the correct input")}
// if the input isnt a number between 1-100 it displays to the user to enter the corret input
}
studentGrade();