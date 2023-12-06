let prompts = [
    {
        txt: `
        Southern Britannia
        
        Somewhere Along the Banks of the Tamesis River
        
        Year Unknown
        
        At Least 200 Years Since the Roman Conquest (c. 43 AD)`,
        choices: [{ nextId: 1, txt: "Intro" },]
    }, {
        txt: `
        You awaken to the patter of rain and the crackling of fire. Amidst the wind and drizzle are the faint sounds of a dog's whimpers and a periodic shuffling on the roof. You push yourself up in bed, shifting the straw within it, and get to your feet.
        
        The room is cold, pervaded by the rich scent of damp and smoke. This is a quaint but comfortable home, a timber-framed structure around six pedes [feet] wide and eight across, built by your grandfather when your mother was a child. On this end of the house lies two beds-yours and your father's-laid parallel to the hearth, which smoulders silently as it struggles against the rain. The floor is cold and moist, a pallid gray made of clay and gravel (though your father insists he will fire some bricks and replace it any day now) that contrasts the vivid ochre walls. Tallow candles The other half of the house has transformed into little more than storage. Smoked eel and meats hang from the rafters, bags of grain litter the floor, and bundles of drying herbs and fruit rest atop a long empty barrel of wine. The rustle from the roof occurs again.
        
        There's much to be done`,
        choices: [{ nextId: 10, txt: "Stoke the Fire" }, { nextId: 15, txt: "Investigate the Noise" }]
    }, {
        txt: "Where do you want to go?",
        choices: [{ nextId: 3, txt: "Take a stroll down the street." }, { nextId: -0, txt: "Go to the market." }, { nextId: 1, txt: "Go back home." }]
    }, {
        txt: "As you walk down the street you see some men playing Ludus with a worn board by the side of the road. There is a group of them and there seems to be some betting going on as to whom will win, with money changing hands. Ludus Latrunculorum is a board game played with small stone tokens on a stone or wooden board consisting of a rectangle of cells, usually in a pattern such as 6x6, 7x7, 8x8 or other combinations, in this case wooden in a 8x8 pattern. The tokens are divided into two coloured sets, commonly white and black, and all counters are identical in function upon the board. The two players take turns moving pieces, which may move only in straight lines, which may not be diagonal. Pieces are captured by being placed between two pieces of the same colour (so white between two black for example) but again, not on the diagonal. A counter may be blocked from moving when two enemy pieces are adjacent to it, an may be freed from this by either capture of one of the two offending pieces or a friendly counter being moved into \"support\" of it, aka adjacent to the blocked counter. What do you do?",
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
        txt: "Despite playing cautiously you still lose pieces in probing exchanges as you try to assess your opponent's playstyle.  Unfortunately, he's too clever for you and manages to set up the board and surprise you in a way that you lose many pieces and have to concede.  His backers congratulate him on a cleverly played game.",
        choices: [{ nextId: 9, txt: "Next" }]
    }, {
        txt: "The game against your opponent is concluded and you stand up from the table to make room for the next set of players.  The group enjoyed watching your game and would be willing for you to play another opponent if you hung around.  On the other hand, maybe you would like to get on with your day?",
        choices: [{ nextId: 4, txt: "Wait around and play another Ludus game once the board is freed up" }, { nextId: 2, txt: "Move on with the rest of your day, perhaps visit the market like you planned to do." }]
    }, {
        txt: "You pull a piece of hazel wood from a pile by the hearth and carefully draw flame from the embers. Smoke bellows up the tiled flue and the room begins to warm. You feel at peace.",
        choices: [{ nextId: 11, txt: "Stoke the Fire" }, { nextId: 15, txt: "Investigate the Noise" }]
    }, {
        txt: "You insert another piece of wood into the fire and watch it blaze. You try to recall the name of the goddess soldiers invoked in moments like this. Ustrina? Caminus? Grandmother would know",
        choices: [{ nextId: 12, txt: "Stoke the Fire" }, { nextId: 15, txt: "Investigate the Noise" }]
    }, {
        txt: "Thick smoke begins to fill the room. Have you considered opening the door?",
        choices: [{ nextId: 13, txt: "Stoke the Fire" }, { nextId: 15, txt: "Investigate the Noise" }]
    }, {
        txt: "The fire flames out of control, embers floating through the air and quickly starting the house's frame ablaze. You rush outside, smoke choking your lungs, and are overwhelmed by the biting cold of the rain. Your father stands a distance away, cloak loose around his shoulders, staring at the burning house in shock. The rain does little to stop it. As the roof collapses, tiles fall inward and shatter against the ground. In a moment, your home is gone and taken all your worldly possessions with it.",
        choices: [{ nextId: 14, txt: "Next" }]
    }, {
        txt: "GAME OVER",
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: "You don your cloak to shelter from the rain, grab your coin purse, and exit outside. Your father is atop a ladder resting on the wall next to the door, methodically pulling tiles off the roof, tossing them onto the grass, and replacing them with new ones. You remember him mentioning a few days prior that he had fired new tiles for the roof, but had put off installing them as the weather had been calm. Or perhaps you were supposed to do it? You hear him cursing under his breath so perhaps the latter.",
        choices: [{ nextId: 16, txt: "Avoid Him and Head to the Herb Garden" }]
    }, {
        txt: "Not wanting to risk being chastised, you opt to go around to the other side of the house and see how your herbs are doing. You had considered growing a small field of spelt this year as well, but your uncle - the family farmer - insisted against it. You sensed he's already apprehensive about giving up herb duty and figured not to push him, content with the humble sanctuary you've been left with. Walled in by wattle fences your mother had woven, you watch the raindrops rattle the leaves and stalks of the various plants. Dill, celery, mustard, bullace, some stinging nettle and blackberry you hadn't bothered picking – enough to fill a cornucopia. It's best to wait until it's dryer to pick them, although the dill looks particularly appetizing in the rain.",
        choices: [{ nextId: 17, txt: "Continue to the River" }]
    }, {
        txt: "With your cloak keeping you warm and your father still working, you figure it best to continue a few hundred pedes onwards to the river. Despite the sour weather and gray skies, the vista was as gorgeous as ever. The rolling green hills shimmered in the wetness, the clusters of trees scattered along the landscape standing firm against the wind. Mice scatter as you march through tall grass; several cows shelter under a grand apple tree. You're amazed that the tree is still fruitful considering the river floods this valley every winter. You walk along the banks of the river and watch it flow, the rain making its current more aggressive than usual. It's noticeably low this time of year, ill-matched for a powerful name like Tamesis in its current state. The rain is starting to become bitingly cold. A fire would be nice right now.",
        choices: [{ nextId: 18, txt: "Continue to your Uncle's" }]
    }, {
        txt: "As you're already heading in the right direction, you decide to seek out your uncle's house in hopes he still has a fire going. Thankfully, a column of smoke billows on the horizon. He is perhaps the most humble man you know, a diligent farmer and the only family member still living in a thatch-roofed hut rather than a timber-framed home. Not without a great deal of toil, he cultivates just enough to provide for the entire extended family and pay the annona militaris. Wheat production, as you understand it, is rather complex. He has it transported off somewhere to be milled then returned after processing, meaning the millers also got a cut. To compensate, he also grows peas, beans, and barley. Father continually encourages him to sell the excess, says that we can survive on our own and that our share of wheat should be carted to Londinium for trade; uncle refuses. He's in it for family, not denarii. Besides, your other uncle rears cows and sheep and fishes liberally, making sure to give extra to our hardworking farmer. You find him nodding off by the fire.",
        choices: [{ nextId: 19, txt: "Sit by the Fire in Silence" }, { nextId: 21, txt: '"Need any help, Uncle?"' }]
    }, {
        txt: `You spend you're not sure how long sitting by the fire opposite him, watching his slow sleeping breaths. He looks so old, so tired. You wonder what will happen when he has to stop working. He gets help from the local men of Venta Belgarum out west during peak harvest, but they'll have no interest in taking over an operation that makes little profit. The men, many Rome-born, assist mostly out of kindness and kinship. Uncle once worked at the fort of Vinovia, first as a soldier and later as an overseer of logistics, making sure everyone stayed fed. He learned to read and write in Latin but to this day refuses to chart farm records anywhere other than in his head. You once saw him toss a stylus and wax tablets father had gifted him into the river. He doesn't like to talk about his days in the garrison. With the rain calming and his snores continuing, you decide to set off.`,
        choices: [{ nextId: 20, txt: "He Grabs Your Arm" }]
    }, {
        txt: `As you go to exit the hut, his calloused hand suddenly reaches out and grabs your arm. His eyes stay closed, his breathing still calm. You lean your head in as he begins muttering:
        "Market.. At Calleva… traders from all over… Empire… don't miss… bring wine…" 
        And, with these odd words, his arm goes limp and falls back to his side. Confused and concerned, you decide it best not to disobey his orders. You head towards the main road and begin marching north-east.`,
        choices: [{ nextId: 22, txt: "Road to Calleva" }]
    }, {
        txt: `"Hmm? Huh?!" he awakens from his stupor in a state of confusion, then shock, then mild annoyance, "Oh, it's you! Thought you were one of those caena that keeps stealing my grain. Looking for work, eh?"

        You nod, somewhat reluctantly.
        
        "Well, I know you're not one for much manual labour, at least not in the field… tell you what, the market at the forum in Calleva should have started. You might just make it if you hurry off now. I hear there's plenty of exotic stuff this time from all over the map. If they've got any amphoras of that wine from southern Gaul, you bring it back, alright? Least I deserve for all the work I do for you people!"
        
        With a clear goal set out and cranky energy from your uncle, you quickly say your goodbyes and rush off to the main road. From here you begin heading north-east, walking fast in the hope that all the good stuff doesn't sell out by the time you arrive`,
        choices: [{ nextId: 22, txt: "Road to Calleva" }]
    }, {
        txt: "Road to Calleva",
        choices: [{ nextId: 23, txt: "The Forum" }]
    }, {
        txt: "The Forum",
        choices: [{ nextId: 2, txt: "Next" }]
    }, {
        txt: "End of the game.",
        choices: []
    }

];
