const GetCharacterClasses = () => {
    const characterClasses = {
        android: {
            displayText: 'Android',
            strength: 0,
            speed: 0,
            intellect: 20,
            combat: 0,
            sanity: 0,
            fear: 60,
            body: 0,
            wounds: 3,
            variableSkillModifier: -10,
            skills: [
                'linguistics',
                'computers',
                'mathematics'
            ],
            trained: {
                linguistics: true,
                zoology: false,
                botany: false,
                geology: false,
                industrialEquipment: false,
                juryRigging: false,
                chemistry: false,
                computers: true,
                zeroG: false,
                mathematics: true,
                art: false,
                archaeology: false,
                theology: false,
                militaryTraining: false,
                rimwise: false,
                athletics: false
            },
            expert: {
                hacking: false,
                physics: false             
            },
            master: {},
            bonus: "Choose 1 EXPERT skill OR 2 TRAINED skills",
            traumaResponse: 'Fear saves made by nearby friendly players are at disadvantage.'
        },
        marine: {
            displayText: 'Marine',
            value: 'marine',
            strength: 0,
            speed: 0,
            intellect: 0,
            combat: 10,
            sanity: 0,
            fear: 10,
            body: 10,
            wounds: 3,
            variableSkillModifier: 0,
            skills: [
                'militaryTraining',
                'athletics'
            ],
            trained: {
                linguistics: false,
                zoology: false,
                botany: false,
                geology: false,
                industrialEquipment: false,
                juryRigging: false,
                chemistry: false,
                computers: false,
                zeroG: false,
                mathematics: false,
                art: false,
                archaeology: false,
                theology: false,
                militaryTraining: true,
                rimwise: false,
                athletics: true
            },
            expert: {
                explosives: false,
                wildernessSurvival: false,
                firearms: false,
                handToHandCombat: false                
            },
            master: {},
            bonus: "Choose 1 EXPERT skill OR 2 TRAINED skills",
            traumaResponse: 'Whenever you panic, every nearby friendly player must make a fear save.'
        },
        scientist: {
            displayText: 'Scientist',
            strength: 0,
            speed: 0,
            intellect: 10,
            combat: 0,
            sanity: 30,
            fear: 0,
            body: 0,
            wounds: 2,
            variableSkillModifier: 5,
            skills: [],
            trained: {},
            expert: {},
            master: {
                sophontology: false,
                exobiology: false,
                surgery: false,
                planetology: false,
                robotics: false,
                engineering: false,
                cybernetics: false,
                artificialIntelligence: false,
                hyperspace: false,
                xenoesotericism: false,
                command: false,
            },
            bonus: "Choose 1 MASTER skill tree AND 1 TRAINED skill",
            traumaResponse: 'Whenever you fail a sanity save, all nearby friendly players gain 1 stress.'
        },
        teamster: {
            displayText: 'Teamster',
            strength: 5,
            speed: 5,
            intellect: 5,
            combat: 5,
            sanity: 10,
            fear: 10,
            body: 10,
            wounds: 2,
            variableSkillModifier: 0,
            skills: [
                'industrialEquipment',
                'zeroG'
            ],
            trained: {
                linguistics: false,
                zoology: false,
                botany: false,
                geology: false,
                industrialEquipment: true,
                juryRigging: false,
                chemistry: false,
                computers: false,
                zeroG: true,
                mathematics: false,
                art: false,
                archaeology: false,
                theology: false,
                militaryTraining: false,
                rimwise: false,
                athletics: false
            },
            expert: {
                asteroidMining: false,
                mechanicalRepair: false,
                piloting: false,    
            },
            master: {},
            bonus: "Choose 1 TRAINED skill AND 1 EXPERT skill",
            traumaResponse: 'Once per session, you may take advantage on a panic check.'
        }
    }
    return characterClasses;
}

