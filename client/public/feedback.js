// Feedback "trials"
var feedback = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        // Feedback for free choice trials [too slow, outcome]
        if(jsPsych.data.get().last(1).values()[0].type == 'free'){
          if(jsPsych.data.get().last(1).values()[0].choice == 'n/a'){
            var html = "<p>Please respond faster</p>";
          } else {
            var html = "<p>"+jsPsych.data.get().last(1).values()[0].outcome+"</p>";
          }
        // Feedback for forced choice trials [too slow, wrong choice, outcome]
        } else if(jsPsych.data.get().last(1).values()[0].type == 'forced'){
          if(jsPsych.data.get().last(1).values()[0].choice == 'n/a'){
            var html = "<p>Please respond faster</p>";
          } else if(jsPsych.data.get().last(1).values()[0].choice != jsPsych.data.get().last(1).values()[0].forced){
            var html = "<p>Please always select the framed stimulus</p>";
          } else {
            var html = "<p>"+jsPsych.data.get().last(1).values()[0].outcome+"</p>";
          }
        // Feedback for estimation trials [too slow]
        } else if(jsPsych.data.get().last(1).values()[0].type == 'estimation'){
          if(jsPsych.data.get().last(1).values()[0].estimation == 'n/a'){
            var html = "<p>Please respond faster</p>";
          } else {
            var html = 'n/a'
          }
        }
        return html;
      },
      trial_duration: function(){
        // Show slightly longer feedback when answer is wrong or timed out
        if(jsPsych.data.get().last(1).values()[0].choice == 'n/a'){
          return 2000;
        } else if(jsPsych.data.get().last(1).values()[0].type == 'forced' && jsPsych.data.get().last(1).values()[0].choice != jsPsych.data.get().last(1).values()[0].forced){
          return 2000;
        // Don't show feedback on correct estimation trials (duration = 0)
        } else if(jsPsych.data.get().last(1).values()[0].type == 'estimation' && jsPsych.data.get().last(1).values()[0].response != null){
          return 0;
        // COnstant feedback time for all corect trials
        } else {
          return 1000;
        }
      },
      choices: jsPsych.NO_KEYS,
      on_finish: function(data){
        // Add constant variables
        data.stimulus_left = 'n/a'
        data.stimulus_right = 'n/a'
        data.outcome_left = 'n/a'
        data.outcome_right = 'n/a'
        data.forced = 'n/a'
        data.stimulus_estimation = 'n/a'
        data.choice = 'n/a'
        data.outcome = 'n/a'
        data.estimation = 'n/a'
        if(jsPsych.timelineVariable('type', true) == 'free'){
          data.type = 'feedback_free'
        } else if(jsPsych.timelineVariable('type', true) == 'forced'){
          data.type = 'feedback_forced'
        } else if(jsPsych.timelineVariable('type', true) == 'estimation'){
          data.type = 'feedback_estimation'
        }

      }
    }
  ]
}
