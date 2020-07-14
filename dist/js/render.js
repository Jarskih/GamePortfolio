function render() {
    const videos = document.getElementsByTagName("video");
    var array = Array.from(videos);

    array.forEach(video => {
        video.addEventListener("mouseenter", function (event) {
            video.play();
            video.controls = true;
        }, false);
        video.addEventListener("mouseleave", function (event) {
            video.pause();
            video.controls = false;
        }, false);
    });
}