const GetSkills = () => {
    const skills = {
        trained: {
            linguistics: {
                displayText: 'Linguistics',
                description: 'The study of languages (alive,dead, and undiscovered).',
                bonus: '+10'
            },
            zoology: {
                displayText: 'Zoology',
                description: 'The study of animal life.',
                bonus: '+10'
            },
            botany: {
                displayText: 'Botany',
                description: 'The study of plant life.',
                bonus: '+10'
            },
            geology: {
                displayText: 'Geology',
                description: 'The study of the solid features of any terrestrial planet or its satellites.',
                bonus: '+10'
            },
            industrialEquipment: {
                displayText: 'Industrial Equipment',
                description: 'The safe and proper use of heavy machinery and tools (exosuits, forklifts, drills, breakers, laser cutters, etc.).',
                bonus: '+10'
            },
            juryRigging: {
                displayText: 'Jury-Rigging',
                description: 'Makeshift repair, using only the tools and materials at hand.',
                bonus: '+10'
            },
            chemistry: {
                displayText: 'Chemistry',
                description: 'The study of matter and its chemical elements and compounds.',
                bonus: '+10'
            },
            computers: {
                displayText: 'Computers',
                description: 'Fluent use of computers and their networks.',
                bonus: '+10'
            },
            zeroG: {
                displayText: 'Zero-G',
                description: 'Practice and know-how of working in a vacuum, orientation, vaccsuit operation, etc.',
                bonus: '+10'
            },
            mathematics: {
                displayText: 'Mathematics',
                description: 'The study of numbers, quantity, and space.',
                bonus: '+10'
            },
            art: {
                displayText: 'Art',
                description: 'The expression or application of a species\' creative ability and imagination.',
                bonus: '+10'
            },
            archaeology: {
                displayText: 'Archaeology',
                description: 'Ancient cultures and artifacts.',
                bonus: '+10'
            },
            theology: {
                displayText: 'Theology',
                description: 'The study of the divine or devotion to a religion.',
                bonus: '+10'
            },
            militaryTraining: {
                displayText: 'Military Training',
                description: 'Basic training provided to all military personnel.',
                bonus: '+10'
            },
            rimwise: {
                displayText: 'Rimwise',
                description: 'Practical knowledge and know-how regarding outer rim colonies, their customs, and the seedier parts of the galaxy.',
                bonus: '+10'
            },
            athletics: {
                displayText: 'Athletics',
                description: 'Physical fitness, sports, and games.',
                bonus: '+10'
            }
        },
        expert: {
            psychology: {
                displayText: 'Psychology',
                description: 'The study of behavior and the human mind.',
                bonus: '+15'
            },
            pathology: {
                displayText: 'Pathology',
                description: 'Study of the causes and effects of diseases.',
                bonus: '+15'
            },
            fieldMedicine: {
                displayText: 'Field Medicine',
                description: 'Emergency medical care and treatment.',
                bonus: '+15'
            },
            ecology: {
                displayText: 'Ecology',
                description: 'The study of organisms and how they relate to their environment.',
                bonus: '+15'
            },
            asteroidMining: {
                displayText: 'Asteroid Mining',
                description: 'Training in the tools and procedures used for mining asteroids.',
                bonus: '+15'
            },
            mechanicalRepair: {
                displayText: 'Mechanical Repair',
                description: 'Fixing broken machines.',
                bonus: '+15'
            },
            explosives: {
                displayText: 'Explosives',
                description: 'Design and effective use of explosive devices (bombs, grenade, shells, land mines, etc.).',
                bonus: '+15'
            },
            pharmacology: {
                displayText: 'Pharmacology',
                description: 'Study of drugs and medication.',
                bonus: '+15'
            },
            hacking: {
                displayText: 'Hacking',
                description: 'Unauthorized access to computer systems and networks.',
                bonus: '+15'
            },
            piloting: {
                displayText: 'Piloting',
                description: 'Operation and control of aircraft, spacecraft, and other vehicles.',
                bonus: '+15'
            },
            physics: {
                displayText: 'Physics',
                description: 'Study of matter, motion, energy, and their effects in space and time.',
                bonus: '+15'
            },
            mysticism: {
                displayText: 'Mysticism',
                description: 'Spiritual apprehension of hidden knowledge.',
                bonus: '+15'
            },
            wildernessSurvival: {
                displayText: 'Wilderness Survival',
                description: 'Applicable know-how regarding the basic necessities of life (food, water, shelter) in a natural environment.',
                bonus: '+15'
            },
            firearms: {
                displayText: 'Firearms',
                description: 'Safe and effective use of guns.',
                bonus: '+15'
            },
            handToHandCombat: {
                displayText: 'Hand-to-Hand Combat',
                description: 'Melee fighting.',
                bonus: '+15'
            }              
        },
        master: {
            sophontology: {
                displayText: 'Sophontology',
                description: 'The study of the behavior and mind of inhuman entities.',
                bonus: '+20'
            },
            exobiology: {
                displayText: 'Exobiology',
                description: 'The study of and search for intelligent alien life.',
                bonus: '+20'
            },
            surgery: {
                displayText: 'Surgery',
                description: 'Manually operating on living or dead biological subjects.',
                bonus: '+20'
            },
            planetology: {
                displayText: 'Planetology',
                description: 'Study of planets and other celestial bodies.',
                bonus: '+20'
            },
            robotics: {
                displayText: 'Robotics',
                description: 'Design, maintenance, and operation of robots, drones, and androids.',
                bonus: '+20'
            },
            engineering: {
                displayText: 'Engineering',
                description: 'The design, building, and use of engines, machines, and structures.',
                bonus: '+20'
            },
            cybernetics: {
                displayText: 'Cybernetics',
                description: 'The physical and neural interfaces between organisms and machines.',
                bonus: '+20'
            },
            artificialIntelligence: {
                displayText: 'Artificial Intelligence',
                description: 'The study of intelligence as demonstrated by machines.',
                bonus: '+20'
            },
            hyperspace: {
                displayText: 'Hyperspace',
                description: 'Faster-than-light travel.',
                bonus: '+20'
            },
            xenoesotericism: {
                displayText: 'Xenoesotericism',
                description: 'Obscure beliefs, mysticism, and religion regarding non-human entities.',
                bonus: '+20'
            },
            command: {
                displayText: 'Command',
                description: 'Leadership, management, and authority.',
                bonus: '+20'
            }              
        }
    }
    return skills
}

