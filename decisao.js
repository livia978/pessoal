const believeBtn = document.getElementById("believeBtn");
const stopBtn = document.getElementById("stopBtn");
const resultMessage = document.getElementById("resultMessage");

if (believeBtn && stopBtn && resultMessage) {

    believeBtn.addEventListener("click", () => {

        localStorage.setItem("resposta", "Eu vou acreditar pela última vez");

        resultMessage.textContent = "Obrigado por me dar mais uma chance ❤️";

        believeBtn.style.display = "none";
        stopBtn.style.display = "none";

    });

    stopBtn.addEventListener("click", () => {

        localStorage.setItem("resposta", "Por favor, para");

        resultMessage.textContent = "Entendi sua decisão. Obrigado por ler até aqui.";

        believeBtn.style.display = "none";
        stopBtn.style.display = "none";

    });

}

// apenas pra debug
console.log(localStorage.getItem("resposta"));