function render() {
    const videos = document.getElementsByTagName("video");
    var array = Array.from(videos);

    array.forEach(video => {
        video.addEventListener("mouseenter", function (event) {
            video.controls = true;
        }, false);
        video.addEventListener("mouseleave", function (event) {
            video.controls = false;
        }, false);

        video.onplay = function () {
            const playIcon = document.getElementById(video.id);
            playIcon.classList.add("hidden");
        }
        video.onpause = function () {
            const playIcon = document.getElementById(video.id);
            playIcon.classList.remove("hidden");
        }
        video.onended = function () {
            const playIcon = document.getElementById(video.id);
            playIcon.classList.remove("hidden");
            video.load();
        }
    });
}
