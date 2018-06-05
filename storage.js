const homeInventoryDatabase = {};

homeInventoryDatabase.furniture = [];
homeInventoryDatabase.crafts = [];
homeInventoryDatabase.electronics = [];

const jacobsCouch = {
    name: "couch",
    description: "brown couch with reclining seats",
    location: "Jacob's living room"
}
const jacobsTv = {
    name: "TV",
    description: "32 inch screen with HD quality",
    location: "Jacob's bedroom"
}
const jacobsFridge = {
    name: "fridge",
    description: "big fridge/freezer combo with ice maker",
    location: "Jacob's kitchen"
}
const jacobsMicrowave = {
    name: "microwave",
    description: "very nice microwave that heats stuff up",
    location: "Jacob's kitchen"
}
const jacobsCoffeeMaker = {
    name: "coffee maker",
    description: "keurig coffee maker that makes coffee by the cup",
    location: "Jacob's kitchen"
}
const jacobsHandmadeDresser = {
    name: "dresser",
    description: "dresser handmade for me by jacobs grandfather",
    location: "Jacob's bedroom"
}
const jacobsBed = {
    name: "bed",
    description: "queen sized and very comfortable bed",
    location: "Jacob's bedroom"
}
const jacobsGuitar = {
    name: "guitar",
    description: "breedlove d25/sre with faded signature",
    location: "Jacob's bedroom"
}
const jacobsChair = {
    name: "chair",
    description: "comfortable chair matching couch",
    location: "jacob's living room"
}
const jacobsAmp = {
    name: "amp",
    description: "used for amplifying the sound of jacobs guitar",
    location: "Jacob'sbedroom"
}

homeInventoryDatabase.furniture.push(jacobsCouch,jacobsBed,jacobsChair);
homeInventoryDatabase.crafts.push(jacobsGuitar,jacobsHandmadeDresser);
homeInventoryDatabase.electronics.push(jacobsMicrowave,jacobsFridge,jacobsCoffeeMaker,jacobsTv,jacobsAmp);

const saveDatabase = (databaseObject, localStorageKey) => {

    const stringifiedDatabase = JSON.stringify(databaseObject)

    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = localStorageKey => {

    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}

saveDatabase(homeInventoryDatabase, "HomeInventory")