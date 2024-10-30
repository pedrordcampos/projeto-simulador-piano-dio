const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
let mapedKeys = [];
let currentVolume = 0.5;

const playTune = (key) => {
    let audio = new Audio(`src/tunes/${key}.wav`);
    audio.volume = currentVolume;
    audio.addEventListener("canplaythrough", () => {
        audio.play();
    }, { once: true });

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => {
        const keyValue = key.getAttribute("data-key");
        playTune(keyValue);
    });
    mapedKeys.push(key.getAttribute("data-key"));
});

document.addEventListener("keydown", (event) => {
    const keyPressed = event.key;
    if (mapedKeys.includes(keyPressed)) {
        playTune(keyPressed);
    }
});

volumeSlider.addEventListener("input", (event) => {
    currentVolume = event.target.value;
});

keysCheck.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    pianoKeys.forEach((key) => {
        if (!isChecked) {
            key.classList.add("hide");
        } else {
            key.classList.remove("hide");
        }
    });
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
