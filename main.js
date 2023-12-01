// [{txt, choices [{nextId, txt}] }]
let prompts = [{ txt: "This is the first prompt", choices: [{ nextId: 1, txt: "Choice 1" }, { nextId: 1, txt: "Choice 2" }] }, { txt: "This is the second prompt", choices: [{ nextId: 1, txt: "Choice 1" }, { nextId: 1, txt: "Choice 2" }] }];

function main() {
    populatePromt(prompts[0].txt);

    document.getElementById("choice1").innerHTML = `<p id="choice1" onclick="selectChoice(${prompts[0].choices[0].nextId})">${prompts[0].choices[0].txt}</p>`;
    document.getElementById("choice2").innerHTML = `<p id="choice2" onclick="selectChoice(${prompts[0].choices[1].nextId})">${prompts[0].choices[1].txt}</p>`;
}

//currently if you click the prompts too quickly, the displaying txt breaks
function selectChoice(choice) {

    //keeps getting undefined errors, but the page behaves as expected.
    populatePromt(prompts[choice].txt);

    //very sketchy way to have an n amount of choices
    for (let i = 0; i < prompts[choice].choices.length; i++) {
        document.getElementById(`choice${i + 1}`).innerHTML = `<p id="choice${choice}" onclick="selectChoice(${prompts[choice]["" + choice + i].nextId})">${prompts[choice]["" + choice + i].txt}</p>`;
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
