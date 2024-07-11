var notebox = document.getElementById("notebox")
var notes = document.getElementById("notes")

function newnote () {
    window.localStorage.setItem(window.localStorage.length, notebox.value)

    notebox.value = ""
}

function loadNote(text) {
    var note = document.createElement("p")
    note.innerHTML = text
    notes.appendChild(note)
}

for (let i = 0; i < window.localStorage.length; i++) {
    loadNote(window.localStorage.getItem(i))
}