const GetLoadout = (characterClass) => {
    const loadouts = {
        android: {
            0: [
                'Vaccsuit (AP 3)',
                'Smart Rifle (2 mags)',
                'Infrared Goggles',
                'Mylar Blanket'
            ],
            1: [
                'Vaccsuit (AP 3)',
                'Revolver (12 rounds)',
                'Long-range Comms',
                'Satchel'
            ],
            2: [
                'Hazard Suit (AP 5)',
                'Revolver (6 rounds)',
                'Defibrillator',
                'First Aid Kit',
                'Flashlight'
            ],
            3: [
                'Hazard Suit (AP 5)',
                'Foam Gun (2 charges)',
                'Sample Collection Kit',
                'Screwdriver (as Assorted Tools)'
            ],
            4: [
                'Standard Battle Dress (AP 7)',
                'Tranq Pistol (3 shots)',
                'Paracord (100m)'
            ],
            5: [
                'Standard Crew Attire (AP 1)',
                'Stun Baton',
                'Small Pet'
            ],
            6: [
                'Standard Crew Attire (AP 1)',
                'Scalpel',
                'Bioscanner'
            ],
            7: [
                'Standard Crew Attire (AP 1)',
                '1 Frag Grenade',
                'Pen Knife'
            ],
            8: [
                'Manufacturer Supplied Attire (AP 1)',
                '1 Jump-9 Ticket (destination blank)'
            ],
            9: [
                'Corporate Attire (AP 1)',
                'VIP Corporate Key Card'
            ]
        },
        marine: {
            0: [
                'Tank Top and Camo Pants (AP 1)',
                'Combat Knife (as Scalpel DMG [+])',
                'Stimpak x1'
            ],
            1: [
                'Advanced Battle Dress (AP 10)',
                'Flame Thrower',
                'Boarding Axe'
            ],
            2: [
                'Standard Battle Dress (AP 7)',
                'Combat Shotgun (4 rounds)',
                'Rucksack',
                'Camping Gear'
            ],
            3: [
                'Standard Battle Dress (AP 7)',
                'Pulse Rifle (3 mags)',
                'Infrared Goggles'
            ],
            4: [
                'Standard Battle Dress (AP 7)',
                'Smart Rifle (3 mags)',
                'Binoculars',
                'Personal Locator'
            ],
            5: [
                'Standard Battle Dress (AP 7)',
                'SMG (3 mags)',
                'MRE x7'
            ],
            6: [
                'Fatigues (AP 2)',
                'Combat Shotgun (2 rounds)',
                'Dog',
                'Leash',
                'Tennis Ball'
            ],
            7: [
                'Fatigues (AP 2)',
                'Revolver (12 rounds)',
                'Single Frag Grenade'
            ],
            8: [
                'Dress Uniform (AP 1)',
                'Revolver (1 round)',
                'Challenge Coin'
            ],
            9: [
                'Advanced Battle Dress (AP 10)',
                'General-Purpose Machine Gun (1 can of ammo)',
                'HUD'
            ]
        },
        scientist: {
            0: [
                'Hazard Suit (AP 5)',
                'Tranq Pistol (3 shots)',
                'Bioscanner',
                'Sample Collection Kit'
            ],
            1: [
                'Hazard Suit (AP 5)',
                'Flamethrower (1 charge)',
                'Pain Pills',
                'Electronic Tool Set'
            ],
            2: [
                'Vaccsuit (AP 3)',
                'Rigging Gun',
                'Sample Collection Kit',
                'Flashlight',
                'Lab Rat (small pet)'
            ],
            3: [
                'Vaccsuit (AP 3)',
                'Foam Gun (2 charges)',
                'Foldable Stretcher',
                'First Aid Kit',
                'Radiation Pills'
            ],
            4: [
                'Lab Coat (AP 1)',
                'Screwdriver',
                'Medscanner',
                'Vaccine (1 dose)'
            ],
            5: [
                'Lab Coat (AP 1)',
                'Cybernetic Diagnostic Scanner',
                'Portable Computer Terminal'
            ],
            6: [
                'Scrubs (AP 1)',
                'Scalpel',
                'Automed x6',
                'Oxygen Tank with Filter Mask'
            ],
            7: [
                'Scrubs (AP 1)',
                'Vial of Acid',
                'Mylar Blanket',
                'First Aid Kit'
            ],
            8: [
                'Standard Crew Attire (AP 1)',
                'Utility Knife (as Scalpel)',
                'Cybernetic Diagnostic Scanner',
                'Duct Tape'
            ],
            9: [
                'Civilian Clothes (AP 1)',
                'Briefcase',
                'Prescription Pad',
                'Fountain Pen (Poison Injector)'
            ]
        },
        teamster: {
            0: [
                'Vaccsuit (AP 3)',
                'Laser Cutter (1 extra battery)',
                'Patch Kit',
                'Toolbelt with assorted tools'
            ],
            1: [
                'Vaccsuit (AP 3)',
                'Revolver (6 rounds)',
                'Crowbar',
                'Flashlight'
            ],
            2: [
                'Vaccsuit (AP 3)',
                'Rigging Gun',
                'Shovel',
                'Salvage Drone'
            ],
            3: [
                'Hazard Suit (AP 5)',
                'Vibechete',
                'Spanner',
                'Camping Gear',
                'Water Filter'
            ],
            4: [
                'Heavy Duty Work Clothes (AP 2)',
                'Explosives & Detonator',
                'Cigarettes'
            ],
            5: [
                'Heavy Duty Work Clothes (AP 2)',
                'Drill (as Assorted Tools)',
                'Paracord (100m)',
                'Drone'
            ],
            6: [
                'Standard Crew Attire (AP 1)',
                'Combat Shotgun (4 rounds)',
                'Extension Cord (20m)',
                'Cat'
            ],
            7: [
                'Standard Crew Attire (AP 1)',
                'Nail Gun (32 rounds)',
                'Head Lamp',
                'Toolbelt with assorted tools',
                'Lunch Box'
            ],
            8: [
                'Standard Crew Attire (AP 1)',
                'Flare Gun (2 rounds)',
                'Water Filter',
                'Personal Locator',
                'Subsurface Scanner'
            ],
            9: [
                'Lounge Wear (AP 1)',
                'Crowbar',
                'Pain Pills',
                'Six Pack of Beer                '
            ]
        }
    };

    const loadoutNumber = Math.floor(Math.random() * 10);
    const loadout = loadouts[characterClass][loadoutNumber];

    return loadout;
}

