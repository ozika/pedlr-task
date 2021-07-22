// Function to update URL send back to prolific (with completion code in URL)
function SendToProlific(){
    location.replace("https://app.prolific.co/submissions/complete?cc="+completion_code);} // cant press back
