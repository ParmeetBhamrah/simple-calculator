const buttonsEl = document.querySelectorAll("button")
const inputEl = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonVal = buttonsEl[i].textContent;
        if (buttonVal === "C") {
            clearResult()
        }
        else if (buttonVal === "=") {
            calculateResult()
        }
        else if (buttonVal === "DEL") {
            delLast()
        }
        else {
            appendValue(buttonVal)
        }
    })
    
    function clearResult() {
        inputEl.value = ""
    }

    function calculateResult() {
        inputEl.value = eval(inputEl.value)
    }

    function delLast() {
        if (inputEl.value) {
            inputEl.value = inputEl.value.slice(0, -1)
        }
    }

    function appendValue(btn) {
        inputEl.value += btn
    }

}