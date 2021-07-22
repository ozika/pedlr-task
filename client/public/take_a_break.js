// Break screen
var take_a_break = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<img src='stimuli/break.png'; style='width: " + 300/100 * img_scale+"px'>"
        html += "<p>Please take a short break</p>"
        html += "<p>Press either 'f' or 'j' when you are ready to continue</p>"
        return html;
      },
      choices: ['f', 'j'],
      trial_duration: null,
      response_ends_trial: true,
      on_finish: function(data){
        // Add constant variables
        data.type = 'break'
        data.stimulus_left = 'n/a'
        data.stimulus_right = 'n/a'
        data.outcome_left = 'n/a'
        data.outcome_right = 'n/a'
        data.forced = 'n/a'
        data.stimulus_estimation = 'n/a'
        data.choice = 'n/a'
        data.outcome = 'n/a'
        data.estimation = 'n/a'
      }
    }
  ]
}
