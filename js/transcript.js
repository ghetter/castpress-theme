const trns_toggle = body.querySelector(".c-transcript__view-log-link"),
    trns = body.querySelector(".c-log");

// Transcript Logic
//

trns_toggle.addEventListener("click", () => {
    trns.classList.toggle("active");
});
