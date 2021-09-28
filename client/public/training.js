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
        var html = "<h1>Hello and thank you for taking</h1>"
        html += "<h1>part in our study! </h1>"
        html += "<p><br></p>"
        html += "<p>In this study we examine how humans make reward-based decisions.<br>To this end, we developed a task in which you will have to make choices and collect as many points as possible.</p>"
        html += "<p>We will now start a <b>TRAINING</b> that will show you how the task works.</p>"
        html += "<p>Remember that this is just the training!<br>Any points you collect during the training <b>WILL NOT COUNT TOWARDS YOUR FINAL SCORE</b> and therefore not your bonus payment!<br>For now, we just want to teach you what to do!"
        html += "<p><br></p>"
        html += "<p>First, we would like to ask you to place your<br><b>LEFT INDEX FINGER</b> on the <b>[ F ]</b> key on your keyboard and your<br><b>RIGHT INDEX FINGER</b> on the <b>[ J ]</b> key.</p>"
        html += "<p><br></p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.stimulus = 'train_screen_greet'
        data.type = 'train_screen_greet'
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_screen_free = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_free'
      },
      stimulus: function(){
        var html = "<p>During the task, you will have to chose between <b>TWO AVAILABLE OPTIONS</b> which are <b>SEPARATED BY A CROSS</b>.<br>There are <b>THREE OPTIONS OVERALL</b>, but you will always be asked to chose between two at the time.<br>In this training the three options will be represented by the letters A, B, and C.<br>Later in the <b>REAL EXPERIMENT</b> the options will be represented by <b>DIFFERENT SYMBOLS</b>!</p>"
        html += "<p>For this training it will look similar to what you see below:</p>"
        html += "<p><br></p>"
        html += "<img src='stimuli/a1.png' style='width: 100px;'>";
        html += "<img src='stimuli/fixation.png' style='width: 100px;'>";
        html += "<img src='stimuli/a2.png' style='width: 100px;'>";
        html += "<p><br></p>"
        html += "<p>Here you have an <b>OPTION A</b> (on the left side) and an <b>OPTION B</b> (on the right side).<br>The cross in the middle will always stay on screen so you can focus on it with your eyes.</p>"
        html += "<p>You will have to <b>SELECT</b> one of these two options by pressing the <b>KEY ON THE RESPECTIVE SIDE</b>:</p>"
        html += "<p>Left index finger, <b>[ F ]</b>: Select left option (here A)<br>Right index finger, <b>[ J ]</b>: Select right option (here B)</p>"
        html += "<p><br></p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_screen_points = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_points'
      },
      stimulus: function(){
        var html = "<p>Every time you make a <b>CHOICE</b> you will be <b>REWARDED WITH POINTS</b>:</p>"
        html += "<p>We will immediately show you how many points you got for your choice.<br>You will get <b>BETWEEN 0 AND 100 POINTS</b> for the option you selected.<br>You will <b>NEVER</b> see how many points the other option would have given you.</p>"
        html += "<p>The amount of points you get from the same option will <b>VARY</b>!<br>Your goal will be to find out which of the available options to chose to get the most points possible.</p>"
        html += "<p><br></p>"
        html += "<p>You have <b>3 SECONDS</b> to make a choice.<br>If you should take longer than 3 seconds <b>YOU WILL NOT GET ANY POINTS</b> for your choice so please answer within the 3 seconds.<br>If you took longer than 3 seconds we will show this to you with a 'Please respond faster' prompt.</p>"
        html += "<p><br></p>"
        html += "<h3>The more points you will get the more pay you will receive so try to get a high score! The bonus payment will range between 0 and 3 GBP based on the amount of points you collect.</h3>"
        html += "<p><br></p>"
        html += "<p>We will now go through some examples.</p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue and play through some examples.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_screen_forced = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_forced'
      },
      stimulus: function(){
        var html = "<p>Good job! What you just did will be the main part of the task.</p>"
        html += "<p>However, sometimes you will encounter a <b>FRAME</b> around an option:</p>"
        html += "<p><br></p>"
        html += "<img src='stimuli/a3_forced.png' style='width: 100px;'>";
        html += "<img src='stimuli/fixation.png' style='width: 100px;'>";
        html += "<img src='stimuli/a1.png' style='width: 100px;'>";
        html += "<p><br></p>"
        html += "<p>This means that you <b>HAVE TO CHOOSE</b> the <b>FRAMED OPTION</b>.</p>"
        html += "<p>If you correctly choose the framed option, you will get the points for the framed option.<br>If you chose the option without the frame you will <b>NOT GET ANY POINTS</b> so remember to chose the framed option.</p>"
        html += "<p><br></p>"
        html += "<p>Also for these choices you have a time limit of <b>3 SECONDS</b>.<br>If you take too long for a choice you will not get any points and we will let you know with a 'Please respond faster' prompt.</p>"
        html += "<p><br></p>"
        html += "<p>Let's go through some examples in the next screen.<br>Remember that this is <b>JUST THE TRAINING</b>, so feel free to make a wrong choice on purpose!</p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue any play through some examples.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_screen_estimation = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_estimation'
      },
      stimulus: function(){
        var html = "<p>Finally, we will sometimes ask you <b>WHAT YOU THINK THE SCORE WOULD BE</b> if you would chose a certain option.</p>"
        html += "<p>We will show one option to you together with <b>two sliders:</b><br>1. To tell us how many points you think you would get from this option.<br>2. To tell us how much you think it might vary.</p>"
        html += "<img src='stimuli/training_slider.png' style='width: 300px; border: 1px solid black;'>";
        html += "<p>You can <b>USE YOUR MOUSE</b> to move the sliders.</p>"
        html += "<p>For both sliders we are asking for a <b>rough estimate</b>, so don't be too concerned about a few points in accuracy. If we think you are taking too long we will let you know.</p>"
        html += "<p>Please remember that there are <b>no right or wrong answers</b> and you <b>CANNOT EARN ANY POINTS</b> with your estimation! We still ask you to be as accurate as possible. Let's try it out with a few examples!</p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue with some examples.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_screen_break = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_break'
      },
      stimulus: function(){
        var html = "<p>From time to time you will get the option to <b>TAKE A SHORT BREAK</b>.<br>You will recognize these breaks by this symbol and a text telling you about the break:</p>"
        html += "<img src='stimuli/break.png'; style='width: " + 300/100 * img_scale+"px'>"
        html += "<p>Feel free to rest your hands and eyes during these breaks.<br>You can continue with the task whenever you are ready by pressing <b>[ F ]</b> or <b>[ J ]</b>.</p>"
        html += "<p>During these breaks a countdown of 2 minutes will appear after which the experiment will continue automatically. You don't need to wait the full 2 minutes. Just continue whenever you feel ready.</p>"
        html += "<p><br></p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_second_run = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_second_run'
      },
      stimulus: function(){
        var html = "<p>In the real experiment the different options will be randomly selected from a few Japanese Hiragana syllables:</p>"
        html += "<img src='stimuli/s1.png' style='width: 100px;'>";
        html += "<img src='stimuli/s2.png' style='width: 100px;'>";
        html += "<img src='stimuli/s3.png' style='width: 100px;'>";
        html += "<img src='stimuli/s4.png' style='width: 100px;'>";
        html += "<img src='stimuli/s5.png' style='width: 100px;'>";
        html += "<img src='stimuli/s6.png' style='width: 100px;'>";
        html += "<p><br></p>"
        html += "<p><b>HALFWAY THROUGH</b> the task we will <b>CHANGE THE AVAILABLE THREE OPTIONS</b><br>which also give <b>DIFFERENT AMOUNTS OF POINTS</b>.</p>"
        html += "<p>The task will work exactly the same, also for the new three options!</p>"
        html += "<p>Before that happens we will notify you and also give you some time for another break.</p>"
        html += "<p><br></p>"
        html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue.</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

var train_screen_last = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_last'
      },
      stimulus: function(){
        var html = "<h3>You finished the training!</h3>"
        html += "<p><br></p>"
        html += "<p>You can now get started with the task!</p>"
        html += "<p>The options A, B, and C are now represented by <b>DIFFERENT SYMBOLS</b> but everything works exactly as we showed you during the training.</p>"
        html += "<p>If you are still not quite sure what to do you can <b>REPEAT THIS TUTORIAL</b> by pressing <b>[ F ]</b> on your keyboard.<br>If you want to <b>CONTINUE TO THE TASK</b>, please press <b>[ J ]</b> on your keyboard.</p>"
        html += "<p><br></p>"
        html += "<p>Have fun and thank you for your participation!</p>"
        html += "<p><br><br>Press <b>[ F ]</b> to <b>REPEAT</b> this tutorial</p>"
        html += "<p>Press <b>[ J ]</b> to <b>CONTINUE</b> with the task</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
    }
  ]
}

// Alternative ending screen for repetition of training
var train_screen_repeat_end = {
  timeline: [
    {
      type: 'html-keyboard-response',
      data: {
        type: 'train_screen_repeat_end'
      },
      stimulus: function(){
        var html = "<h3>You finished the training!</h3>"
        html += "<p><br></p>"
        html += "<p>You can now get started with the task!</p>"
        html += "<p>The options A, B, and C are now represented by <b>DIFFERENT SYMBOLS</b> but everything works exactly as we showed you during the training.</p>"
        html += "<p>We would now ask you to continue with the task by pressing either <b>[ F ]</b> or <b>[ J ]</b> on your keyboard.</p>"
        html += "<p><br></p>"
        html += "<p>Have fun and thank you for your participation!</p>"
        html += "<p><br><br>Press <b>[ F ]</b> or <b>[ J ]</b> to <b>CONTINUE</b> with the task</p>"
        return html
      },
      choices: ['f', 'j'],
      on_finish: function(data){
        data.ts_finish = performance.now()
      }
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