const GetPatch = () => {
    const patches = [
        '"I\'m Not A Rocket Scientist /But You\'re An Idiot"',
        '"I Like My Tools Clean /And My Lovers Dirty"',
        '"All Out of Fucks To Give" (Astronaut with Turned Out Pockets)',
        'Medic Patch (Skull and Crossbones over Cross)',
        'Pin-Up (Nurse): "The Louder You Scream the Faster I Come"',
        '"Travel To Distant Places /Meet Unusual Things / Get Eaten"',
        '"Don\'t Run You\'ll Only Die Tired" (Backpatch)',
        'HMFIC (Head Mother Fucker In Charge)',
        'BOHICA (Bend Over Here It Comes Again)',
        'Red Shirt Logo',
        'Dove in Crosshairs',
        '"I Am My Brother\'s Keeper"',
        'Blood Type (Reference Patch)',
        'Chibi Cthulhu',
        '"Mama Tried"',
        'Poker Hand: Dead Man\'s Hand (Aces full of eights)',
        '"Welcome to the DANGER ZONE"',
        'Black Widow Spider',
        'Biohazard Symbol',
        'Skull and Crossed Wrenches',
        '"My Other Ride Married You"',
        'Mr. Yuck',
        'Pin-Up (Succubus)',
        '"One Size Fits All" (Grenade)',
        'Nuclear Symbol',
        '"DILLIGAF?"',
        'Grim Reaper Backpatch',
        '"Eat The Rich"',
        '"DRINK / FIGHT / FUCK"',
        'отъебись (Get Fucked, Russian)',
        '"Be Sure: Doubletap"',
        '"Work Hard / Party Harder"',
        '"Smooth Operator"',
        'Flame Emoji',
        'Mudflap Girl',
        'Atom Symbol',
        'Smiley Face (Glow in the Dark)',
        'Fun Meter (reads: Bad Time)',
        '"For Science!"',
        '"Smile: Big Brother is Watching"',
        '"GAME OVER" (Bride & Groom)',
        '"Actually, I AM A Rocket Scientist"',
        'Jolly Roger',
        'Heart',
        '"Help Wanted"',
        'Viking Skull',
        '"IMPROVE / ADAPT / OVERCOME"',
        'Princess',
        '"APEX PREDATOR" (Sabertooth Skull)',
        '"SUCK IT UP"',
        '"NOMAD"',
        'Pin-Up (Ace of Spades)',
        '"Cowboy Up" (Crossed Revolvers)',
        '"GOOD BOY"',
        'Queen of Hearts',
        '"Troubleshooter"',
        'Dice (Snake Eyes)',
        'Security Guard',
        'NASA Logo',
        '"# 1 Worker"',
        '"LONER"',
        'Crossed Hammers with Wings',
        '"Good" (Brain)',
        'Front Towards Enemy (Claymore Mine)',
        '"Keep Well Lubricated"',
        '"Bad Bitch"',
        'Pin-Up (Riding Missile)',
        'Soviet Hammer & Sickle',
        '"Too Pretty To Die"',
        'FUBAR',
        '"Plays Well With Others"',
        '"Fuck Forever" (Roses)',
        '"I\'m A (Love) Machine"',
        '"Live Free and Die"',
        'Icarus',
        'Pin-Up (Mechanic)',
        '"IF I\'M RUNNING KEEP UP" (Backpatch)',
        '"Girl\'s Best Friend" (Diamond)',
        'HELLO MY NAME IS:',
        '"Meat Bag"',
        'Risk of Electrocution Symbol',
        '"Powered By Coffee"',
        '"I Am Not A Robot"',
        'Inverted Cross',
        '"Take Me To Your Leader" (UFO)',
        'Red Gear',
        '"Do You Sign My Paychecks?" (Backpatch)',
        '"DO YOUR JOB"',
        '"I Can\'t Fix Stupid"',
        '"I ♥ Myself"',
        '"Take My Life (Please)"',
        '"Space IS My Home" (Sad Astronaut)',
        'Double Cherry',
        '"Upstanding Citizen"',
        'All Seeing Eye',
        '"Volunteer"',
        'Allergic To Bullshit (Medical Style Patch)',
        '"Do I LOOK Like An Expert?"',
        '"Solve Et Coagula" (Baphomet)',
        '"Fix Me First" (Caduceus)'
    ];
    const patch = patches[Math.floor(Math.random()*patches.length)];
    return patch;
}

