let prompts = [
    {
        txt: "Start of the game. Describe in detail the setting & any important info for the user",
        choices: [{ nextId: 1, txt: "Home" },]
    }, {
        txt: "Description of the character's home",
        choices: [{ nextId: 2, txt: "Go outside." }, { nextId: 10, txt: "Turn in for the day." }]
    }, {
        txt: "Where do you want to go?",
        choices: [{ nextId: 3, txt: "Take a stroll down the street." }, { nextId: 10, txt: "Go to the market." }, { nextId: 1, txt: "Go back home." }]
    }, {
        txt: "As you walk down the street you see some men playing Ludus with a worn board by the side of the road. There is a group of them and there seems to be some betting going on as to whom will win, with money changing hands. Ludus Latrunculorum is a board game played with small stone tokens on a stone or wooden board consisting of a rectangle of cells, usually in a pattern such as 6x6, 7x7, 8x8 or other combinations, in this case wooden in a 8x8 pattern. The tokens are divided into two coloured sets, commonly white and black, and all counters are identical in function upon the board. The two players take turns moving pieces, which may move only in straight lines, which may not be diagonal. Pieces are captured by being placed between two pieces of the same colour (so white between two black for example) but again, not on the diagonal. A counter may be blocked from moving when two enemy pieces are adjacent to it, an may be freed from this by either capture of one of the two offending pieces or a friendly counter being moved into “support” of it, aka adjacent to the blocked counter. What do you do?",
        choices: [{ nextId: 4, txt: "Join the group and play a game." }, { nextId: 2, txt: "Continue on down the street." }]
    }, {
        txt: "Once it is your turn to play you sit down across from your opponent and you both reset the board with the starting number of pieces, 25 a side for the 8x8 board. A decision is made as to who takes first move, and you begin. How do you play?",
        choices: [{ nextId: -1, txt: "You make aggressive moves in the middle of the board, risking pieces." }, { nextId: -2, txt: "Play more defensively to see how your opponent plays." }]
    }, {
        txt: "You have to sacrifice some pieces, but you manage to break your opponents defense with a large mass of pieces and he eventually concedes the game with your pieces in his lines rear.  Those who bet on you congratulate you.",
        choices: [{ nextId: 9, txt: "Next" }]
    }, {
        txt: "Your gamble does not pay off, you lose too many pieces trying to break your opponent, and ultimately, he forces you to concede the game.  Those who bet on him congratulate him as they collect their winnings.",
        choices: [{ nextId: 9, txt: "Next" }]
    }, {
        txt: "Opening cautiously you spot your opponents attempts to draw your pieces into positions he can pick them off and trade a few pieces to assess his playstyle.  Once you have his measure you manage to take enough pieces to force him to concede the game.  As they collect their winnings your backers congratulate you on a skilled game.",
        choices: [{ nextId: 9, txt: "Next" }]
    }, {
        txt: "Despite playing cautiously you still lose pieces in probing exchanges as you try to assess your opponent’s playstyle.  Unfortunately, he’s too clever for you and manages to set up the board and surprise you in a way that you lose many pieces and have to concede.  His backers congratulate him on a cleverly played game.",
        choices: [{ nextId: 9, txt: "Next" }]
    }, {
        txt: "The game against your opponent is concluded and you stand up from the table to make room for the next set of players.  The group enjoyed watching your game and would be willing for you to play another opponent if you hung around.  On the other hand, maybe you would like to get on with your day?",
        choices: [{ nextId: 4, txt: "Wait around and play another Ludus game once the board is freed up" }, { nextId: 2, txt: "Move on with the rest of your day, perhaps visit the market like you planned to do." }]
    }, {
        txt: "End of the game.",
        choices: []
    }

];
