// Estimation trials
var estimation = {
  timeline: [
    {
      type: 'html-slider-response',
      stimulus: function(){
        var html = "<img src='"+jsPsych.timelineVariable('stimulus_estimation', true)+"' style='margin:0px "+50/100 * img_scale+"px; width: "+1.5 * 400/100 * img_scale+"px;'>";
        return html;
      },
      labels: ['0', '20', '40', '60', '80', '100'],
      //labels: ['0','100'],
      step: 1,
      prompt: "<p>What reward will you get?</p>",
      trial_duration: 10000,
      require_movement: true,
      on_finish: function(data){
        // Add constant variables
        data.type = jsPsych.timelineVariable('type', true)
        data.stimulus_left = jsPsych.timelineVariable('stimulus_left', true)
        data.stimulus_right = jsPsych.timelineVariable('stimulus_right', true)
        data.outcome_left = jsPsych.timelineVariable('outcome_left', true)
        data.outcome_right = jsPsych.timelineVariable('outcome_right', true)
        data.forced = jsPsych.timelineVariable('forced', true)
        data.stimulus_estimation = jsPsych.timelineVariable('stimulus_estimation', true)
        if(data.response != null){
          data.estimation = data.response
        } else if(data.response == null){
          data.estimation = 'n/a'
        }
      }
    }
  ]
}
