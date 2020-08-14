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
            array.forEach(v => {
                if (video !== v) {
                    v.pause();
                }
            });
        }
        video.onpause = function () {
        }
        video.onended = function () {
            const playIcon = document.getElementById(video.id);
            video.load();
        }
    });
}
