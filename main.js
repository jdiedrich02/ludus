function selectChoice(choice) {
    console.log('Selected', choice);
    return;
}

function populatePromt(txt) {

    let prompt = document.getElementById("prompt");

    let p = document.createElement("p");
    prompt.append(p);

    let intervalId = setInterval(function () {

        p.innerText += " " + txt.split(" ")[0];

        txt = txt.slice(txt.split(" ")[0].length + 1);

        if (txt.length == 0) {
            clearInterval(intervalId);
        }

    }, 500);

}