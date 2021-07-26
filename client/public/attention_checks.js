// ------------------------ Question 1 ------------------------
// Question screen
var attention_q_1 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "What is the range of points you might get from a single choice?",
      name: 'range',
      options: [
        "a) 1-50",
        "b) 25-75",
        "c) 1-100",
        "d) 50-100"
      ],
      required: true
    }
  ],
  on_finish: function(data){
    data.type = 'attention_check',
    // Put in prefix of correct answer here ("/.../" around and "\" before brackets because of regular expression)
    data.correct = /c\)/.test(data.responses) // returns true or false
  }
}

// Screen to show in case of wrong answer
var fail_q_1 = {
  type: 'html-button-response',
  stimulus: function(){
    var html = "<h1>Wrong answer!</h1>"
    html += "<p><br></p>"
    html += "<p>The points you might get from choosing a single option can vary between 1 and 100.</p>"
    html += "<p>Some options will be more rewarding than others BUT you will NEVER get<br>less than 1 or more than 100 points from a single choice.</p>"
    return html
  },
  choices: ["Continue"],
  on_finish: function(data){
    data.type = "attention_fail"
  }
}

// Node to check if question was answered wrongly (and display fail screen in case)
var check_fail_q_1 = {
  timeline: [fail_q_1],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0]
    if(data.correct){
      return false;
    } else {
      return true;
    }
  }
}


// ------------------------ Question 2 ------------------------
var attention_q_2 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "During forced choice trials: what happens if you chose the non-framed option?",
      name: 'forced_wrong',
      options: [
        "a) I will get the points for the non-framed option",
        "b) I will see how many points I would have gotten, but I won't get them",
        "c) I will not get any points and also won't see how many points I would have gotten",
        "d) I will get the points for the framed option"
      ],
      required: true
    }
  ],
  on_finish: function(data){
    data.type = 'attention_check',
    // Put in prefix of correct answer here ("/.../" around and "\" before brackets because of regular expression)
    data.correct = /c\)/.test(data.responses);
  }
}

// Screen to show in case of wrong answer
var fail_q_2 = {
  type: 'html-button-response',
  stimulus: function(){
    var html = "<h1>Wrong answer!</h1>"
    html += "<p><br></p>"
    html += "<p>Forced choices have a framed and a non-framed option and will look like this:</p>"
    html += "<p><br></p>"
    html += "<img src='stimuli/a1_forced.png' style='width: 100px;'>";
    html += "<img src='stimuli/fixation.png' style='width: 100px;'>";
    html += "<img src='stimuli/a2.png' style='width: 100px;'>";
    html += "<p><br></p>"
    html += "<p>In case you will choose the non-framed option you will NOT GET ANY POINTS.</p>"
    html += "<p>In that case you will also NOT BE TOLD HOW MANY POINTS YOU WOULD HAVE GOTTEN for any of the choices.</p>"
    return html
  },
  choices: ["Continue"],
  on_finish: function(data){
    data.type = "attention_fail"
  }
}

// Node to check if question was answered wrongly (and display fail screen in case)
var check_fail_q_2 = {
  timeline: [fail_q_2],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0]
    if(data.correct){
      return false;
    } else {
      return true;
    }
  }
}

// ------------------------ Question 3 ------------------------
var attention_q_3 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Placeholder question. Just select a)",
      name: 'another',
      options: [
        "a) Neuroscience",
        "b) is",
        "c) mediocre",
        "d) - The Great Gigi"
      ],
      required: true
    }
  ],
  on_finish: function(data){
    data.type = 'attention_check',
    // Put in prefix of correct answer here (Pattern framed by "/.../" and "\" before brackets because of regular expression)
    data.correct = /a\)/.test(data.responses);
  }
}

// Screen to show in case of wrong answer
var fail_q_3 = {
  type: 'html-button-response',
  stimulus: function(){
    var html = "<h1>Wrong answer!</h1>"
    html += "<p><br></p>"
    html += "<p>Blabla</p>"
    return html
  },
  choices: ["Continue"],
  on_finish: function(data){
    data.type = "attention_fail"
  }
}

// Node to check if question was answered wrongly (and display fail screen in case)
var check_fail_q_3 = {
  timeline: [fail_q_3],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0]
    if(data.correct){
      return false;
    } else {
      return true;
    }
  }
}


// ------------------------  Performance for complete attention-check ------------------------

// Screen presented to person if attention check is failed
// Will also send participants back to Prolific with a fail code
var attention_failed = {
  type: 'html-keyboard-response',
  stimulus: 'You failed the attention check. You will be redirected to Prolific shortly.',
  // on_finish: function(data){
  //   completion_code = 'FAILED_ATTENTION_CHECK',
  //   SendToProlific(),
  //   senddataNend()
  // }
  on_finish: function(data){
    data.type = "experiment_fail";
    var sum_of_correct = jsPsych.data.get().filter({type: 'attention_check'}).select('correct')
    var sum_of_correct = sum_of_correct.sum();
    data.sum_of_correct = sum_of_correct;
    jsPsych.data.displayData();
  }
}

// If node: checking if attention questions were answered correctly
var if_attention_failed = {
  timeline: [attention_failed],
  conditional_function: function(){
    // Sum up number of correct answers across all attention questions
    var data = jsPsych.data.get().filter({type: 'attention_check'}).select('correct')
    var sum_of_correct = data.sum();
    // Fail threshold: (Minimum of correct answers)
    if(sum_of_correct < 3){
      return true;
    } else {
      return false;
    }
  }
}

// Full attention check:
// Presenting question after question with in-between fail check
// After all questions: check for overall performance
// If overall performance is too bad (more than 2 errors): Exit experiment
var attention_check = {
  timeline: [
    attention_q_1,
    check_fail_q_1,
    attention_q_2,
    check_fail_q_2,
    attention_q_3,
    check_fail_q_3,
    if_attention_failed
  ],
}
