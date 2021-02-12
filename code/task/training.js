// Training trials for each type with predetermined rewards
var train_free = {
  timeline: [if_free],
  timeline_variables: [
    {type: 'free', stimulus_left: 'stimuli/a1.png', stimulus_right: 'stimuli/a2.png', outcome_left: 94, outcome_right: 26, forced: 'n/a', stimulus_estimation: 'n/a'},
    {type: 'free', stimulus_left: 'stimuli/a3.png', stimulus_right: 'stimuli/a1.png', outcome_left: 12, outcome_right: 33, forced: 'n/a', stimulus_estimation: 'n/a'},
    {type: 'free', stimulus_left: 'stimuli/a3.png', stimulus_right: 'stimuli/a2.png', outcome_left: 9, outcome_right: 19, forced: 'n/a', stimulus_estimation: 'n/a'},
    {type: 'free', stimulus_left: 'stimuli/a1.png', stimulus_right: 'stimuli/a3.png', outcome_left: 57, outcome_right: 72, forced: 'n/a', stimulus_estimation: 'n/a'}
  ]
}

var train_forced = {
  timeline: [if_forced],
  timeline_variables: [
    {type: 'forced', stimulus_left: 'stimuli/a1_forced.png', stimulus_right: 'stimuli/a2.png', outcome_left: 42, outcome_right: 0, forced: 'left', stimulus_estimation: 'n/a'},
    {type: 'forced', stimulus_left: 'stimuli/a3_forced.png', stimulus_right: 'stimuli/a1.png', outcome_left: 64, outcome_right: 0, forced: 'left', stimulus_estimation: 'n/a'},
    {type: 'forced', stimulus_left: 'stimuli/a3.png', stimulus_right: 'stimuli/a2_forced.png', outcome_left: 0, outcome_right: 38, forced: 'right', stimulus_estimation: 'n/a'},
    {type: 'forced', stimulus_left: 'stimuli/a1.png', stimulus_right: 'stimuli/a3_forced.png', outcome_left: 0, outcome_right: 47, forced: 'right', stimulus_estimation: 'n/a'}
  ]
}

var train_estimation = {
  timeline: [if_estimation],
  timeline_variables: [
    {type: 'estimation', stimulus_left: 'n/a', stimulus_right: 'n/a', outcome_left: 'n/a', outcome_right: 'n/a', forced: 'n/a', stimulus_estimation: 'stimuli/a1.png'},
    {type: 'estimation', stimulus_left: 'n/a', stimulus_right: 'n/a', outcome_left: 'n/a', outcome_right: 'n/a', forced: 'n/a', stimulus_estimation: 'stimuli/a2.png'},
    {type: 'estimation', stimulus_left: 'n/a', stimulus_right: 'n/a', outcome_left: 'n/a', outcome_right: 'n/a', forced: 'n/a', stimulus_estimation: 'stimuli/a3.png'},
  ]
}


