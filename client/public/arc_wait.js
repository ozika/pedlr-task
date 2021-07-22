// Function to wait on arc server response
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {end = new Date().getTime(); }
 }