const GetTrinket = () => {
    const trinkets = [
        'Manual: PANIC: Harbinger of Catastrophe', 
        'Pendant: Shell Fragments Suspended in Plastic', 
        'Coffee Cup, Chipped, reads: HAPPINESS IS MANDATORY',
        'Antique Company Script (Asteroid Mine)', 
        'Pamphlet: Zen and the Art of Cargo Arrangement', 
        'Manual: Moonshining With Gun Oil & Fuel',
        'Manual: SURVIVAL: Eat Soup With a Knife', 
        'Pair of Shot Glasses (Spent Shotgun Shells)', 
        'Miniature Chess Set, Bone, Pieces Missing',
        'Dessicated Husk Doll', 
        'Key (Childhood Home)', 
        'Gyroscope, Bent, Tin',
        'Alien Pressed Flower (common)', 
        'Dog Tags (Heirloom)', 
        'Faded Green Poker Chip',
        'Necklace of Shell Casings', 
        'Token: "Is Your Morale Improving?"', 
        'Ukulele',
        'Corroded Android Logic Core', 
        'Pamphlet: The Relic of Flesh', 
        'Spray Paint',
        'Pamphlet: Signs of Parasitical Infection', 
        'Pamphlet: The Indifferent Stars', 
        'Wanted Poster, Weathered',
        'Manual: Treat Your Rifle Like A Lady', 
        'Calendar: Military Battles', 
        'Locket, Hair Braid',
        'Bone Knife', 
        'Manual: Rich Captain, Poor Captain', 
        'Sculpture of a Rat (Gold)',
        'Calendar: Alien Pin-Up Art', 
        'Campaign Poster (Home Planet)', 
        'Blanket, Fire Retardant',
        'Rejected Application (Colony Ship)', 
        'Preserved Insectile Aberration', 
        'Hooded Parka, Fleece-Lined',
        'Holographic Serpentine Dancer', 
        'Titanium Toothpick', 
        'BB Gun',
        'Snake Whiskey', 
        'Gloves, Leather (Xenomorph Hide)', 
        'Flint Hatchet',
        'Medical Container, Purple Powder', 
        'Smut (Seditious): The Captain, Ordered', 
        'Pendant: Two Astronauts form a Skull',
        'Pills: Male Enhancement, Shoddy', 
        'Towel, Slightly Frayed', 
        'Rubik\'s Cube',
        'Casino Playing Cards', 
        'Brass Knuckles', 
        'Stress Ball, reads: Zero Stress in Zero G',
        'Lagomorph Foot', 
        'Fuzzy Handcuffs', 
        'Sputnik Pin',
        'Moonstone Ring', 
        'Journal of Grudges', 
        'Ushanka',
        'Manual: Mining Safety and You', 
        'Stylized Cigarette Case', 
        'Trucker Cap, Mesh, Grey Alien Logo',
        'Pamphlet: Against Human Simulacrum', 
        'Ball of Assorted Gauge Wire', 
        'Menthol Balm',
        'Animal Skull, 3 Eyes, Curled Horns', 
        'Spanner', 
        'Pith Helmet',
        'Bartender\'s Certification (Expired)', 
        'Switchblade, Ornamental', 
        '10m x 10m Tarp',
        'Bunraku Puppet', 
        'Powdered Xenomorph Horn', 
        'I Ching, Missing Sticks',
        'Prospecting Mug, Dented', 
        'Bonsai Tree, Potted', 
        'Kukri',
        'Eerie Mask', 
        'Golf Club (Putter)', 
        'Trench Shovel',
        'Ultrablack Marble', 
        'Trilobite Fossil', 
        'Shiv, Sharpened Butter Knife',
        'Ivory Dice', 
        'Pamphlet: A Lover In Every Port', 
        'Taxidermied Cat',
        'Tarot Cards, Worn, Pyrite Gilded Edges', 
        'Patched Overalls, Personalized', 
        'Pamphlet: Interpreting Sheep Dreams',
        'Bag of Assorted Teeth', 
        'Fleshy Thing Sealed in a Murky Jar', 
        'Faded Photograph, A Windswept Heath',
        'Ashes (A Relative)', 
        'Spiked Bracelet', 
        'Opera Glasses',
        'DNR Beacon Necklace', 
        'Harmonica', 
        'Pamphlet: Android Overlords',
        'Cigarettes (Grinning Skull)',
        'Pictorial Pornography, Dogeared, Well-thumbed', 
        'Interstellar Compass,',
        'Pills: Areca Nut Always Points to Homeworld'
    ];
    const trinket = trinkets[Math.floor(Math.random()*trinkets.length)];
    return trinket;
}

