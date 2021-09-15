// Estimation trials
// var estimation = {
//   timeline: [
//     {
//       type: 'html-slider-response',
//       stimulus: function(){
//         var html = "<img src='"+jsPsych.timelineVariable('stimulus_estimation', true)+"' style='margin:0px "+50/100 * img_scale+"px; width: "+1.5 * 400/100 * img_scale+"px;'>";
//         return html;
//       },
//       labels: ['0', '20', '40', '60', '80', '100'],
//       //labels: ['0','100'],
//       step: 1,
//       prompt: "<p>What reward will you get?</p>",
//       trial_duration: 10000,
//       require_movement: true,
//       on_finish: function(data){
//         // Add constant variables
//         data.type = jsPsych.timelineVariable('type', true)
//         data.stimulus_left = jsPsych.timelineVariable('stimulus_left', true)
//         data.stimulus_right = jsPsych.timelineVariable('stimulus_right', true)
//         data.outcome_left = jsPsych.timelineVariable('outcome_left', true)
//         data.outcome_right = jsPsych.timelineVariable('outcome_right', true)
//         data.forced = jsPsych.timelineVariable('forced', true)
//         data.stimulus_estimation = jsPsych.timelineVariable('stimulus_estimation', true)
//         if(data.response != null){
//           data.estimation = data.response
//         } else if(data.response == null){
//           data.estimation = 'n/a'
//         }
//       }
//     }
//   ]
// }

// rating rewards: multiple sliders
var labels_est1 = ["0 points","","100 points"]; // define the labels
var labels_est2 = ["5","10","15","20","25","30","35","40","45","50"]; // changed from % to points

// define the sliders parameters
var start = 50; var min = 0; var max = 100; var step = 1;

var estimation = {
  timeline: [
    {
      type: 'multiple-slider',
      preamble: function(){
        var html = "<img src='"+jsPsych.timelineVariable('stimulus_estimation', true)+"' style='margin:0px "+50/100 * img_scale+"px; width: "+1.5 * 400/100 * img_scale+"px;'>";
        return html;
      },
      questions: [
        {
          prompt: "<p>What reward will you get?</p>",
          name: 'estimation_reward',
          labels: labels_est1,
          slider_start: start,
          min: min,
          max: max,
          step: step
        },
        {
          prompt: "<p>Within what range do you expect most rewards to <b><u>roughly</u></b> lie? </p>",
          name: 'estimation_range',
          labels: labels_est2,
          slider_start: start,
          min: 5,
          max: 50,
          step: step
        },
      ],
      randomize_question_order: false,
      show_value: true,
      require_movement: false,
      slider_width: 600,
      on_finish: function(data){
        // Add constant variables
        data.type = jsPsych.timelineVariable('type', true)
        data.stimulus_left = jsPsych.timelineVariable('stimulus_left', true)
        data.stimulus_right = jsPsych.timelineVariable('stimulus_right', true)
        data.outcome_left = jsPsych.timelineVariable('outcome_left', true)
        data.outcome_right = jsPsych.timelineVariable('outcome_right', true)
        data.forced = jsPsych.timelineVariable('forced', true)
        data.stimulus_estimation = jsPsych.timelineVariable('stimulus_estimation', true)
        // Save response
        if(data.response_reward != null){
          data.estimation_reward = data.response_reward
          data.estimation_range = data.response_range
        } else if(data.response_reward == null){
          data.estimation_reward = 'n/a'
          data.estimation_range = 'n/a'
        }
      }
    }
  ]
};
