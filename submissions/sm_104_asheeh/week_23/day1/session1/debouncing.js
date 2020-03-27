function debounce (func, delay) {
    let debouncing
    return function () {
        clearTimeout(debouncing)
        debouncing = setTimeout(() => func.apply(this), delay)
    }
}

var x = 0
let log = () => console.log(++x)

window.addEventListener('scroll', debounce(log, 1000))