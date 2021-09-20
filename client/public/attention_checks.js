
// ------------------------ Intro screen ----------------------
var attention_intro = {
    type: 'html-button-response',
    stimulus: function(){
      var html = "<h1>Before we start the experiment</h1>"
      html += "<p>we ask you to answer a <b>FEW SIMPLE QUESTIONS</b> about the experiment.</p>"
      html += "<p><br></p>"
      html += "<p>We will ask you <b>THREE</b> multiple choice questions about the experiment.<br>Each of these questions will be very easy to answer if you read the study information.</p>"
      html += "<p><br></p>"
      html += "<p>Each multiple choice question will have four possible answers.<br>You can only choose one of these answers and <b>ONLY ONE</b> of these answers will be correct.</p>"
      html += "<p><br></p>"
      html += "<p>You can select your answer to each question by clicking on it.<br>Afterwards you can click the 'Continue' button to submit your answer and go to the next question.<br>We ask you to answer <b>AT LEAST TWO</b> of the questions correctly to continue with the experiment</p>"
      html += "<p><br></p>"
      html += "<p>Click the 'Continue' button below to start with the questions.</p>"
      return html
    },
    choices: ['Continue'],
    on_finish: function(data){
      data.stimulus = 'attention_intro'
      data.type = 'attention_intro'
    }
}

// ------------------------ Question 1 ------------------------
// Question screen
var attention_q_1 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "<b>Question 1:</b> What is the range of points you might get from a single choice?",
      name: 'range',
      options: [
        "a) 0-50",
        "b) 25-75",
        "c) 0-100",
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
    html += "<p>The points you might get from choosing a single option can vary between 0 and 100.</p>"
    html += "<p>Some options will be more rewarding than others <b>BUT</b> you will <b>NEVER</b> get<br>less than 0 or more than 100 points from any choice.</p>"
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
      prompt: "<b>Question 2:</b> Please complete the following sentence: Every time I choose a certain option...",
      name: 'points_vary',
      options: [
        "a) ...I will get the same amount of points.",
        "b) ...the points I get will vary."
      ],
      required: true
    }
  ],
  on_finish: function(data){
    data.type = 'attention_check',
    // Put in prefix of correct answer here ("/.../" around and "\" before brackets because of regular expression)
    data.correct = /b\)/.test(data.responses);
  }
}

// Screen to show in case of wrong answer
var fail_q_2 = {
  type: 'html-button-response',
  stimulus: function(){
    var html = "<h1>Wrong answer!</h1>"
    html += "<p><br></p>"
    html += "<p>You will not get the exact same amount of points every time you choose a certain option.</p>"
    html += "<p>The points will very. For example, if you choose option A in one of the questions you might get 26 points. But the next time you choose it you might get 34 points.</p>"
    html += "<p>Remember that on average one of the two presented options will always give more points than the other option!</p>"
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
      prompt: "<b>Question 3:</b> In a special type of question called 'Guided choices' one of the two options will be highlighted. What will you have to do when you see a highlighted option?",
      name: 'guided_todo',
      options: [
        "a) I will have to choose the highlighted option",
        "b) I will have to choose the non-highlighted option"
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
    html += "<p>During so-called 'Guided choices' where one option is highlighted you will need to <b>choose the highlighted option</b>. Otherwise you will not get any points.</p>"
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

// ------------------------ Question 4 ------------------------
var attention_q_4 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "<b>Question 4:</b> In another special type of question called 'Estimation' we will show only a single option to you. There are no correct of false answers during these questions but instead we ask you to estimate something. What will you have to estimate during these questions?",
      name: 'estimate_todo',
      options: [
        "a) How often this option was already presented",
        "b) How many points I would get if I would choose this option"
      ],
      required: true
    }
  ],
  on_finish: function(data){
    data.type = 'attention_check',
    // Put in prefix of correct answer here (Pattern framed by "/.../" and "\" before brackets because of regular expression)
    data.correct = /b\)/.test(data.responses);
  }
}

// Screen to show in case of wrong answer
var fail_q_4 = {
  type: 'html-button-response',
  stimulus: function(){
    var html = "<h1>Wrong answer!</h1>"
    html += "<p><br></p>"
    html += "<p>During so-called 'Estimations' you will have to estimate how many points you might get when you would choose the presented option in another question.</p>"
    return html
  },
  choices: ["Continue"],
  on_finish: function(data){
    data.type = "attention_fail"
  }
}

// Node to check if question was answered wrongly (and display fail screen in case)
var check_fail_q_4 = {
  timeline: [fail_q_4],
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
  type: 'html-button-response',
  stimulus: 'You failed the attention check. You will be redirected to Prolific shortly. This might take a few moments.',
  trial_duration: 5000,
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

// var attention_passed = {
//   type: 'html-button-response',
//   stimulus: function(){
//     var html = "<p><b>You passed the attention check!</b></p>"
//     html += "<p>After this screen the regular task will start, beginning with a short training.</p>"
//     html += "<p><br></p>"
//     html += "<p>Click the 'Continue' button below to continue with the task training.</p>"
//     return html
//   },
//   choices: ['Continue'],
//   // on_finish: function(data){
//   //   data.type = "experiment_fail";
//   //   var sum_of_correct = jsPsych.data.get().filter({type: 'attention_check'}).select('correct')
//   //   var sum_of_correct = sum_of_correct.sum();
//   //   data.sum_of_correct = sum_of_correct;
//   //   completion_code = 'FAILED_ATTENTION';
//   //   senddataNend()
//   //   //jsPsych.data.displayData();
//   // }
// }

// Screen that the attention check was passed
var attention_passed = {
  type: 'survey-multi-choice',
  preamble: function(){
    var html = "<p><b>You passed the attention check!</b></p>"
    html += "<p>After this screen the regular task will start, beginning with a short training.</p>"
    html += "<p>Click the 'Continue' button below to continue with the task training.</p>"
    html += "<p><br></p>"
    html += "<p><b>One last question before we start:</b></p>"
    return html
  },
  questions: [
    {
      prompt: "Can you read or speak the Japanese language?",
      name: 'hiragana',
      options: [
        "Yes",
        "No"
      ],
      required: true
    }
  ],
  on_finish: function(data){
    data.type = 'attention_check',
    // Put in prefix of correct answer here (Pattern framed by "/.../" and "\" before brackets because of regular expression)
    data.hiragana = data.responses;
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
    attention_q_4,
    check_fail_q_4,
    if_attention_failed,
    attention_passed
  ]
}
