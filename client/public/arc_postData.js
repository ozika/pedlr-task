// Function to update URL send back to prolific (with completion code in URL)
var postData = function(data){
    $.ajax({
        async: false, // should still work, see https://stackoverflow.com/questions/11448011/jquery-ajax-methods-async-option-deprecated-what-now
        url: "https://arc-vlab.mpib-berlin.mpg.de/YOURTASK/submit",
        type: 'post',
        headers: {
            'Access-Control-Allow-Origin': '*' // not sure if this is needed
        },
        data : data,
        processData: false,
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        success: function (output) {
            // whatever the data try 3 times
            attempts=attempts+1
            if (output.code==0){SendToProlific(); return} // if all good, sending to prolific and done. return is in case prolific is off
            wait(2000) // wait 3 secodns
            // if didnt sent to prolific so the data was sent but other message from ARC than 0 - then try to send the data again up to 3 times
            if (attempts<3){postData(data)} // will not work after attempt 3.
            // then we try to send the error message itseld for 4th time attempt only
            if (attempts<4){postData(JSON.stringify(output))}
            // if it got here that means it tries 3 times to ARC, got non 0 code, and then sent the error to ARC and was succsfull
            SendToProlific();
        },// end success
        error: function (error) { // if the sent was not successgull, i.e. not even an ARC code
            wait(2000) // wait 3 secodns
            errorattempts=errorattempts+1
            if (errorattempts<3){postData(data)} //  will not work after attempt 3
            // then we try to send the error message itsels.
            if (errorattempts<4){postData(JSON.stringify(error))}
            // if everything failes, then send to prolific
            SendToProlific()
        }// the whole process is not 100% perfect but will try maximum of 7 or 8 times which means ca 15 seconds and then send back to prolific.
       });
    }
