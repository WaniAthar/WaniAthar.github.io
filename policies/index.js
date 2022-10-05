let audio = new Audio("stewie.mp3");
audio.play();
// play audio when cursor is stopped for 0.5 secs
let timer;
let isPlaying = false;
let isStopped = false;

function stop() {
    isStopped = true;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
}

function play() {
    isStopped = false;
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }
}

function mousemove(e) {
    clearTimeout(timer);
    timer = setTimeout(stop, 100);
    audio.playbackRate = 100/ 100;
    play();
}


document.addEventListener('mousemove', (e) => {
    mousemove(e);
    const eyes = document.querySelectorAll('.eye')
    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${-angleDeg}deg)`;
    });
    // for (const eye in eyes) {
    //     eye.style.transform = `rotate(${angleDeg}deg)`;
    //     console.log(eye)
    // }
    console.log(angleDeg)
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dx, dy);
    const deg = rad * 180 / Math.PI;
    return deg
}