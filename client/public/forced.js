// Forced choice trials
var forced = {
  timeline: [
    {
      // Trial presenting two stimuli
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<img src='"+jsPsych.timelineVariable('stimulus_left', true)+"' style='margin:0px "+50/100 * img_scale+"px; width: "+400/100 * img_scale+"px;'>";
        html += "<img src='stimuli/fixation.png' style='margin:0px "+50/100 * img_scale+"px; width: "+400/100 * img_scale+"px;'>";
        html += "<img src='"+jsPsych.timelineVariable('stimulus_right', true)+" ' style='margin:0px "+50/100 * img_scale+"px; width: "+400/100 * img_scale+"px;'>";
        return html;
      },
      trial_duration: 3000,
      response_ends_trial: true,
      choices: ['f', 'j'],
      // Record pressed button and associated reward
      on_finish: function(data){
        // Add constant variables
        data.type = jsPsych.timelineVariable('type', true)
        data.stimulus_left = jsPsych.timelineVariable('stimulus_left', true)
        data.stimulus_right = jsPsych.timelineVariable('stimulus_right', true)
        data.outcome_left = jsPsych.timelineVariable('outcome_left', true)
        data.outcome_right = jsPsych.timelineVariable('outcome_right', true)
        data.forced = jsPsych.timelineVariable('forced', true)
        data.stimulus_estimation = jsPsych.timelineVariable('stimulus_estimation', true)
        data.estimation = 'n/a'
        data.ts_finish = performance.now()
        data.comp_number = jsPsych.timelineVariable('comp_number', true)
        data.task_version = jsPsych.timelineVariable('task_version', true)
        data.block_n = jsPsych.timelineVariable('block_n', true)
        data.is_rare = jsPsych.timelineVariable('is_rare', true)
        data.bad_forced = jsPsych.timelineVariable('bad_forced', true)
        // Check pressed button
        if(data.key_press == 70){
          data.choice = 'left'
        } else if(data.key_press == 74){
          data.choice = 'right'
        } else {
          data.choice = 'n/a'
        }
        // Check if pressed button was forced
        if(data.choice == jsPsych.timelineVariable('forced', true)){
          data.outcome = jsPsych.timelineVariable('outcome_' + data.choice, true)
        } else {
          data.outcome = 'n/a'
        }
      }
    }
  ]
}
