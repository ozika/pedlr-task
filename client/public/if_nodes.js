// Functions to hide and show cursor (important for rating trials)
var cursor_off = {
    type: 'call-function',
    func: function() {
        document.body.style.cursor= "none";
    }
}
var cursor_on = {
    type: 'call-function',
    func: function() {
        document.body.style.cursor= "auto";
    }
}

// If nodes to check the type of trial from the loaded pattern and then display the correct trial type
// If node: Free choice
var if_free = {
  // If the type of the trial is 'free', play a free choice trial including [Fixation -> Choice -> Feedback]
  timeline: [fixation, free, feedback],
  conditional_function: function(){
    var type = jsPsych.timelineVariable('type', true);
    if(type == 'free'){
      return true;
    } else {
      return false;
    }
  }
}

// If node: Forced choice
var if_forced = {
  timeline: [fixation, forced, feedback],
  conditional_function: function(){
    var type = jsPsych.timelineVariable('type', true);
    if(type == 'forced'){
      return true;
    } else {
      return false;
    }
  }
}

// If node: Estimation trials
var if_estimation = {
  //timeline: [fixation, estimation, feedback],
  // Show estimation trial, then feedback, turn cursor on before, and off afterwards
  timeline: [cursor_on, estimation, feedback, cursor_off],
  conditional_function: function(){
    var type = jsPsych.timelineVariable('type', true);
    if(type == 'estimation'){
      return true;
    } else {
      return false;
    }
  }
}

// If node: Break
var if_break = {
  timeline: [take_a_break],
  conditional_function: function(){
    if(jsPsych.timelineVariable('type', true) == 'break'){
      return true;
    } else {
      return false;
    }
  },
}
