document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => startTimer(question, 30));
});

function startTimer(question, seconds) {
    const timer = question.querySelector('.timer #time');
    let timeLeft = seconds;

    const interval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            showAnswers(question);
        }
    }, 1000);

    const stopButton = question.querySelector('.stop-button');
    stopButton.addEventListener('click', () => { 
        clearInterval(interval); 
     });
}

    function showAnswers(question) {
        const correctAnswer = question.dataset.answer;
        const buttons = question.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.textContent.trim() === correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });
    }
    
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const question = this.closest('.question');
            if (this.textContent.trim() === question.dataset.answer) {
                this.classList.add('correct');
                alert('¡Correcto!');
            } else {
                this.classList.add('incorrect');
                alert('Incorrecto. Inténtalo de nuevo.');
            }
            showAnswers(question);
        });
    });

function volverAlInicio() {
    // Redirigimos al usuario a la página de inicio
    location.href = "menu.html";
}