const keys = document.querySelector('.keys');

const letter = ['A', 'S', 'D', 'F', 'G', 'H', 'J']
const subtitle = ["CLAP", "HIHAT", "KICK", "OPEN", "BOOM", "RIDE", "SNARE"] 
const keyCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"]
// create the loop
for(let i = 0; i < 7; i++) {
    // creating new html elem
    const newDiv = document.createElement('div');
    const subDiv = document.createElement('div')
    newDiv.classList.add('key');

    // set Attributes to newDiv
    newDiv.setAttribute('data-key', keyCodes[i])

    newDiv.style.border = "1px solid yellow"
    newDiv.style.height = "80px"
    newDiv.style.width = "80px"

    subDiv.style.color = "yellow"
    subDiv.style.marginTop = "10px"
    
    newDiv.innerHTML = letter[i]
    subDiv.innerHTML = subtitle[i]
    keys.appendChild(newDiv);
    newDiv.appendChild(subDiv)
}

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key=${e.code}]`)
        const pressKey = document.querySelector(`div[data-key=${e.code}]`)
        if(!audio) return;

        audio.currentTime = 0;
        audio.play();

        // highlight pressed key
        pressKey.classList.add('playing')
        // remove class after 200ms
        setTimeout(() => {
            pressKey.classList.remove('playing')
        }, 200)
    }

window.addEventListener('keydown', playSound); 