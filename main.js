// prompts: [{txt, choices [{nextId, txt}] }]

function main() {
  populatePromt(prompts[0].txt);

  // Add the first prompt choices
  selectChoice(0);

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
  const interval = setInterval(function () {
    if (index < txt.length) {
      resultStr += txt[index];
      p.innerText = resultStr;
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100);

}
