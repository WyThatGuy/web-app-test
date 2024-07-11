var notebox = document.getElementById("notebox")

notebox.addEventListener("submit", (event) => {

    event.preventDefault();

    window.localStorage.setItem(window.localStorage.length, notebox.innerText)

    notebox.reset()
})