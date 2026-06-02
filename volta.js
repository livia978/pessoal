const proceedBtn = document.getElementById("proceedBtn");
const heart = document.getElementById("heartTransition");
const letterPage = document.getElementById("letterPage");
const confirmBox = document.querySelector(".confirm-box");

if (proceedBtn) {

    proceedBtn.addEventListener("click", () => {

        heart.style.display = "block";
        heart.classList.add("heart-grow");

        setTimeout(() => {

            confirmBox.style.display = "none";

            heart.classList.remove("heart-grow");
            heart.style.display = "none";

            letterPage.style.display = "flex";

        }, 2000);

    });

}

const btn = document.getElementById("btn");
const hiddenMessage = document.getElementById("hiddenMessage");

if (btn && hiddenMessage) {

    btn.addEventListener("click", () => {

        hiddenMessage.classList.remove("hidden");
        hiddenMessage.classList.add("show");

        btn.style.display = "none";

        hiddenMessage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}