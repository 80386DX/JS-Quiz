window.addEventListener('load', run);
const questinH1 = document.querySelector('h1');
let options = document.querySelectorAll('.option');

function run(){
    if(!quiz.end()){
        let currentQuestion = quiz.getQuestion();
        questinH1.innerHTML =  currentQuestion.text;
        let rand = quiz.randomize();
        for (let i = 0; i < options.length; i++){
            options[i].innerHTML = rand[i];
            options[i].onclick = function (){
                quiz.userAnswer(this.innerHTML);
                run();
            }
        }
    }else{
        alert(`Vas rezultat je ${quiz.score}`);
    }

}