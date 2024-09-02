let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")
let count = 0

function increment() {
    count += 1
    countElement.textContent = count
}

function save() {
    let countSave = count + " - "
    saveElement.textContent += countSave
    countElement.textContent = 0
    count = 0
}

function erase() {
    saveElement.textContent = "Previous entries: "
}