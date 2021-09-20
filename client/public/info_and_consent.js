// Source package to save browser info
src="bowser/bowser.js"

// Function to check if 'consent_checkbox' element of the external .html consent
// form was checked (if not, won't let you continue)
var check_consent = function(elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

// Function to display external consent form and check for given consent (checkbox)
var info_and_consent = {
  type: 'external-html',
  url: 'info_and_consent.html',
  cont_btn: "start",
  check_fn: check_consent,
  on_finish: function(data){
    data.type = 'consent',
    data.browser_name = bowser.name,
    data.browser_version = bowser.version,
    data.os_name = bowser.osname,
    data.os_version = bowser.osversion,
    data.screen_resolution = screen.width + ' x ' + screen.height
    data.ts_finish = performance.now()
  }
}