const GetTalents = (characterClass) => {
    let talentsList;
    const talents = [];
    const genericTalents = [
        {
            name: 'Nimble',
            description: 'Once per session, you may reroll a speed check.'
        },
        {
            name: 'Fluid Intelligence',
            description: 'Once per session, you may reroll an intellect check.'
        },
        {
            name: 'Maximium Effort',
            description: 'Once per session, you may reroll a strength check.'
        },
        {
            name: 'Dead Eye',
            description: 'Once per session, you may reroll a combat check.'
        },
        {
            name: 'Dodge',
            description: 'Once per session, you may make a speed check to avoid an attack.'
        },
        {
            name: 'Dunning-Kruger Effect',
            description: 'Once per session, you may reduce stress instead of increasing stress on a non-critical failure.'
        },
        {
            name: 'Event Planner',
            description: 'During a rest period, friendly players use their best save and gain advantage.'
        },
        {
            name: 'Medic',
            description: 'Once per session, you can have a Death Check rerolled for another character.'
        },
        {
            name: 'Black Knight',
            description: 'You remain active for 1d3+2 rounds after your Death Check is rolled.'
        },
        {
            name: 'Deflector',
            description: 'Once per session, you can make an Intellect or Speed check to redirect an attack from you to a close friendly character of your choosing.'
        },
    ];
    const androidTalents = [
        {
            name: 'Industrial Chassis',
            description: 'You have 20 health per wound.'
        },
        {
            name: 'Top of the Valley',
            description: 'Fear saves made by nearby friendly players are at +20 and disadvantage'
        }
    ];
    const marineTalents = [
        {
            name: 'Mycotoxin Induced Analgesia',
            description: 'You have 20 health per wound.'
        },
        {
            name: 'Motivator',
            description: 'Once per session, friendly players get [+] on their next skill check or save in combat'
        },

    ];
    const scientistTalents = [
        {
            name: 'Sports Scholarship',
            description: 'You have 3 wounds.'
        },
        {
            name: 'Interdisciplinary',
            description: 'Once per session, you may increase your bonus to +20 for any knowledge based skill check.'
        },
    ];
    const teamsterTalents = [
        {
            name: 'Specimen',
            description: 'You have 3 wounds.'
        },
        {
            name: 'Tinker',
            description: 'Once per session, you may reroll a skill check related to building or repairing an item'
        }
    ];

    switch(characterClass) {
        case 'android':
            talentsList = genericTalents.concat(androidTalents);
            break;
        case 'marine':
            talentsList = genericTalents.concat(marineTalents);
            break;
        case 'scientist':
            talentsList = genericTalents.concat(scientistTalents);
            break;
        case 'teamster':
            talentsList = genericTalents.concat(teamsterTalents);
            break;
    }

    while (talents.length < 3) {
        const index = Math.floor(Math.random()*talentsList.length)
        const talent = talentsList[index];
        talentsList.splice(index, 1);
        talents.push(talent);
    }
    return talents
}

