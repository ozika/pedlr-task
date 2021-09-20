// Fixation cross "trials"
var fixation = {
  timeline: [
    {
      // Fixation cross ITI
      type: 'html-keyboard-response',
      stimulus: function(){
        if(jsPsych.timelineVariable('type', true) == 'estimation'){
          var html = null;
        } else{
          var html = "<img src='stimuli/fixation.png' style='margin:0px "+50/100 * img_scale+"px; width: "+400/100 * img_scale+"px;'>";
        }
        return html;
      },
      trial_duration: function(){
        if(jsPsych.timelineVariable('type', true) == 'estimation'){
          return 0;
        } else {
          return 1000;
        }
      },
      choices: jsPsych.NO_KEYS,
      on_finish: function(data){
        // Add constant variables
        data.type = 'fixation'
        data.stimulus_left = 'n/a'
        data.stimulus_right = 'n/a'
        data.outcome_left = 'n/a'
        data.outcome_right = 'n/a'
        data.forced = 'n/a'
        data.stimulus_estimation = 'n/a'
        data.choice = 'n/a'
        data.outcome = 'n/a'
        data.estimation = 'n/a'
        data.ts_finish = performance.now()
      }
    }
  ]
}
