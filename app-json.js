
document.querySelector("#form").addEventListener("submit", function (e) {

    document.querySelector(".output").innerHTML = "";

    let number = 1;
    const numberInput = document.querySelector("#number");

    if (numberInput.value != "") {
        number = numberInput.value;
    }

    while (number > 0) {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

        xhr.onload = function () {
            if (this.status === 200) {
                console.log(JSON.parse(this.responseText));
                document.querySelector(".output").innerText +=
                    JSON.parse(this.responseText).value +
                    "\n" + "\n";
            }
        }

        xhr.send();

        number--;
    }

    e.preventDefault();
});