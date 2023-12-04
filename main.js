// prompts: [{txt, choices [{nextId, txt}] }]

function main() {
  populatePromt(prompts[0].txt);

  // Add the first prompt choices
  selectChoice(0);

}

//currently if you click the prompts too quickly, the displaying txt breaks
function selectChoice(choice) {

  // A negative choice means a more complex decision about the next prompt must be made.
  if (choice < 0) {

    complexPrompt(choice);

  } else {

    populatePromt(prompts[choice].txt);
    document.getElementById('choices').innerHTML = "";

    // Way to have an n amount of choices
    for (let i = 0; i < prompts[choice].choices.length; i++) {
      let choiceText = document.createElement('p');
      choiceText.innerHTML = `<p class="choicesPrompt" onclick="selectChoice(${prompts[choice].choices[i].nextId})">${prompts[choice].choices[i].txt}</p>`;
      document.getElementById('choices').appendChild(choiceText);
    }
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
  }, 1); // changed from 100 to 1 for testing

}

//For now only deals with deciding win/loss of Ludus game.
function complexPrompt(choice) {

  document.getElementById('choices').innerHTML = "";

  let choiceText = document.createElement('p');

  let resultId;

  //-1 is aggresive playstyle.
  if (choice == -1) {

    //random num 1-10. 1-3 = win, 4-10 = loss
    let won = (Math.floor(Math.random() * 11) < 4);

    if (won) {
      resultId = 5;
    } else {
      resultId = 6;
    }

    // -2 is conservative playtsyle.
  } else if (choice == -2) {

    //random num 1-10. 1-6 = win, 7-10 = loss
    let won = (Math.floor(Math.random() * 11) < 7);

    if (won) {
      resultId = 7;
    } else {
      resultId = 8;
    }

  }

  populatePromt(prompts[resultId].txt);

  // Assumes there is only 1 possible choice for the new prompt
  choiceText.innerHTML = `<p class="choicesPrompt" onclick="selectChoice(${prompts[resultId].choices[0].nextId})">${prompts[resultId].choices[0].txt}</p>`;

  document.getElementById('choices').appendChild(choiceText);
}
