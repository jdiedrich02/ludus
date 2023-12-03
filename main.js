// [{txt, choices [{nextId, txt}] }]
let prompts = [{ txt: "This is the first prompt", choices: [{ nextId: 1, txt: "Choice 1" }, { nextId: 1, txt: "Choice 2" }] }, { txt: "This is the second prompt", choices: [{ nextId: 1, txt: "Choice 1" }, { nextId: 1, txt: "Choice 2" }] }];

function main() {
    populatePromt(prompts[0].txt);

    // Add the first prompt choices
    let choice = document.createElement('p');
    choice.innerHTML = `<p class="choicesPrompt" onclick="selectChoice(${prompts[0].choices[0].nextId})">${prompts[0].choices[0].txt}</p>`;
    document.getElementById('choices').appendChild(choice);
}

//currently if you click the prompts too quickly, the displaying txt breaks
function selectChoice(choice) {

    //keeps getting undefined errors, but the page behaves as expected.
    populatePromt(prompts[choice].txt);
    document.getElementById('choices').innerHTML = "";

    //very sketchy way to have an n amount of choices
    for (let i = 0; i < prompts[choice].choices.length; i++) {
        let choiceText = document.createElement('p');
        choiceText.innerHTML = `<p class="choicesPrompt" onclick="selectChoice(${prompts[choice].choices[i].nextId})">${prompts[choice].choices[i].txt}</p>`;
        document.getElementById('choices').appendChild(choiceText);
    }

}

function populatePromt(txt) {

    let p = document.getElementById("promptTxt");
    p.innerText = "";

    let intervalId = setInterval(function () {

        p.innerText += " " + txt.split(" ")[0];

        txt = txt.slice(txt.split(" ")[0].length + 1);

        if (txt.length == 0) {
            clearInterval(intervalId);
        }

    }, 500);

}
