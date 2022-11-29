// let speed = prompt("Please enter speed")
function speedDetector(speed){
    // if the prompt is required
    // let speed = prompt("Please enter speed") 
    if(speed<70){console.log("Ok")}
    // the Math.floor function rounds down to the largest integer
    else{ let points = Math.floor((speed - 70) / 5);    
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${points}`);
    }
  }
};
speedDetector()