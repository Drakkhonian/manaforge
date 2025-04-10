const attack_shape_map = [[10, 11, 10, 10, 6, 12, 13, 12],
[11, 11, 10, 7, 6, 7, 13, 13],
[10, 10, 4, 4, 7, 12, 6, 12],
[10, 4, 10, 6, 4, 6, 8, 12],
[0, 4, 5, 5, 4, 9, 6, 12],
[0, 4, 0, 8, 4, 2, 8, 8],
[1, 1, 4, 4, 9, 8, 3, 3],
[0, 1, 0, 0, 2, 2, 3, 2]];

const metal_list = ["Menos Bronze",
"Valsena Iron",
"Granz Steel",
"Laurent Silver",
"Wendel Silver",
"Beiser Gold",
"Ishe Platinum",
"Lorimar Iron",
"Altena Alloy",
"Maia Lead",
"Orichalcum"
];

const wood_list = ["Oak Wood",
"Holly Wood",
"Baobab Wood",
"Ebony Wood",
"Maple Wood",
"Dior Wood",
"Ash Wood",
"Fossil Wood"
];

const stone_list = ["Marble",
"Obsidian",
"Pedan Stone",
"Gaia's Tears"
];

const hide_list = ["Animal Hide",
"Gator Skin",
"Centaur Hide",
"Dragon Skin"
];

const scales_list = ["Fish Scales",
"Lizard Scales",
"Snake Scales",
"Dragon Scales"
];

const bone_list = ["Animal Bone",
"Ivory",
"Cursed Bone",
"Fossil"
];

const fabric_list = ["Topple Cotton",
"Sultan's Silk",
"Judd Hemp",
"Altena Felt"
];

const rock_list = ["Jacobini Rock",
"Halley Rock",
"Ankh Rock",
"Vinek Rock",
"Tuttle Rock",
"Nemesis Rock",
"Biella Rock",
"Swifte Rock"
];

const misc_list = ["Adamantite",
"Fullmetal",
"Coral",
"Tortoiseshell",
"Seashell",
"Emerald",
"Pearl",
"Lapis Lazuli"
];

const coin_list = ["Wisp Gold",
"Shade Gold",
"Dryad Gold",
"Aura Gold",
"Salamander Gold",
"Gnome Gold",
"Jinn Gold",
"Undine Gold",
"Wisp Silver",
"Shade Silver",
"Dryad Silver",
"Aura Silver",
"Salamander Silver",
"Gnome Silver",
"Jinn Silver",
"Undine Silver"
];

const mana_stone_list = ["Firestone",
"Earthstone",
"Windstone",
"Waterstone"
];

const mana_crystal_list = ["Sun Crystal",
"Moon Crystal",
"Glow Crystal",
"Chaos Crystal"
];

const seed_list = ["Round Seed",
"Oblong Seed",
"Crooked Seed",
"Big Seed",
"Small Seed",
"Long Seed",
"Flat Seed",
"Spiny Seed"
];

const produce_list = ["Bellgrapes",
"Diceberry",
"Mangolephant",
"Loquat-Shoe",
"Pear o' Heels",
"Squalphin",
"Citrisquid",
"Springanana",
"Peach Puppy",
"Apricat",
"Applesock",
"Whalamato",
"Pine o'Clock",
"Fishy Fruit",
"Boarmelon",
"Rhinoloupe",
"Orcaplant",
"Garlicrown",
"Honey Onion",
"Sweet Moai",
"Spiny Carrot",
"Conchurnip",
"Cornflower",
"Cabbadillo",
"Needlettuce",
"Cherry Bombs",
"Masked Potato",
"Lilipods",
"Rocket Papaya",
"Orange'opus",
"Bumpkin",
"Heart Mint",
"Spade Basil",
"Dialaurel",
"Gold Clover",
"Mush-in-a-Box",
"Toadstoolshed"
];

const meat_list = ["Animal Meat",
"Bug Meat",
"Lizard Meat",
"Fish Meat",
"Bird Meat",
"Morph Meat",
"Demon Meat",
"Dragon Steak",
"Odd Meat",
"Magical Meat",
"Rotton Meat"
];

const fang_list =["Sharp Claw",
"Poison Fang",
"Giant's Horn",
"Pincer",
"Healing Claw",
"Zombie Claw",
"Vampire Fang"
];

const eye_list =["Little Eye",
"Sleepy Eye",
"Silly Eye",
"Dangerous Eye",
"Angry Eye",
"Blank Eye",
"Creepy Eye",
"Wicked Eye"
];

const feather_list = ["Angel Feather",
"Raven Feather",
"Clear Feather",
"Moth Wing",
"Flaming Quill",
"White Feather"
];

const bottle_list = ["Aroma Oil",
"Dragon Blood",
"Acid",
"Holy Water",
"Ether"
];

const vial_list = ["Mercury",
"Stinky Breath",
"Ghost's Howl",
"Dragon's Breath",
"Damsel's Sigh"
];

