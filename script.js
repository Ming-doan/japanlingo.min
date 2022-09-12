// Global Variables

const LIBRARY = [
    {
        hiragana: 'あ',
        katakana: 'ア',
        romaji: 'a'
    },
    {
        hiragana: 'い',
        katakana: 'イ',
        romaji: 'i'
    },
    {
        hiragana: 'う',
        katakana: 'ウ',
        romaji: 'u'
    },
    {
        hiragana: 'え',
        katakana: 'エ',
        romaji: 'e'
    },
    {
        hiragana: 'お',
        katakana: 'オ',
        romaji: 'o'
    },
    {
        hiragana: 'か',
        katakana: 'カ',
        romaji: 'ka'
    },
    {
        hiragana: 'き',
        katakana: 'キ',
        romaji: 'ki'
    },
    {
        hiragana: 'く',
        katakana: 'ク',
        romaji: 'ku'
    },
    {
        hiragana: 'け',
        katakana: 'ケ',
        romaji: 'ke'
    },
    {
        hiragana: 'こ',
        katakana: 'コ',
        romaji: 'ko'
    },
]

const LIBRARY_LENGTH = LIBRARY.length

const JAPANESE = document.getElementById("japanese")
const LATTIN = document.getElementById("lattin")
const MODE_BUTTON = document.getElementById("mode")
const SHOW_BUTTON = document.getElementById("show")
const RANDOM_BUTTON = document.getElementById("random")
const NEXT_BUTTON = document.getElementById("next")

const OPEN_BUTTON = document.getElementById("open-modal")
const CLOSE_BUTTON = document.getElementById("close-btn")
const OVERLAY = document.getElementById("overlay")
const CLOSE_BG = document.getElementById("modal-bg")

let mode = "hiragana"
let isShowLattin = false
let currentWord = LIBRARY[0]

// Functions

function randomNumber(range) {
    return Math.floor(Math.random() * range)
}

function randomWord() {
    return LIBRARY[randomNumber(LIBRARY_LENGTH)]
}

function nextWord() {
    currentIndex = LIBRARY.findIndex((word) => currentWord == word)
    if (currentIndex >= LIBRARY_LENGTH - 1) {
        return LIBRARY[0]
    } else {
        return LIBRARY[currentIndex + 1]
    }
}

function appendWord(word) {
    JAPANESE.innerHTML = word
}

function showLattin() {
    if (isShowLattin) {
        LATTIN.innerText = currentWord.romaji
    } else {
        LATTIN.innerText = "_"
    }
}

function switchMode() {
    MODE_BUTTON.innerHTML = `Turn to ${mode}`
    if (mode === "hiragana") {
        mode = "katakana"
    } else if (mode === "katakana") {
        mode = "hiragana"
    }
}

function splashButton(target) {
    target.classList.add("active")
    setTimeout(() => {
        target.classList.remove("active")
    }, 200)
}

function handle_showLattin_press() {
    function func() {
        isShowLattin = !isShowLattin
        showLattin()
    }
    SHOW_BUTTON.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == " ") {
            splashButton(SHOW_BUTTON)
            func()
        }
    })
}

function handle_mode_press() {
    function func() {
        switchMode()
        appendWord(currentWord[mode])
    }
    MODE_BUTTON.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "m") {
            splashButton(MODE_BUTTON)
            func()
        }
    })
}

function handle_random_press() {
    function func() {
        currentWord = randomWord()
        appendWord(currentWord[mode])
        showLattin()
    }
    RANDOM_BUTTON.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "r") {
            splashButton(RANDOM_BUTTON)
            func()
        }
    })
}

function handle_rightArrow_press() {
    function func() {
        currentWord = nextWord()
        appendWord(currentWord[mode])
        showLattin()
    }
    NEXT_BUTTON.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowRight") {
            splashButton(NEXT_BUTTON)
            func()
        }
    })
}

function openModal() {
    OPEN_BUTTON.addEventListener('click', () => {
        OVERLAY.classList.add("open")
    })
}

function closeModal() {
    CLOSE_BUTTON.addEventListener("click", () => {
        OVERLAY.classList.remove("open")
    })
    CLOSE_BG.addEventListener("click", () => {
        OVERLAY.classList.remove("open")
    })
}

// Main Function

function run() {
    appendWord(currentWord[mode])
    handle_showLattin_press()
    handle_mode_press()
    handle_random_press()
    handle_rightArrow_press()
    openModal()
    closeModal()
}

run()