const GetExpertSkillsByTrainedSkill = (trainedSkill) => {
    const expertSkills = {
        linguistics: [],
        zoology: ['psychology', 'pathology', 'fieldMedicine'],
        botany: ['psychology', 'pathology', 'fieldMedicine', 'ecology', 'wildernessSurvival'],
        geology: ['ecology', 'asteroidMining'],
        industrialEquipment: ['asteroidMining', 'mechanicalRepair'],
        juryRigging: ['mechanicalRepair', 'explosives'],
        chemistry: ['explosives', 'pharmacology'],
        computers: ['hacking'],
        zeroG: ['piloting'],
        mathematics: ['physics'],
        art: ['mysticism'],
        archaeology: ['mysticism'],
        theology: ['mysticism'],
        militaryTraining: ['firearms', 'wildernessSurvival', 'handToHandCombat'],
        rimwise: ['firearms', 'handToHandCombat'],
        athletics: ['handToHandCombat']        
    }
    return expertSkills[trainedSkill];
}

const GetExpertSkillsByMasterSkill = (masterSkill) => {
    const expertSkills = {
        sophontology: ['psychology'],
        exobiology: ['pathology'],
        surgery: ['pathology', 'fieldMedicine'],
        planetology: ['ecology', 'asteroidMining'],
        robotics: ['mechanicalRepair'],
        engineering: ['mechanicalRepair'],
        cybernetics: ['mechanicalRepair'],
        artificialIntelligence: ['hacking'],
        hyperspace: ['physics', 'piloting', 'mysticism'],
        xenoesotericism: ['physics', 'piloting'],
        command: ['piloting', 'firearms'],    
    }
    return expertSkills[masterSkill];
}

const GetTrainedSkillsByExpertSkill = (expertSkill) => {
    const trainedSkills = {
        psychology: ['zoology', 'botany'],
        pathology: ['zoology', 'botany'],
        fieldMedicine: ['zoology', 'botany'],
        ecology: ['botany', 'geology'],
        asteroidMining: ['geology', 'industrialEquipment'],
        mechanicalRepair: ['industrialEquipment', 'juryRigging'],
        explosives: ['juryRigging', 'chemtistry', 'militaryTraining'],
        pharmacology: ['chemistry'],
        hacking: ['computers'],
        piloting: ['zeroG'],
        physics: ['piloting', 'firearms'],
        mysticism: ['art', 'archaeology', 'theology'],
        wildernessSurvival: ['botany', 'militaryTraining'],
        firearms: ['rimwise', 'militaryTraining'],
        handToHandCombat:['athletics', 'rimwise', 'militaryTraining']
    }
    return trainedSkills[expertSkill];
}


export {
    GetCharacterClasses,
    GetSkills,
    GetExpertSkillsByTrainedSkill,
    GetExpertSkillsByMasterSkill,
    GetTrainedSkillsByExpertSkill,
    GetLoadout,
    GetTrinket,
    GetPatch,
    GetTalents
}