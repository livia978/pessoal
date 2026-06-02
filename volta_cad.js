const proceedBtn = document.getElementById("proceedBtn");
const personName = document.getElementById("personName");
const heart = document.getElementById("heartTransition");

proceedBtn.addEventListener("click", () => {

    const nome = personName.value.trim();

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    // Permite apenas "Caio"
    if (nome.toLowerCase() !== "caio") {
        alert("Esta mensagem não foi feita para você!");
        personName.value = "";
        personName.focus();
        return;
    }

    localStorage.setItem("nomePessoa", "Caio");

    heart.classList.add("heart-grow");

    setTimeout(() => {
        window.location.href = "volta.html";
    }, 2000);

});