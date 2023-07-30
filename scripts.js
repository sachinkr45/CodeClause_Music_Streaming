document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const musicDetails = document.getElementById("music-details");
    const playlistItems = document.querySelectorAll("#playlist li");

    // Play a song when clicking on a playlist item
    playlistItems.forEach((item) => {
        item.addEventListener("click", function () {
            const audioSrc = this.getAttribute("data-src");
            const title = this.getAttribute("data-title");
            const artist = this.getAttribute("data-artist");

            audioPlayer.src = audioSrc;
            musicDetails.innerHTML = `<h2>Now Playing: ${title}</h2><p>${artist}</p>`;
            audioPlayer.play();
        });
    });
});