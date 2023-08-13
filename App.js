const enddate ="9 aug 2023 8:25 pm"
document.getElementById("endDate").innerText=enddate;
const inputs = document.querySelectorAll("input")

function clock (){
    const end = new Date(enddate);
    const now = new Date ();
    const diff = (end-now)/1000;
    if(diff<0) return;
    // convrt into the days 
    inputs[0].value=(Math.floor(diff/3600/24))
    //hour
    inputs[1].value=(Math.floor(diff/3600)%24)
    // minute 
    inputs[2].value=(Math.floor(diff/60)%60)
    //second 
    inputs[3].value=(Math.floor(diff)%60)
}
// initial call 
clock()

setInterval(() => {
   clock() 
}, 1000);
/*
 1 day =24hour
 1hr = 60min
 60 min = 3600 sec
 1 min = 60 sec
*/