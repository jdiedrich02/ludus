let prompts = [
    {
        txt: `Southern Britannia
        
        Somewhere Along the Banks of the Tamesis River
        
        Year Unknown
        
        At Least 200 Years Since the Roman Conquest (c. 43 AD)`,
        choices: [{ nextId: 1, txt: "Intro" },]
    }, {
        txt: `You awaken to the patter of rain and the crackling of fire. Amidst the wind and drizzle are the faint sounds of a dog's whimpers and a periodic shuffling on the roof. You push yourself up in bed, shifting the straw within it, and get to your feet. 
        The room is cold, pervaded by the rich scent of damp and smoke. This is a quaint but comfortable home, a timber-framed structure around six pedes [feet] wide and eight across, built by your grandfather when your mother was a child. On this end of the house lies two beds—yours and your father's—laid parallel to the hearth, which smoulders silently as it struggles against the rain.`,
        choices: [{ nextId: 2, txt: ">>>" },]
    }, {
        txt: `The floor is cold and moist, a pallid gray made of clay and gravel (though your father insists he will fire some bricks and replace it any day now) that contrasts the vivid ochre walls. Tallow candles illuminate the space. The other half of the house has transformed into little more than storage. Smoked eel and meats hang from the rafters, bags of grain litter the floor, and bundles of drying herbs and fruit rest atop a long empty barrel of wine. The rustle from the roof occurs again.

        There's much to be done.
        `,
        choices: [{ nextId: 13, txt: "Stoke the Fire" }, { nextId: 18, txt: "Investigate the Noise" }]
    }, {
        txt: "As you pass up through the south of the town, you reach an intersection. The road is intensely busy and you step to the side to avoid traffic. Carts pulled by horses and men alike pass by from east to west; a young boy leading a calf passes by you towards the south; a flock of ducks cross from one garden to another, their owner nowhere in sight.",
        choices: [{ nextId: 4, txt: ">>>" }]
    }, {
        txt: "In every direction you look, the roads are hemmed in by a variety of buildings. Some L-shaped and made of white stone (temples, perhaps), others simple timber constructions with thatch roofs, all teeming with life and the sound of Latin. Some have vividly painted outer walls, their colours popping out amidst the gray sky and dirty roads. You see another massive brick-built structure to your right, its entrance adorned with fine red fabrics. You initially believe it to be a temple, but as you look closer you see the distinct rise of steam from some of the windows—a bathhouse! Here men can sweat out their suffering and find peaceful recreation. It's tempting, but you must move onwards towards the forum.",
        choices: [{ nextId: 5, txt: "Take a stroll down the street." }, { nextId: 30, txt: "The Forum." }, { nextId: 2, txt: "Go back home." }]
    }, {
        txt: "As you walk down the street you see some men playing Ludus with a worn board by the side of the road. There is a group of them and there seems to be some betting going on as to whom will win, with money changing hands.",
        choices: [{ nextId: 6, txt: ">>>" }]
    }, {
        txt: "Ludus Latrunculorum is a board game played with small stone tokens on a stone or wooden board consisting of a rectangle of cells, usually in a pattern such as 6x6, 7x7, 8x8 or other combinations, in this case wooden in a 8x8 pattern. The tokens are divided into two coloured sets, commonly white and black, and all counters are identical in function upon the board. The two players take turns moving pieces, which may move only in straight lines, which may not be diagonal. Pieces are captured by being placed between two pieces of the same colour (so white between two black for example) but again, not on the diagonal. A counter may be blocked from moving when two enemy pieces are adjacent to it, an may be freed from this by either capture of one of the two offending pieces or a friendly counter being moved into \"support\" of it, aka adjacent to the blocked counter. What do you do?",
        choices: [{ nextId: 7, txt: "Join the group and play a game." }, { nextId: 4, txt: "Continue on down the street." }]
    }, {
        txt: "Once it is your turn to play you sit down across from your opponent and you both reset the board with the starting number of pieces, 25 a side for the 8x8 board. A decision is made as to who takes first move, and you begin. How do you play?",
        choices: [{ nextId: -1, txt: "You make aggressive moves in the middle of the board, risking pieces." }, { nextId: -2, txt: "Play more defensively to see how your opponent plays." }]
    }, {
        txt: "You have to sacrifice some pieces, but you manage to break your opponents defense with a large mass of pieces and he eventually concedes the game with your pieces in his lines rear.  Those who bet on you congratulate you.",
        choices: [{ nextId: 12, txt: ">>>" }]
    }, {
        txt: "Your gamble does not pay off, you lose too many pieces trying to break your opponent, and ultimately, he forces you to concede the game.  Those who bet on him congratulate him as they collect their winnings.",
        choices: [{ nextId: 12, txt: ">>>" }]
    }, {
        txt: "Opening cautiously you spot your opponents attempts to draw your pieces into positions he can pick them off and trade a few pieces to assess his playstyle.  Once you have his measure you manage to take enough pieces to force him to concede the game.  As they collect their winnings your backers congratulate you on a skilled game.",
        choices: [{ nextId: 12, txt: ">>>" }]
    }, {
        txt: "Despite playing cautiously you still lose pieces in probing exchanges as you try to assess your opponent's playstyle.  Unfortunately, he's too clever for you and manages to set up the board and surprise you in a way that you lose many pieces and have to concede.  His backers congratulate him on a cleverly played game.",
        choices: [{ nextId: 12, txt: ">>>" }]
    }, {
        txt: "The game against your opponent is concluded and you stand up from the table to make room for the next set of players.  The group enjoyed watching your game and would be willing for you to play another opponent if you hung around.  On the other hand, maybe you would like to get on with your day?",
        choices: [{ nextId: 7, txt: "Wait around and play another Ludus game once the board is freed up" }, { nextId: 4, txt: "Move on with the rest of your day, perhaps visit the market like you planned to do." }]
    }, {
        txt: "You pull a piece of hazel wood from a pile by the hearth and carefully draw flame from the embers. Smoke bellows up the tiled flue and the room begins to warm. You feel at peace.",
        choices: [{ nextId: 14, txt: "Stoke the Fire" }, { nextId: 18, txt: "Investigate the Noise" }]
    }, {
        txt: "You insert another piece of wood into the fire and watch it blaze. You try to recall the name of the goddess soldiers invoked in moments like this. Ustrina? Caminus? Grandmother would know",
        choices: [{ nextId: 15, txt: "Stoke the Fire" }, { nextId: 18, txt: "Investigate the Noise" }]
    }, {
        txt: "Thick smoke begins to fill the room. Have you considered opening the door?",
        choices: [{ nextId: 16, txt: "Stoke the Fire" }, { nextId: 18, txt: "Investigate the Noise" }]
    }, {
        txt: "The fire flames out of control, embers floating through the air and quickly starting the house's frame ablaze. You rush outside, smoke choking your lungs, and are overwhelmed by the biting cold of the rain. Your father stands a distance away, cloak loose around his shoulders, staring at the burning house in shock. The rain does little to stop it. As the roof collapses, tiles fall inward and shatter against the ground. In a moment, your home is gone and taken all your worldly possessions with it.",
        choices: [{ nextId: 17, txt: ">>>" }]
    }, {
        txt: "GAME OVER",
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: "You don your cloak to shelter from the rain, grab your coin purse, and exit outside. Your father is atop a ladder resting on the wall next to the door, methodically pulling tiles off the roof, tossing them onto the grass, and replacing them with new ones. You remember him mentioning a few days prior that he had fired new tiles for the roof but had put off installing them as the weather had been calm. Or perhaps you were supposed to do it? You hear him cursing under his breath so perhaps the latter.",
        choices: [{ nextId: 19, txt: "Avoid Him and Head to the Herb Garden" }]
    }, {
        txt: "Not wanting to risk being chastised, you opt to go around to the other side of the house and see how your herbs are doing. You had considered growing a small field of spelt this year as well, but your uncle - the family farmer - insisted against it. You sensed he's already apprehensive about giving up herb duty and figured not to push him, content with the humble sanctuary you've been left with. Walled in by wattle fences your mother had woven, you watch the raindrops rattle the leaves and stalks of the various plants. Dill, celery, mustard, bullace, some stinging nettle and blackberry you hadn't bothered picking – enough to fill a cornucopia. It's best to wait until it's dryer to pick them, although the dill looks particularly appetizing in the rain.",
        choices: [{ nextId: 20, txt: "Continue to the River" }]
    }, {
        txt: "With your cloak keeping you warm and your father still working, you figure it best to continue a few hundred pedes onwards to the river. Despite the sour weather and gray skies, the vista is as gorgeous as ever. The rolling green hills shimmer in the wetness; the clusters of trees scattered along the landscape stand firm against the wind. Mice scatter as you march through tall grass; several cows shelter under a grand apple tree. You're amazed that the tree is still fruitful considering the river floods this valley every winter. You walk along the banks of the river and watch it flow, the rain making its current more aggressive than usual. It's noticeably low this time of year, ill-matched for a powerful name like Tamesis in its current state. The rain is starting to become bitingly cold. A fire would be nice right now.",
        choices: [{ nextId: 21, txt: "Continue to your Uncle's" }]
    }, {
        txt: "As you're already heading in the right direction, you decide to seek out your uncle's house in hopes he still has a fire going. Thankfully, a column of smoke billows on the horizon. He is perhaps the most humble man you know, a diligent farmer and the only family member still living in a thatch-roofed hut rather than a timber-framed home.",
        choices: [{ nextId: 22, txt: ">>>" }]
    }, {
        txt: "Not without a great deal of toil, he cultivates just enough to provide for the entire extended family and pay the annona militaris. Wheat production, as you understand it, is rather complex. He has it transported off somewhere to be milled then returned after processing, meaning the millers also got a cut. To compensate, he also grows peas, beans, and barley. Father continually encourages him to sell the excess, says that we can survive on our own and that our share of wheat should be carted to Londinium for trade; uncle refuses. He's in it for family, not denarii. Besides, your other uncle rears cows and sheep and fishes liberally, making sure to give extra to our hardworking farmer. You find him nodding off by the fire.",
        choices: [{ nextId: 23, txt: "Sit by the Fire in Silence" }, { nextId: 25, txt: '"Need any help, Uncle?"' }]
    }, {
        txt: `You spend you're not sure how long sitting by the fire opposite him, watching his slow sleeping breaths. He looks so old, so tired. You wonder what will happen when he has to stop working. He gets help from the local men of Venta Belgarum out west during peak harvest, but they'll have no interest in taking over an operation that makes little profit. The men, many Rome-born, assist mostly out of kindness and kinship. Uncle once worked at the fort of Vinovia, first as a soldier and later as an overseer of logistics, making sure everyone stayed fed. He learned to read and write in Latin but to this day refuses to chart farm records anywhere other than in his head. You once saw him toss a stylus and wax tablets father had gifted him into the river. He doesn't like to talk about his days in the garrison. With the rain calming and his snores continuing, you decide to set off.`,
        choices: [{ nextId: 24, txt: "He Grabs Your Arm" }]
    }, {
        txt: `As you go to exit the hut, his calloused hand suddenly reaches out and grabs your arm. His eyes stay closed, his breathing still calm. You lean your head in as he begins muttering:
        "Market... At Calleva... traders from all over... Empire... don't miss... bring wine..." 
        And, with these odd words, his arm goes limp and falls back to his side. Confused and concerned, you decide it best not to disobey his orders. You head towards the main road and begin marching north-east.`,
        choices: [{ nextId: 27, txt: "Road to Calleva" }]
    }, {
        txt: `"Hmm? Huh?!" he awakens from his stupor in a state of confusion, then shock, then mild annoyance, "Oh, it's you! Thought you were one of those caena that keeps stealing my grain. Looking for work, eh?"

        You nod, somewhat reluctantly.
        
        "Well, I know you're not one for much manual labour, at least not in the field... tell you what, the market at the forum in Calleva should have started. You might just make it if you hurry off now. I hear there's plenty of exotic stuff this time from all over the map. If they've got any amphoras of that wine from southern Gaul, you bring it back, alright? Least I deserve for all the work I do for you people!"`,
        choices: [{ nextId: 26, txt: ">>>" }]
    }, {
        txt: "With a clear goal set out and cranky energy from your uncle, you quickly say your goodbyes and rush off to the main road. From here you begin heading north-east, walking fast in the hope that all the good stuff doesn't sell out by the time you arrive.",
        choices: [{ nextId: 27, txt: "Road to Calleva" }]
    }, {
        txt: "Getting to town is inevitably the most insufferable part of rural living. You only live a few hours walking distance away from Calleva, the local center of trade and excitement, but it's such a dreadfully boring walk. Over the course of your journey you see (discounting the vistas and forests you're already used to): 132 birds, 46 cows, 57 sheep, 2 ponds of ducks and frogs, 14 passers-by, 4 carts and 16 horses. This is the extent of the entertainment available along this road. Oh how you wish someone would rob you and free you from this boredom! Eventually, as your feet begin to tire, you see the bustle of the town in the distance and begin your approach towards the south gate.",
        choices: [{ nextId: 28, txt: "Towards the Forum" }]
    }, {
        txt: "Calleva has always intimidated you. Supposedly it was once a small town, its inhabitants getting by not dissimilarly from your rural lifestyle. Though you've never travelled it, the road between here and Londinium is robust and well-built, its refuse contained by ditches on either side that keep it largely clear of debris. Parts nearest the cities are paved with stone, a fine step up from the trodden dirt paths you are used to; even the well-used gravel road between here and Venta Belgarum pales in comparison. It makes sense, then, that Calleva has been built up as much as it has.",
        choices: [{ nextId: 29, txt: ">>>" }]
    }, {
        txt: "Entering into the town, you are immediately struck by a grand sight to the left of the road: a giant, grandiose building made of red stone with tiles of complex design as roofing. You've been to enough local potteries in your life to know that these are foreign-made, perhaps in Gaul. This isn't particularly surprising - Calleva is an ever-busy crossroads, always filled with traffic of travelers, soldiers, farmers, tradesmen, miners, and more. It's the hottest place to be, outside of Londinium, at least. You suddenly remember coming here with your uncle a few years ago, when he called this building a mansio, a building used for business and administration by men from Rome. The wealth of horses in its courtyard further reminds you that this is part of the cursus publicus, allowing you to send mail across the empire. Not wanting to get distracted, you continue on.",
        choices: [{ nextId: 4, txt: "Intersection" }]
    }, {
        txt: `As you near the center of town, you're stopped in your tracks as you spot a building so massive it makes the last two look like huts in comparison. Walls far taller than you, made of flint and white mortar, stretch across an area as large as your father's entire property. As you step towards the eastern entrance, you realize the entire construction is elevated slightly on limestone bricks. 

        Inside is a grand, open-air courtyard dense with people. Stalls of all sorts are arranged quite neatly in perpendicular rows, selling anything and everything; despite this organization, the traffic of people is chaotic and overwhelming. You slowly move westward across the courtyard, noting that the walls of the forum to the north and south are, in fact, buildings, housing a number of rooms. Based on the glimpses of drab desks and stacks of tablets, you figure they're used for administration. Others seem to be shops, although what they're selling you're unwilling to find out.`,
        choices: [{ nextId: 31, txt: ">>>" }]
    }, {
        txt: "West of the courtyard is a large and intimidating rectangular structure: the Basilica. It is two-storeyed, at least 25 pedes tall, seemingly built of both timber and stone. The roof is made of tiles similar to those of the mansio, effective at their purpose but strange looking compared to the thatched roofs of much of the town. A wide portico and its colonnade, its columns made of what looks like marble, shield the array of entrances from the sun. You enter into the main hall, still amazed at the height of the roof, to find the floor made of uneven mortar. On the wall, obscured by columns, is a large abstract mosaic made up of small bits of polished marble in all different shapes, arranged to make an odd but compelling picture—like a fancy and more purposeful stone road affixed to a wall. Remembering the amount of people here already purchasing things, you return your focus to your task.",
        choices: [{ nextId: 32, txt: "Marketplace" }]
    }, {
        txt: "In the centre of this great hall is a range of vendors, most having seen less traffic than those outside and still stocked up on an array of goods. Three in particular catch your eye: the first is lacking a stall entirely, made up simply of a pale, stout man standing amongst a range of jars, amphorae, and barrels - you sense it's mostly wine; the second is an elaborately crafted stall draped in colourful fabrics, run by a man with dark skin wearing a long red tunic - he seems to be selling curios and oddities from the far south; the third is a simple stall operated by a small man in a decorated white toga selling what looks to be religious ephemera. As an increasingly large crowd enters the building, you get the sense you'll only have time to visit one of these stores.",
        choices: [{ nextId: 33, txt: "Store I - Jar Man" }, { nextId: 36, txt: "Store II - Curios" }, { nextId: 40, txt: "Store III - Religious Ephemera" }]
    }, {
        txt: `Remembering the tasks laid before you, you decide to act responsibly and look for an amphora of wine. You notice that some of the man's wares, mostly the barrels, are caked with dust and littered with strange markings. He coughs roughly as you approach.
        "Fluids! Get your fluids, here! Thick and thin, viscous and watery! I've got wines from all over - Gaul, Hispania, Africa! Oils from the freshest olives in the Mediterranean!" 
        You ask him what you can afford with the contents of your coin purse; he scowls at you.
        "Well... you're not getting the high-grade stuff with money like that, sorry to say. Let me think." He starts casually examining the various containers around him, seemingly doing the math in his head.
        
        "Alright, for that much I've only got two potential products. The first? This amphora of olive oil from Graecia. Only half full to tell you the truth, but look at that patterning! Reusable after the fact, practically two products in one. And that oil is good for all sorts of things: cooking, anointing, wrestling... endless possibilities."
        He then directs your attention to a beaten up cask to his right. 
        "If that's not your fancy, here's a classic barrel o' wine. From south Gaul, I think. Proper full, this one is, except not as pretty." 
        What will you buy?`,
        choices: [{ nextId: 34, txt: "Amphora of Oil" }, { nextId: 35, txt: "Barrel of Wine" }]
    }, {
        txt: "Too interested by the amphora's fanciful design, you give over your money and decide to take it home. Decoratively painted on the rim is a simple depiction of two wolves playing. You're not quite sure what you'll do with this oil, but surely your grandmother will have an idea. You worry that you've overpaid for only half an amphora. As you begin the long walk home and already grow slightly uncomfortable with its weight, you suddenly become thankful it's not full.",
        choices: [{ nextId: 46, txt: "Return Home" }]
    }, {
        txt: "Although it's plain looking and seemingly quite old, you figure it best to fulfill your goals and buy some wine. The man gives you a devious grin then laughs heartily when you admit you haven't brought a cart with you. It's going to be a tough walk home...",
        choices: [{ nextId: 46, txt: "Return Home" }]
    }, {
        txt: `Enraptured by this novel figure and fine display, you head over to the stall of oddities and inquire what's available.
        "You have good taste," he boasts, "as few here have. You see, I am—and do not listen to the naysayers who refute this fact—a direct descendant of Ptolemy the First, king of kings! I have dedicated my life to travelling around this fine empire, spreading the culture of my people through these priceless historical artifacts!"
        You consider asking who this "Ptolemy" fellow is, but instead want to know why he would be willing to part with supposedly priceless artifacts.`,
        choices: [{ nextId: 37, txt: ">>>" }]
    }, {
        txt: `"Oh... priceless, unique, one-of-a-kind. All true and more! Us in Aegyptus have such a wealth of special items that we have no choice but to get rid of them to make space." His expression is remarkably blank. You tell him how much you are willing to spend and he quickly recommends two items.

        "This is a very special piece of the collection: a little figurine of a gazelle, made of ivory. It does not have much spiritual power but look at that remarkable craftsmanship! Perfect gift for a mother or a father or a grandparent or an adult or a child. If you are looking for something more... powerful, I recommend this: a bag of crocodile teeth. Have you heard of a crocodile? Terrifying beast, hunter of the gazelle. Ten feet tall, runs on two legs, effectively unstoppable. I typically sell these to the soldiers that pass through as they provide good luck in battle, but they have stopped buying them! They call me a liar! ME! How dare they."`,
        choices: [{ nextId: 38, txt: "Gazelle Figurine" }, { nextId: 39, txt: "Crocodile Teeth" }]
    }, {
        txt: "You know you're supposed to buy something with some use, but you can't resist the allure of this cute little figure. It resembles a deer mixed with a goat, its sharp and curved horns unfitting for its weak and small frame. You thank the man and begin the journey home, only now beginning to worry what your father will think of how you spent your money.",
        choices: [{ nextId: 46, txt: "Return Home" }]
    }, {
        txt: `Oh, how this man can tell a tale! The possibility of good luck is exciting and the story of this ferocious "crocodile" creature is so frightening that you buy the teeth out of desperation for security. Perhaps you'll give them to your uncle, a gift for all the work he's done and a reminder of his military service. You start walking home, feeling unstoppable.`,
        choices: [{ nextId: 46, txt: "Return Home" }]
    }, {
        txt: `The man in the toga (at least you think that's what it's called) is remarkably short but carries himself with such refinement that you decide to investigate. His stall is bereft of attention, and he quickly focuses on you as you approach.
        "Salutations, good Briton! Tell me, young one, have you fallen into the clutches of that dastardly Cult of Christ?"
        The name sounds familiar but you're not sure, so you ask him what he means.`,
        choices: [{ nextId: 41, txt: ">>>" }]
    }, {
        txt: `"Oh, goodness! A pure one? Don't worry about it, my child. Let wax shut your ears entirely from their corruption! I am here to spread word of the one true god to the people of Britannia. These savages will point you towards figures like Jupiter or Juno. I even heard that Aegyptus fellow mention someone by the name of Serapis. But I have travelled far and been ostracized by entire provinces to reveal the truth! There is one god and his name is Dionysus! All others are falsities, fabricated to oppress his power and muddy his origins."

        He seems to be becoming increasingly more unhinged and loud the more passionate he gets. You interrupt and ask what you can afford.`,
        choices: [{ nextId: 42, txt: ">>>" }]
    }, {
        txt: `"Oh, how glad I am you asked! For that much? I shall offer you one of my writings. Translated into Latin by yours truly. This is a work by a charming fellow—long dead now, of course—by the name of Epicurius. He advocates a truly Dionysian lifestyle, a life lived for pleasure above all else. The crossed out sections? Just some things he said about the gods - don't worry about it. Alternatively, I also have..." he looks around suspiciously before pulling a concealed item from below the stall.`,
        choices: [{ nextId: 43, txt: ">>>" }]
    }, {
        txt: `"I'm not entirely sure I should be selling this to you, but I must get it off my hands before it lands me in trouble. It is a genuine drinking horn. This is a special artifact from my home of Graecia, at least one hundred years old. As you can see, it features depictions of men and women doing some... interesting things. I have been told this was used in worship of our great god, for it is true that this is the kind of imagery he loves! But the people here? They don't understand it. They find it... inappropriate for a public market. You'll be doing me a favour."`,
        choices: [{ nextId: 44, txt: "Epicurean Writings" }, { nextId: 45, txt: "Suspicious Horn" }]
    }, {
        txt: `Your ability to read is pitiful, but you're sure uncle would be willing to help. He's so grouchy, after all, that perhaps a new perspective will serve him well. You're not sure about this Dionysus figure, but from the few words on the parchment you understand, it doesn't seem to be about him anyway. You depart back towards your home, hoping to visit your uncle tomorrow and that he'll understand your intentions.`,
        choices: [{ nextId: 46, txt: "Return Home" }]
    }, {
        txt: `This is a bad idea. That's all you can think as you hand this strange man your money and conceal the horn under your cloak. You'll have to hide it when you get home or father will throw it in the kiln. You were supposed to be buying something useful! What in gods' names were you thinking? You begin marching home, asking yourself that question the whole way back.`,
        choices: [{ nextId: 46, txt: "Return Home" }]
    }, {
        txt: `The walk home is long and boring, and the sun sets as you near your destination. For the last several hundred pedes you are in complete darkness, the cloudy night sky blackening out the moon and stars. You navigate on instinct and memory alone, long familiar with how to get to your house from the main road. You hear the distant rushing of the river and the crackling of fire, and at last make it back. Your father has gotten the roof retiled despite the rain and, as you enter, he greets you warmly.

        "There you are! Not much help today, were you?"
        You apologize for your absence, explaining the events of the day and recounting how your uncle sent you to Calleva. Your father seems indifferent but dismisses his irritation. 
        "So, what was it you bought?"`,
        choices: [{ nextId: -3, txt: ">>>" }]
    }, {
        txt: `[Oil - Ending] 

        You present the colourful amphora of olive oil. He is at first concerned by the potential price of such a product, but upon learning it's only half-full eases up. 
        "Not much of cooks, are we? But I suppose your grandmother will know what to make of it! And it's a wonderful vessel..." 
        Your father is enraptured not with the product but simply its container. What else can be expected of a man who's dedicated his life to pottery? It seems that strange salesman was right after all.`,
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: `[Wine - Ending]

        You open the door and slowly roll the barrel of wine inside, your muscles still aching from pushing and pulling and lugging it on the way back. He inspects the barrel with suspicion before getting up close and taking a deep sniff. His face turns red with anger
        "This... is garum! What are we going to do with a barrel of fish sauce!!"
        As your father berates you, all you can think about is that salesman's villainous laugh.`,
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: `[Gazelle - Ending] 

        You pull the gazelle figurine from your cloak and present it proudly. He is apprehensive at first, slowly asking: "What... is it?" You explain what the man at the market had told you and insist he hold it. Feeling the smoothness of the ivory and appreciating the complexity of its craftsmanship, your father forgets how much you paid for it and simply revels in its cuteness.`,
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: `[Crocodile Teeth - Ending] 

        You hesitantly show your father the bag of teeth and, before he can properly react, intervene with the tall tale of the "crocodile" monster the man told you. He refuses to believe it and insists you've been scammed. You angrily suggest otherwise and tell him your uncle will love it, but your father retorts that the last thing he wants to be reminded of is his time in the military. Consumed by anger, you snarkily tell him that you'll prove him wrong, and hastily depart towards your uncle's hut. However, in your blind rage and the overwhelming darkness you lose track of where you are, ultimately falling into the river and drowning. Maybe the teeth weren't so lucky...`,
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: `[Horn - Ending] 

        As they say (who they are you don't know), chickens always come home to roost. It was inevitable. It's time to own up to your mistakes. Show him the drinking horn. Do it. Oh, don't you dare hide it outside. You're telling him you bought nothing, that you were robbed?? How far you've fallen. Lying to this extent! To your own father! What would Dionysus think? What a terrible waste of a day.`,
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }, {
        txt: `[Epicurean Writings - Ending]

        You pull the parchment from your cloak and show it to him. Your father is even more illiterate than you, so he's rather perplexed. You insist it was a good purchase, that your uncle will surely read it out to you, but your father has his doubts. When you explain that it discusses living life for pleasure he merely laughs, agreeing that your uncle will enjoy it, then goes about his work. All things considered, it could've gone worse!`,
        choices: [{ nextId: 0, txt: "Play Again?" }]
    }

];
