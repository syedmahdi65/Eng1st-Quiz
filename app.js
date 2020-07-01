function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What does the word long mean?", ["দীর্ঘ", "খাট","ছোট", "ভালো"], "দীর্ঘ"),
   
new Question("What does the word Youngmean?", ["ছোট", "দীর্ঘ","তরুন", "খারাপ"], "তরুন"),

new Question("What does the word Made mean?", ["পাওয়া", "তৈরি","সামান্য", "খারাপ"], "তৈরি"),
        
new Question("What does the word Fulfilled mean?", ["নাগরিক", "সমাজ","পূর্ণ", "কঠিন"], "পূর্ণ"),
      
new Question("What does the word Devil mean?", ["শয়তান", "প্রভু","পরিবর্তন", "কঠিন"], "শয়তান"), 
     
 new Question("What does the word Freedom mean?", ["পরিবার", "স্বাধীনতা","পনাজয়", "যুদ্ব"], "স্বাধীনতা"), 
    
  new Question("What does the word Based mean?", ["ভিওি করে", "সাধারণ","কাজ", "একা"], "ভিওি করে"), 
    
  new Question("What does the word Skill mean?", ["প্রভু", "কঠিন","খাট", "দক্ষতা"], "দক্ষতা"), 
 
 new Question("What does the word Pile  mean?", ["গাদা",  "ভবন","দায়িত্ব", "সহ"], "গাদা"), 

 new Question("What does the word Inculde  mean?", ["রক্ষা",  "অন্তর্ভুক্ত","মৌলিক", "সম্বব"], "অন্তর্ভুক্ত"), 
];


var quiz = new Quiz(questions);


populate();





