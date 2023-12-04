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

    populatePromt(prompts[choice].txt);
    document.getElementById('choices').innerHTML = "";

    // Way to have an n amount of choices
    for (let i = 0; i < prompts[choice].choices.length; i++) {
        let choiceText = document.createElement('p');
        choiceText.innerHTML = `<p class="choicesPrompt" onclick="selectChoice(${prompts[choice].choices[i].nextId})">${prompts[choice].choices[i].txt}</p>`;
        document.getElementById('choices').appendChild(choiceText);
    }

}

function populatePromt(txt) {

    let p = document.getElementById("promptTxt");
    p.innerText = "";

    let index = 0;
    let resultStr = '';
    const interval = setInterval(function() {
      if (index < txt.length) {
        resultStr += txt[index];
        p.innerText = resultStr;
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

}
