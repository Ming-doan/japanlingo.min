// Global Variables

const GEN_LIBRARY = [
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
        romaji: 'de'
    },
    {
        hiragana: 'ど',
        katakana: 'ド',
        romaji: 'do'
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
        hiragana: 'ぴゃ',
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

const FILTER = [
    {
        name: "No filter",
        items: "nofilter"
    },
    {
        name: "Single",
        items: ["a", "i", "u", "e", "o", "n,m"]
    },
    {
        name: "K sets",
        items: ["ka", "ki", "ku", "ke", "ko"]
    },
    {
        name: "S sets",
        items: ["sa", "shi", "su", "se", "so"]
    },
    {
        name: "T sets",
        items: ["ta", "chi", "tsu", "te", "to"]
    },
    {
        name: "N sets",
        items: ["na", "ni", "nu", "ne", "no"]
    },
    {
        name: "H sets",
        items: ["ha", "hi", "fu", "he", "ho"]
    },
    {
        name: "M sets",
        items: ["ma", "mi", "mu", "me", "mo"]
    },
    {
        name: "Y sets",
        items: ["ya", "yu", "yo"]
    },
    {
        name: "R sets",
        items: ["ra", "ri", "ru", "re", "ro"]
    },
    {
        name: "W sets",
        items: ["wa"]
    },
    {
        name: "G sets",
        items: ["ga", "gi", "gu", "ge", "go"]
    },
    {
        name: "Z sets",
        items: ["za", "ji", "zu", "ze", "zo"]
    },
    {
        name: "D sets",
        items: ["da", "ji", "zu", "de", "do"]
    },
    {
        name: "B sets",
        items: ["ba", "bi", "bu", "be", "bo"]
    },
    {
        name: "P sets",
        items: ["pa", "pi", "pu", "pe", "po"]
    },
    {
        name: "Ky sets",
        items: ["kya", "kyu", "kyo"]
    },
    {
        name: "Sh sets",
        items: ["sha", "shu", "sho"]
    },
    {
        name: "Ch sets",
        items: ["cha", "chu", "cho"]
    },
    {
        name: "Ny sets",
        items: ["nya", "nyu", "nyo"]
    },
    {
        name: "Hy sets",
        items: ["hya", "hyu", "hyo"]
    },
    {
        name: "My sets",
        items: ["mya", "myu", "myo"]
    },
    {
        name: "Ry sets",
        items: ["rya", "ryu", "ryo"]
    },
    {
        name: "Gy sets",
        items: ["gya", "gyu", "gyo"]
    },
    {
        name: "J sets",
        items: ["ja", "ju", "jo"]
    },
    {
        name: "By sets",
        items: ["bya", "byu", "byo"]
    }, {
        name: "Py sets",
        items: ["pya", "pyu", "pyo"]
    },
]

const FILTER_LENGTH = FILTER.length

const JAPANESE = document.getElementById("japanese")
const LATTIN = document.getElementById("lattin")
const FILTER_CONTAINER = document.getElementById("hoz-c")
const NEXT_FILTER = document.getElementById("hoz-r")
const PREV_FILTER = document.getElementById("hoz-l")
const PREV_BUTTON = document.getElementById("prev")
const MODE_BUTTON = document.getElementById("mode")
const SHOW_BUTTON = document.getElementById("show")
const RANDOM_BUTTON = document.getElementById("random")
const NEXT_BUTTON = document.getElementById("next")

const OPEN_BUTTON = document.getElementById("open-modal")
const CLOSE_BUTTON = document.getElementById("close-btn")
const OVERLAY = document.getElementById("overlay")
const CLOSE_BG = document.getElementById("modal-bg")

let LIBRARY = GEN_LIBRARY
let LIBRARY_LENGTH = LIBRARY.length

let mode = "hiragana"
let isShowLattin = false
let currentWord = LIBRARY[0]
let currentFilter = FILTER[0]

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

function prevFilter() {
    currentIndex = FILTER.findIndex((filter) => currentFilter == filter)
    if (currentIndex == 0) {
        return FILTER[FILTER_LENGTH - 1]
    } else {
        return FILTER[currentIndex - 1]
    }
}

function nextFilter() {
    currentIndex = FILTER.findIndex((filter) => currentFilter == filter)
    if (currentIndex >= FILTER_LENGTH - 1) {
        return FILTER[0]
    } else {
        return FILTER[currentIndex + 1]
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

function appendFilter() {
    FILTER_CONTAINER.innerHTML = `Filter: ${currentFilter.name}`
}

function setFilter() {
    wordFilter = currentFilter.items
    LIBRARY = GEN_LIBRARY.filter((word) => {
        if (wordFilter == "nofilter") {
            return true
        }
        return currentFilter.items.includes(word.romaji)
    })
    LIBRARY_LENGTH = LIBRARY.length
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
        currentFilter = FILTER[0]
        setFilter()
        appendFilter()
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
        if (e.key == "ArrowLeft" && !e.ctrlKey) {
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
        if (e.key == "ArrowRight" && !e.ctrlKey) {
            splashButton(NEXT_BUTTON)
            func()
        }
    })
}

function handle_ctrl_rightArrow_press() {
    function func() {
        currentFilter = nextFilter()
        appendFilter()
        setFilter()
        currentWord = LIBRARY[0]
        appendWord(currentWord[mode])
        showLattin()
    }
    NEXT_FILTER.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowRight" && e.ctrlKey) {
            splashButton(NEXT_FILTER)
            func()
        }
    })
}

function handle_ctrl_leftArrow_press() {
    function func() {
        currentFilter = prevFilter()
        appendFilter()
        setFilter()
        currentWord = LIBRARY[0]
        appendWord(currentWord[mode])
        showLattin()
    }
    PREV_FILTER.addEventListener("click", () => {
        func()
    })
    window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowLeft" && e.ctrlKey) {
            splashButton(PREV_FILTER)
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
    appendFilter()
    handle_showLattin_press()
    handle_mode_press()
    handle_random_press()
    handle_leftArrow_press()
    handle_rightArrow_press()
    handle_ctrl_rightArrow_press()
    handle_ctrl_leftArrow_press()
    openModal()
    closeModal()
}

run()