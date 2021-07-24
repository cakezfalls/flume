const tracklist = document.querySelectorAll('.album_tracklist');
const blockStyle = document.querySelector('.block1_music');
const blockStyle2 = document.querySelector('.block2_video');


window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        blockStyle.classList.add('green');
    } else {
        blockStyle.classList.remove('green');

    }
    if (scrollPos > 300) {
        blockStyle2.classList.add('blue');
    } else
        blockStyle2.classList.remove('blue');

});

for (let trackList of tracklist) {
    trackList.addEventListener('click', function() {
        trackList.classList.toggle('open');

    });
}