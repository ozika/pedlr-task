// Break screen
var take_a_break = {
  timeline: [
    {
      type: 'html-keyboard-response',
      on_start: function(){
        var wait_time = 2 * 60 * 1000; // in milliseconds
        var start_time = performance.now();
        // Declare countdown interval in global scope
        cd_interval = setInterval(function(){
          var time_left = wait_time - (performance.now() - start_time);
          var minutes = Math.floor(time_left / 1000 / 60);
          var minutes_str = minutes.toString().padStart(2,'0');
          var seconds = Math.floor((time_left - minutes*1000*60)/1000);
          var seconds_str = seconds.toString().padStart(2,'0');
          // Display as html div called 'clock_short'
          document.querySelector('#clock_short').innerHTML = minutes_str + ':' + seconds_str
        }, 250);
      },
      stimulus: function(){
        var html = "<img src='stimuli/break.png'; style='width: " + 300/100 * img_scale+"px'>"
        html += "<p id='clock_short'></p>"
        html += "<p>Please take a short break. You can continue whenever you feel like it.</p>"
        html += "<p>Press <b>[ F ]</b> or <b>[ J ]</b> at any time when you are ready to continue</p>"
        return html;
      },
      choices: ['f', 'j'],
      // Two min max
      trial_duration: 2 * 60 * 1000,
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
        data.ts_finish = performance.now()
        // At the end of trial stop countdown interval in background
        clearInterval(cd_interval);
      }
    }
  ]
}
