// prompts: [{txt, choices [{nextId, txt}] }]

//Used to stop glitchy txt if cliking next choice too fast
var typingToScreen = false;
var txtSkip = false;

var ending;

function main() {
  populatePromt(prompts[0].txt);

  // Add the first prompt choices
  selectChoice(0);

}


function selectChoice(choice) {

  if (typingToScreen) {
    txtSkip = true;
  }

  // A negative choice means a more complex decision about the next prompt must be made.
  if (choice < 0) {

    complexPrompt(choice);

  } else {

    populatePromt(prompts[choice].txt);
    document.getElementById('choices').innerHTML = "";

    // Remembering players choice, decides the ending
    switch (choice) {
      case 35:
        ending = 48;
        break;
      case 36:
        ending = 49;
        break;
      case 39:
        ending = 50;
        break;
      case 40:
        ending = 51;
        break;
      case 45:
        ending = 53;
        break;
      case 46:
        ending = 52;
        break;
    }

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

  typingToScreen = true;

  const interval = setInterval(function () {

    if (txtSkip) {
      txtSkip = false;
      clearInterval(interval);
    }

    if (index < txt.length) {
      resultStr += txt[index];
      p.innerText = resultStr;
      index++;
    } else {
      typingToScreen = false;
      clearInterval(interval);
    }
  }, 25); // changed from 100 to 1 for testing

}

//Deals with deciding win/loss of Ludus game & endings
function complexPrompt(choice) {

  document.getElementById('choices').innerHTML = "";

  let choiceText = document.createElement('p');

  let resultId;

  //-1 is aggresive playstyle.
  if (choice == -1) {

    //random num 1-10. 1-3 = win, 4-10 = loss
    let won = (Math.floor(Math.random() * 11) < 4);

    if (won) {
      resultId = 8;
    } else {
      resultId = 9;
    }

    // -2 is conservative playtsyle.
  } else if (choice == -2) {

    //random num 1-10. 1-6 = win, 7-10 = loss
    let won = (Math.floor(Math.random() * 11) < 7);

    if (won) {
      resultId = 10;
    } else {
      resultId = 11;
    }

    // Deals with the endings
  } else if (choice == -3) {
    resultId = ending;
  }

  populatePromt(prompts[resultId].txt);

  // Assumes there is only 1 possible choice for the new prompt
  choiceText.innerHTML = `<p class="choicesPrompt" onclick="selectChoice(${prompts[resultId].choices[0].nextId})">${prompts[resultId].choices[0].txt}</p>`;

  document.getElementById('choices').appendChild(choiceText);
}