// Training text screens:
var train_screen_greet = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>Hello and thank you for taking part in this experiment! "
        html += "This is a placeholder for a task discription !</p>"
        html += "<p>Next we will show you how the task works.</p>"
        html += "<p><br></p>"
        html += "<p>First, we would like to ask you to place your index fingers of both hands on the f and the j key on your keyboard!</p>"
        html += "<p><br></p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_screen_free = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>During the task, we will mainly ask you to make a decision between two available options.</p>"
        html += "<p>It will look like this:</p>"
        html += "<p><br></p>"
        html += "<img src='stimuli/a1.png' style='width: 100px;'>";
        html += "<img src='stimuli/fixation.png' style='width: 100px;'>";
        html += "<img src='stimuli/a2.png' style='width: 100px;'>";
        html += "<p><br></p>"
        html += "<p>Here you have a left option (A) and a right option (B). The cross in the middle is there so you can focus on it with your eyes.</p>"
        html += "<p>You can decide between these two options by pressing [f] for the left option or [j] for the option to the right.</p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_screen_points = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>Every time you make a choice you will get some points. These will range between 1 and 100. We will show you how many points you got every time you make a decision.</p>"
        html += "<p>Each option will sometimes give you more and sometimes less points! Your goal is to find out which option to chose to get the most points possible!</p>"
        html += "<p><br>The more points you will get the more pay you will receive so try to get a high score!<br></p>"
        html += "<p>Let's give it a few trys, shall we?</p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_screen_forced = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>Good job! This will be the main part of the task.</p>"
        html += "<p>Sometimes you will encounter a frame around an option:</p>"
        html += "<p><br></p>"
        html += "<img src='stimuli/a1_forced.png' style='width: 100px;'>";
        html += "<img src='stimuli/fixation.png' style='width: 100px;'>";
        html += "<img src='stimuli/a2.png' style='width: 100px;'>";
        html += "<p><br></p>"
        html += "<p>This means that you HAVE TO chose the framed option. You will still get the points for the framed option. If you chose the option without the frame you will not get any points so please chose the framed option.</p>"
        html += "<p>Let's give it a try!</p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_screen_estimation = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>Awesome! This is going well!</p>"
        html += "<p>Finally, we will sometimes ask you what you think the score will be if you would chose a certain option. This will look something like this:</p>"
        html += "<p><br></p>"
        html += "<img src='stimuli/training_slider.png' style='width: 400px;'>";
        html += "<p><br></p>"
        html += "<p>Here you can use your mouse to move the slider and tell us what you think the points will be! You will have to move the slider at least once. You can submit your choice by clicking on the 'Continue' button.</p>"
        html += "<p>Let's try it out!</p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_screen_break = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>From time to time you will get the option to take a short break.</p>"
        html += "<img src='stimuli/break.png'; style='width: " + 300/100 * img_scale+"px'>"
        html += "<p>Feel free to rest your hands and eyes during these breaks and continue when you are ready!</p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_second_run = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>Halfway through the task we will change the available three options which also give different amounts of points.</p>"
        html += "<p>The task works exactly the same, also for the new three options!</p>"
        html += "<p>Before that happens we will notify you and also give you some time for another break.</p>"
        html += "<p>Please press 'f' or 'j' on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

var train_screen_last = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>And thats it!</p>"
        html += "<p>You can now get started with the task!</p>"
        html += "<p>The options there are represented by different symbols but everything works exactly as we showed you.</p>"
        html += "<p>If you are still not quite sure what to do you can REPEAT THIS TUTORIAL by pressing 'f' on your keyboard.</p>"
        html += "<p>If you want to CONTINUE TO THE TASK, please press 'j' on your keyboard.</p>"
        html += "<p>Have fun and thank you for your participation!</p>"
        html += "<p><br><br>Press 'f' to repeat this tutorial</p>"
        html += "<p>Press 'j' to continue with the task</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

// Alternative ending screen for repetition of training
var train_screen_repeat_end = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var html = "<p>And thats it!</p>"
        html += "<p>You can now get started with the task!</p>"
        html += "<p>The options there are represented by different symbols but everything works exactly as we showed you.</p>"
        html += "<p>We would now ask you to continue with the task by pressing either the 'f' or the 'j' key on your keyboard.</p>"
        html += "<p>Have fun and thank you for your participation!</p>"
        html += "<p><br><br>Press 'f' or 'j' to continue with the task</p>"
        return html
      },
      choices: ['f', 'j']
    }
  ]
}

// if node to repeat training once
var if_repeat_training = {
  timeline: [
    train_screen_greet,
    train_screen_free,
    train_screen_points,
    train_free,
    train_screen_forced,
    train_forced,
    train_screen_estimation,
    train_estimation,
    train_screen_break,
    train_screen_repeat_end
  ],
  conditional_function: function(){
    if(jsPsych.data.get().last(1).values()[0].key_press == 70){
      return true;
    } else if(jsPsych.data.get().last(1).values()[0].key_press == 74) {
      return false;
    }
  },
  on_finish: function(data){
    data.repeat_train = 1
  }
}

// Training procedure
var training = {
  timeline: [
    train_screen_greet,
    train_screen_free,
    train_screen_points,
    train_free,
    train_screen_forced,
    train_forced,
    train_screen_estimation,
    train_estimation,
    train_screen_break,
    train_second_run,
    train_screen_last,
    if_repeat_training
  ]
}
