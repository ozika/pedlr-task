// ------------------------ Intro screen ----------------------
var attention_intro = {
    type: 'html-keyboard-response',
    stimulus: function(){
      var html = "<h1>Before we start the experiment, we would ask you to answer a few simple questions about the experiment.</h1>"
      html += "<p><br></p>"
      html += "<p>We will ask you <b>THREE</b> multiple choice questions about the experiment.<br>Each of these questions will be very easy to answer if you read the study information and completed the training.<br>Each multiple choice question will have four possible answers.<br>You can only choose one of these answers and <b>ONLY ONE</b> of these answers will be correct.</p>"
      html += "<p>You can select your answer to each question by clicking on it.<br>Afterwards you can click the 'Continue' button to submit your answer and go to the next question.</p>"
      html += "<p><br></p>"
      html += "<p>Please press <b>[ F ]</b> or <b>[ J ]</b> on your keyboard to continue with the questions.</p>"
      return html
    },
    choices: ['f', 'j'],
    on_finish: function(data){
      data.stimulus = 'attention_intro'
      data.type = 'attention_intro'
    }
  ]
}

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
    html += "<p>Some options will be more rewarding than others <b>BUT</b> you will <b>NEVER</b> get<br>less than 1 or more than 100 points from any choice.</p>"
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
      prompt: "You see a trial in which one option has a frame around it: what happens if you chose the non-framed option?",
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
    html += "<p>Choices involving a framed option will look like this:</p>"
    html += "<p><br></p>"
    html += "<img src='stimuli/a1_forced.png' style='width: 100px;'>";
    html += "<img src='stimuli/fixation.png' style='width: 100px;'>";
    html += "<img src='stimuli/a2.png' style='width: 100px;'>";
    html += "<p><br></p>"
    html += "<p>In case you will choose the non-framed option you will <b>NOT GET ANY POINTS</b>.</p>"
    html += "<p>In that case you will also <b>NOT BE TOLD HOW MANY POINTS YOU WOULD HAVE GOTTEN</b> for any of the choices.</p>"
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
    completion_code = 'FAILED_ATTENTION';
    senddataNend()
    //jsPsych.data.displayData();
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
// If overall performance is too bad (more than 1 error): Exit experiment
var attention_check = {
  timeline: [
    attention_intro,
    attention_q_1,
    check_fail_q_1,
    attention_q_2,
    check_fail_q_2,
    attention_q_3,
    check_fail_q_3,
    if_attention_failed
  ],
}
