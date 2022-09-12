// Global Variables

const LIBRARY = [
    // -
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
    // K
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
    // S
    {
        hiragana: 'さ',
        katakana: 'サ',
        romaji: 'sa'
    },
    {
        hiragana: 'し',
        katakana: 'シ',
        romaji: 'shi'
    },
    {
        hiragana: 'す',
        katakana: 'ス',
        romaji: 'su'
    },
    {
        hiragana: 'せ',
        katakana: 'セ',
        romaji: 'se'
    },
    {
        hiragana: 'そ',
        katakana: 'ソ',
        romaji: 'so'
    },
    // T
    {
        hiragana: 'た',
        katakana: 'タ',
        romaji: 'ta'
    },
    {
        hiragana: 'ち',
        katakana: 'チ',
        romaji: 'chi'
    },
    {
        hiragana: 'つ',
        katakana: 'ツ',
        romaji: 'tsu'
    },
    {
        hiragana: 'て',
        katakana: 'テ',
        romaji: 'te'
    },
    {
        hiragana: 'と',
        katakana: 'ト',
        romaji: 'to'
    },
    // N
    {
        hiragana: 'な',
        katakana: 'ナ',
        romaji: 'na'
    },
    {
        hiragana: 'に',
        katakana: 'ニ',
        romaji: 'ni'
    },
    {
        hiragana: 'ぬ',
        katakana: 'ヌ',
        romaji: 'nu'
    },
    {
        hiragana: 'ね',
        katakana: 'ネ',
        romaji: 'ne'
    },
    {
        hiragana: 'の',
        katakana: 'ノ',
        romaji: 'no'
    },
    // H
    {
        hiragana: 'は',
        katakana: 'ハ',
        romaji: 'ha'
    },
    {
        hiragana: 'ひ',
        katakana: 'ヒ',
        romaji: 'hi'
    },
    {
        hiragana: 'ふ',
        katakana: 'フ',
        romaji: 'fu'
    },
    {
        hiragana: 'へ',
        katakana: 'ヘ',
        romaji: 'he'
    },
    {
        hiragana: 'ほ',
        katakana: 'ホ',
        romaji: 'ho'
    },
    // M
    {
        hiragana: 'ま',
        katakana: 'マ',
        romaji: 'ma'
    },
    {
        hiragana: 'み',
        katakana: 'ミ',
        romaji: 'mi'
    },
    {
        hiragana: 'む',
        katakana: 'ム',
        romaji: 'mu'
    },
    {
        hiragana: 'め',
        katakana: 'メ',
        romaji: 'me'
    },
    {
        hiragana: 'も',
        katakana: 'モ',
        romaji: 'mo'
    },
    // Y
    {
        hiragana: 'や',
        katakana: 'ヤ',
        romaji: 'ya'
    },
    {
        hiragana: 'ゆ',
        katakana: 'ユ',
        romaji: 'yu'
    },
    {
        hiragana: 'よ',
        katakana: 'ヨ',
        romaji: 'yo'
    },
    // R
    {
        hiragana: 'ら',
        katakana: 'ラ',
        romaji: 'ra'
    },
    {
        hiragana: 'り',
        katakana: 'チ',
        romaji: 'ri'
    },
    {
        hiragana: 'る',
        katakana: 'ル',
        romaji: 'ru'
    },
    {
        hiragana: 'れ',
        katakana: 'レ',
        romaji: 're'
    },
    {
        hiragana: 'ろ',
        katakana: 'ロ',
        romaji: 'ro'
    },
    // W
    {
        hiragana: 'わ',
        katakana: 'ワ',
        romaji: 'wa'
    },
    {
        hiragana: 'を',
        katakana: 'ヲ',
        romaji: 'o'
    },
    // --
    {
        hiragana: 'ん',
        katakana: 'ン',
        romaji: 'n,m'
    },

    // G
    {
        hiragana: 'が',
        katakana: 'ガ',
        romaji: 'ga'
    },
    {
        hiragana: 'ぎ',
        katakana: 'ギ',
        romaji: 'gi'
    },
    {
        hiragana: 'ぐ',
        katakana: 'グ',
        romaji: 'gu'
    },
    {
        hiragana: 'げ',
        katakana: 'ゲ',
        romaji: 'ge'
    },
    {
        hiragana: 'ご',
        katakana: 'ゴ',
        romaji: 'go'
    },
    // Z
    {
        hiragana: 'ざ',
        katakana: 'ザ',
        romaji: 'za'
    },
    {
        hiragana: 'じ',
        katakana: 'ジ',
        romaji: 'ji'
    },
    {
        hiragana: 'ず',
        katakana: 'ズ',
        romaji: 'zu'
    },
    {
        hiragana: 'ぜ',
        katakana: 'ゼ',
        romaji: 'ze'
    },
    {
        hiragana: 'ぞ',
        katakana: 'ゾ',
        romaji: 'zo'
    },
    // D
    {
        hiragana: 'だ',
        katakana: 'ダ',
        romaji: 'da'
    },
    {
        hiragana: 'ぢ',
        katakana: 'ヂ',
        romaji: 'ji'
    },
    {
        hiragana: 'づ',
        katakana: 'ヅ',
        romaji: 'zu'
    },
    {
        hiragana: 'で',
        katakana: 'デ',
        romaji: 'ze'
    },
    {
        hiragana: 'ど',
        katakana: 'ド',
        romaji: 'zo'
    },
    // B
    {
        hiragana: 'ば',
        katakana: 'バ',
        romaji: 'ba'
    },
    {
        hiragana: 'び',
        katakana: 'ビ',
        romaji: 'bi'
    },
    {
        hiragana: 'ぶ',
        katakana: 'ブ',
        romaji: 'bu'
    },
    {
        hiragana: 'べ',
        katakana: 'ベ',
        romaji: 'be'
    },
    {
        hiragana: 'ぼ',
        katakana: 'ボ',
        romaji: 'bo'
    },
    // P
    {
        hiragana: 'ぱ',
        katakana: 'パ',
        romaji: 'pa'
    },
    {
        hiragana: 'ぴ',
        katakana: 'ピ',
        romaji: 'pi'
    },
    {
        hiragana: 'ぷ',
        katakana: 'プ',
        romaji: 'pu'
    },
    {
        hiragana: 'ぺ',
        katakana: 'ペ',
        romaji: 'pe'
    },
    {
        hiragana: 'ぽ',
        katakana: 'ポ',
        romaji: 'po'
    },

    // âm ghép K
    {
        hiragana: 'きゃ',
        katakana: 'キャ',
        romaji: 'kya'
    },
    {
        hiragana: 'きゅ',
        katakana: 'キュ',
        romaji: 'kyu'
    },
    {
        hiragana: 'きょ',
        katakana: 'キョ',
        romaji: 'kyo'
    },
    // âm ghép SH
    {
        hiragana: 'しゃ',
        katakana: 'シャ',
        romaji: 'sha'
    },
    {
        hiragana: 'しゅ',
        katakana: 'シュ',
        romaji: 'shu'
    },
    {
        hiragana: 'しょ',
        katakana: 'ショ',
        romaji: 'sho'
    },
    // âm ghép CH
    {
        hiragana: 'ちゃ',
        katakana: 'チャ',
        romaji: 'cha'
    },
    {
        hiragana: 'ちゅ',
        katakana: 'チュ',
        romaji: 'chu'
    },
    {
        hiragana: 'ちょ',
        katakana: 'チョ',
        romaji: 'cho'
    },
    // âm ghép N
    {
        hiragana: 'にゃ',
        katakana: 'ニャ',
        romaji: 'nya'
    },
    {
        hiragana: 'にゅ',
        katakana: 'ニュ',
        romaji: 'nyu'
    },
    {
        hiragana: 'にょ',
        katakana: 'ニョ',
        romaji: 'nyo'
    },
    // âm ghép H
    {
        hiragana: 'ひゃ',
        katakana: 'ヒャ',
        romaji: 'hya'
    },
    {
        hiragana: 'ひゅ',
        katakana: 'ヒュ',
        romaji: 'hyu'
    },
    {
        hiragana: 'ひょ',
        katakana: 'ヒョ',
        romaji: 'hyo'
    },
    // âm ghép M
    {
        hiragana: 'みゃ',
        katakana: 'ミャ',
        romaji: 'mya'
    },
    {
        hiragana: 'みゅ',
        katakana: 'ミュ',
        romaji: 'myu'
    },
    {
        hiragana: 'みょ',
        katakana: 'ミョ',
        romaji: 'myo'
    },
    // âm ghép R
    {
        hiragana: 'りゃ',
        katakana: 'リャ',
        romaji: 'rya'
    },
    {
        hiragana: 'りゅ',
        katakana: 'リュ',
        romaji: 'ryu'
    },
    {
        hiragana: 'りょ',
        katakana: 'リョ',
        romaji: 'ryo'
    },
    // âm ghép G
    {
        hiragana: 'ぎゃ',
        katakana: 'ギャ',
        romaji: 'gya'
    },
    {
        hiragana: 'ぎゅ',
        katakana: 'ギュ',
        romaji: 'gyu'
    },
    {
        hiragana: 'ぎょ',
        katakana: 'ギョ',
        romaji: 'gyo'
    },
    // âm ghép J
    {
        hiragana: 'じゃ',
        katakana: 'ジャ',
        romaji: 'ja'
    },
    {
        hiragana: 'じゅ',
        katakana: 'ジュ',
        romaji: 'ju'
    },
    {
        hiragana: 'じょ',
        katakana: 'ジョ',
        romaji: 'jo'
    },
    // âm ghép B
    {
        hiragana: 'びゃ',
        katakana: 'ビャ',
        romaji: 'bya'
    },
    {
        hiragana: 'びゅ',
        katakana: 'ビュ',
        romaji: 'byu'
    },
    {
        hiragana: 'びょ',
        katakana: 'ビョ',
        romaji: 'byo'
    },
    // âm ghép P
    {
        hiragana: 'ぴょ',
        katakana: 'ピャ',
        romaji: 'pya'
    },
    {
        hiragana: 'ぴゅ',
        katakana: 'ピュ',
        romaji: 'pyu'
    },
    {
        hiragana: 'ぴょ',
        katakana: 'ピョ',
        romaji: 'pyo'
    },

]

const LIBRARY_LENGTH = LIBRARY.length

const JAPANESE = document.getElementById("japanese")
const LATTIN = document.getElementById("lattin")
const PREV_BUTTON = document.getElementById("prev")
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

function prevWord() {
    currentIndex = LIBRARY.findIndex((word) => currentWord == word)
    if (currentIndex == 0) {
        return LIBRARY[LIBRARY_LENGTH - 1]
    } else {
        return LIBRARY[currentIndex - 1]
    }
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

function handle_leftArrow_press() {
    function func() {
        currentWord = prevWord()
        appendWord(currentWord[mode])
        showLattin()
    }
    PREV_BUTTON.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowLeft") {
            splashButton(PREV_BUTTON)
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
    handle_leftArrow_press()
    handle_rightArrow_press()
    openModal()
    closeModal()
}

run()