const urn_list =["Electricity",
"Moss",
"Ear of Wheat"
];

const pellet_list = ["Baked Roach",
"Blackened Bat"
];

const powder_list =["Sulfur",
"Poison Powder",
"Sleepy Powder",
"Knockout Dust",
"Rust",
"Grave Dirt",
"Ash"
];

const pouch_list = ["Hairball",
"Needle",
"Mirror Piece",
"Wad of Wool",
"Messy Scroll",
];

const misc_secondary_list = ["Greenball Bun",
"Tako Bug"
];

const primaries = [
    metal_list,
    wood_list,
    stone_list,
    hide_list,
    scales_list,
    bone_list,
    fabric_list,
    rock_list,
    misc_list
];

const primaries_names =[
    "metals",
    "woods",
    "stones",
    "hides",
    "scales",
    "bones",
    "fabrics",
    "rocks",
    "misc"
];

const secondaries = [
    coin_list,
    mana_stone_list,
    mana_crystal_list,
    seed_list,
    produce_list,
    meat_list,
    fang_list,
    eye_list,
    feather_list,
    bottle_list,
    vial_list,
    urn_list,
    pellet_list,
    powder_list,
    pouch_list,
    misc_secondary_list
];
const secondaries_names = [
    "coins",
    "mana stones",
    "mana crystals",
    "seeds",
    "produces",
    "meats",
    "fangs and claws",
    "eyes",
    "feathers",
    "bottles",
    'vials',
    "urns",
    "pellets",
    "powders",
    "pouches",
    "secondary misc"
];


//document.getElementById("inventory").innerHTML = "<div id="+"metal_boxes"+"></div>";
//document.getElementById("metal_boxes").innerText = metal_list

//metals = document.createElement('div');
//metals.id = "metals_boxes2";
//metals.innerHTML = metal_list;

for (let family_index = 0; family_index < primaries.length; family_index++) {
    const family_element = primaries[family_index];
    var family_name  = primaries_names[family_index]
    family_area = document.createElement('div');
    family_area.id = family_name + "_space";
    family_area.className = "family_space";
    document.getElementById("primary").appendChild(family_area);
    family_title = document.createElement('div');
    family_title.id = family_name + "_title";
    family_title.innerHTML = family_name;
    document.getElementById(family_area.id).appendChild(family_title);
    family_boxes = document.createElement('div');
    family_boxes.id = family_name + "_boxes";
    family_boxes.className = "family_boxes";
    document.getElementById(family_area.id).appendChild(family_boxes);
    for (let material_index = 0; material_index < family_element.length; material_index++) {
        const material_element = family_element[material_index];
        material_area = document.createElement('div');
        material_area.id = material_element + "_id";
        document.getElementById(family_boxes.id).appendChild(material_area)
        material_checkbox = document.createElement('input');
        material_checkbox.id = material_element + "_checkbox";
        material_checkbox.type = 'checkbox';
        material_checkbox.className = "select";
        document.getElementById(material_area.id).appendChild(material_checkbox);
        material_amount = document.createElement('input');
        material_amount.id = material_element + "_amount";
        material_amount.type = 'number';
        material_amount.value = 0;
        material_amount.max = 100;
        material_amount.min = 0;
        material_amount.className = "qnty";
        document.getElementById(material_area.id).appendChild(material_amount);
        material_area.innerHTML += material_element;
    }
}
for (let family_index = 0; family_index < primaries.length; family_index++) {
    const family_element = secondaries[family_index];
    var family_name  = secondaries_names[family_index]
    family_area = document.createElement('div');
    family_area.id = family_name + "_space";
    family_area.className = "family_space";
    document.getElementById("secondary").appendChild(family_area);
    family_title = document.createElement('div');
    family_title.id = family_name + "_title";
    family_title.innerHTML = family_name;
    document.getElementById(family_area.id).appendChild(family_title);
    family_boxes = document.createElement('div');
    family_boxes.id = family_name + "_boxes";
    family_boxes.className = "family_boxes";
    document.getElementById(family_area.id).appendChild(family_boxes);
    for (let material_index = 0; material_index < family_element.length; material_index++) {
        const material_element = family_element[material_index];
        material_area = document.createElement('div');
        material_area.id = material_element + "_id";
        material_area.className = "family_boxes"
        document.getElementById(family_boxes.id).appendChild(material_area)
        material_checkbox = document.createElement('input');
        material_checkbox.id = material_element + "_checkbox";
        material_checkbox.type = 'checkbox';
        material_checkbox.className = "select";
        document.getElementById(material_area.id).appendChild(material_checkbox);
        material_amount = document.createElement('input');
        material_amount.id = material_element + "_amount";
        material_amount.type = 'number';
        material_amount.value = 0;
        material_amount.max = 100;
        material_amount.min = 0;
        material_amount.className = "qnty";
        document.getElementById(material_area.id).appendChild(material_amount);
        material_area.innerHTML += material_element;
    }
}

//document.getElementById("inventory").appendChild(metals);
