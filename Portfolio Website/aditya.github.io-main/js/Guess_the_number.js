const num1 = Math.round(Math.random()*20)+1;
let count = 20;

document.querySelector('.check').addEventListener('click', function(){
    if(count > 0){
        document.querySelector('.score').textContent=count--;
    }
    else{
        document.querySelector('.score').textContent="attemp failed";
    }
} );

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.numb').value;
    if(guess == num1){
        document.querySelector('.correct_number').textContent="Your Prediction is right";
        document.querySelector('.unknown').textContent=num1;
        document.querySelector('.main').style.backgroundColor='green';
    }
    else if(guess > num1){
        document.querySelector('.correct_number').textContent="Your Prediction is too High..";
    }
    else if(guess < num1){
        document.querySelector('.correct_number').textContent="Your Prediction is too low..";
    }
})

document.querySelector('.high_score').textContent=0;

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.main').style.backgroundColor='grey';
    document.querySelector('.unknown').textContent="?";
    document.querySelector('.score').textContent=0;
    document.querySelector('.numb').value=0;
    const num1 = Math.round(Math.random()*20)+1;
})
