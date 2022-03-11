const btn = document.getElementById("btn");
const container = document.querySelector(".container");

btn.addEventListener("click", ()=> {
    createNotificatiion();
});

function createNotificatiion() {
    const notifs = document.createElement("div");
    notifs.classList.add("toast");

    notifs.innerText = "This Max's world and you are all living it";

    container.appendChild(notifs);

    setTimeout(()=> {
        notifs.remove();
    }, 3000);

}