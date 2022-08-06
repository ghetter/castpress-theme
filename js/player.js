const player__toggle = body.querySelector('.c-player__toggle'),
    player__content = body.querySelector('.c-player__content'),
    seek_slider = body.querySelector(".c-player__seek-slider"),
    volume__toggle = body.querySelector(".c-player__volume-icon"),
    volume_slider = body.querySelector(".c-player__volume-slider");


player__toggle.addEventListener("click", () => {
    player__toggle.classList.add("hidden");
    player__content.classList.add("active");
});

volume__toggle.addEventListener("click", () => {
    volume_slider.classList.toggle("active");
});

volume_slider.addEventListener("input", function () {
 this.style.backgroundImage = "linear-gradient(to right, #222222 0%, #222222 " + this.value + "%, #fff " + this.value + "%, #F5F5F7 100%)"
});

seek_slider.addEventListener("input", function () {
 this.style.backgroundImage = "linear-gradient(to right, #222222 0%, #222222 " + this.value + "%, #fff " + this.value + "%, #F5F5F7 100%)"
});
