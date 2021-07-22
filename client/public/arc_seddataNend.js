// Source postData function
src="arc_postData.js"

// Function to send data and end experiment (will be called on finish)
function senddataNend(){
    var JSDATA = jsPsych.data.get().json()
    const body = {partial: false, data: JSDATA} //, structure according to ARC
    postData(JSON.stringify(body))
}
