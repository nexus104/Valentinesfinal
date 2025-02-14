var i = 3

function noClick(params) {
    if (i == 3) {
        document.querySelector("#no").classList.remove("large")
        document.querySelector("#no").classList.add("medium")

        document.querySelector("#yes").classList.remove("large")
        document.querySelector("#yes").classList.add("extra-large")
        i = 2
    } else if (i == 2) {
        document.querySelector("#no").classList.remove("medium")
        document.querySelector("#no").classList.add("small")

        document.querySelector("#yes").classList.remove("extra-large")
        document.querySelector("#yes").classList.add("super-large")
        i = 1
    } else if (i == 1) {
        document.querySelector("#no").classList.remove("small")
        document.querySelector("#no").classList.add("extra-small")

        document.querySelector("#yes").classList.remove("super-large")
        document.querySelector("#yes").classList.add("us-large")
        i = 0
    } else if (i == 0 ) {
        document.querySelector("#no").classList.remove("extra-small")
        document.querySelector("#no").classList.add("hide")

        document.querySelector("#yes").classList.remove("super-large")
        document.querySelector("#yes").classList.add("max-large")

        document.querySelector(".valentines-text").innerHTML = "JUST SAY YES PRETTY PLEASE!! <3"
    }
}
document.getElementById("no").addEventListener("click", noClick)