"use strict";
let allCards = [
    {
        "id": "1",
        "place": "corner",
        "name": "GO",
        "type": "special",
        "border": "",
        "color": "",
        "price": 0,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "nothing",
        "description": "Collect $200 when you pass."
    },
    {
        "id": "2",
        "place": "property",
        "name": "Mediterranean Avenue",
        "type": "property",
        "border": "border-bottom",
        "color": ":10px solid brown;",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50,
        "amount": 0,
        "sold": false,
        "description": ""
    },
    {
        "id": "3",
        "place": "property",
        "name": "Community Chest",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "description": "Draw a Community Chest card.",
        "sold": "nothing",
    },
    {
        "id": "4",
        "place": "property",
        "name": "Baltic Avenue",
        "type": "property",
        "border": "border-bottom",
        "color": ":10px solid brown;",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50,
        "description": "",
        "amount": 0,
        "sold": false,
    },
    {
        "id": "5",
        "place": "property",
        "name": "Income Tax",
        "type": "tax",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 200,
        "sold": "bank",
        "description": "",
    },
    {
        "id": "6",
        "place": "property",
        "name": "Reading Railroad",
        "type": "railroad",
        "border": "",
        "color": "",
        "houseCost": 0,
        "hotelCost": 0,
        "price": 200,
        "rent": [25, 50, 100, 200],
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "7",
        "place": "property",
        "name": "Oriental Avenue",
        "type": "property",
        "border": "border-bottom",
        "color": ":10px solid #13B2EEFF;",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "8",
        "place": "property",
        "name": "Chance",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "nothing",
        "description": "Draw a Chance card."
    },
    {
        "id": "9",
        "place": "property",
        "name": "Vermont Avenue",
        "type": "property",
        "border": "border-bottom",
        "color": ":10px solid #13B2EEFF;",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "10",
        "place": "property",
        "name": "Connecticut Avenue",
        "type": "property",
        "border": "border-bottom",
        "color": ":10px solid #13B2EEFF;",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "11",
        "place": "corner",
        "name": "Jail",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "jail",
        "description": "Just visiting or in jail."
    },
    {
        "id": "40",
        "place": "property",
        "name": "Boardwalk",
        "type": "property",
        "border": "border-right",
        "color": ": 10px solid #141873FF;",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "12",
        "place": "property",
        "name": "St. Charles Place",
        "type": "property",
        "border": "border-left",
        "color": ":10px solid pink;",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "39",
        "place": "property",
        "name": "Luxury Tax",
        "type": "tax",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 100,
        "sold": "bank",
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "13",
        "place": "property",
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "border": "",
        "color": "",
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "rent": [4, 10],
        "sold": false,
        "description": "",
    },
    {
        "id": "38",
        "place": "property",
        "name": "Park Place",
        "type": "property",
        "border": "border-right",
        "color": ": 10px solid #141873FF;",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "14",
        "place": "property",
        "name": "States Avenue",
        "type": "property",
        "border": "border-left",
        "color": ":10px solid pink;",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "37",
        "place": "property",
        "name": "Chance",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "nothing",
        "description": "Draw a Chance card."
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "15",
        "place": "property",
        "name": "Virginia Avenue",
        "type": "property",
        "border": "border-left",
        "color": ":10px solid pink;",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "36",
        "place": "property",
        "name": "Short Railroad",
        "type": "railroad",
        "border": "",
        "color": "",
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "price": 200,
        "rent": [25, 50, 100, 200],
        "sold": false,
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "16",
        "place": "property",
        "name": "Rail Railroad",
        "type": "railroad",
        "border": "",
        "color": "",
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "price": 200,
        "rent": [25, 50, 100, 200],
        "sold": false,
        "description": "",
    },
    {
        "id": "35",
        "place": "property",
        "name": "Pennsylvania Avenue",
        "type": "property",
        "border": "border-right",
        "color": ":10px solid green;",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "17",
        "place": "property",
        "name": "St. James Place",
        "type": "property",
        "border": "border-left",
        "color": ":10px solid orange;",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "34",
        "place": "property",
        "name": "Community Chest",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "nothing",
        "description": "Draw a Community Chest card."
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "18",
        "place": "property",
        "name": "Community Chest",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "nothing",
        "description": "Draw a Community Chest card."
    },
    {
        "id": "33",
        "place": "property",
        "name": "Regent Street",
        "type": "property",
        "border": "border-right",
        "color": ":10px solid green;",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "19",
        "place": "property",
        "name": "Tennessee Avenue",
        "type": "property",
        "border": "border-left",
        "color": ":10px solid orange;",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "32",
        "place": "property",
        "name": "Pacific Avenue",
        "type": "property",
        "border": "border-right",
        "color": ":10px solid green;",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "id": "20",
        "place": "property",
        "name": "New York Avenue",
        "type": "property",
        "border": "border-left",
        "color": ":10px solid orange;",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "31",
        "place": "corner",
        "name": "Go to Jail",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "sold": "Jail",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200."
    },
    {
        "id": "30",
        "place": "property",
        "name": "Marvin Gardens",
        "type": "property",
        "border": "border-top",
        "color": ":10px solid yellow;",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150,
        "amount": 0,
        "sold": false,
        "description": "",
    },
    {
        "id": "29",
        "place": "property",
        "name": "Water Works",
        "type": "utility",
        "border": "",
        "color": "",
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "price": 150,
        "rent": [4, 10],
        "sold": false,
        "description": "",
    },
    {
        "id": "28",
        "place": "property",
        "name": "Ventnor Avenue",
        "type": "property",
        "border": "border-top",
        "color": ":10px solid yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150,
        "sold": false,
        "amount": 0,
        "description": "",
    },
    {
        "id": "27",
        "place": "property",
        "name": "Atlantic Avenue",
        "type": "property",
        "border": "border-top",
        "color": ":10px solid yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150,
        "sold": false,
        "amount": 0,
        "description": "",
    },
    {
        "id": "26",
        "place": "property",
        "name": "B&O Railroad",
        "type": "railroad",
        "border": "",
        "color": "",
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "price": 200,
        "rent": [25, 50, 100, 200],
        "sold": false,
        "description": "",
    },
    {
        "id": "25",
        "place": "property",
        "name": "Illinois Avenue",
        "type": "property",
        "border": "border-top",
        "color": ":10px solid red;",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150,
        "sold": false,
        "amount": 0,
        "description": "",
    },
    {
        "id": "24",
        "place": "property",
        "name": "Indiana Avenue",
        "type": "property",
        "border": "border-top",
        "color": ":10px solid red;",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150,
        "sold": false,
        "amount": 0,
        "description": "",
    },
    {
        "id": "23",
        "place": "property",
        "name": "Chance",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "description": "Draw a Chance card.",
        "sold": "nothing"
    },
    {
        "id": "22",
        "place": "property",
        "name": "Kentucky Avenue",
        "type": "property",
        "border": "border-top",
        "color": ":10px solid red;",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150,
        "sold": false,
        "amount": 0,
        "description": "",
    },
    {
        "id": "21",
        "place": "corner",
        "name": "Free Parking",
        "type": "special",
        "border": "",
        "color": "",
        "price": null,
        "rent": [],
        "houseCost": 0,
        "hotelCost": 0,
        "amount": 0,
        "description": "",
        "sold": "nothing",
    },
];
let cards = [];
allCards.forEach((card) => {
    if (card !== null) {
        cards.push(card);
    }
});
const board = document.querySelector(".monopoly-board");
boardHTML();
const turn = document.querySelector(".turn");
const cells = document.querySelectorAll(".cell");
const firstPlayerDiv = document.querySelector(".player1-cards");
const secondPlayerDiv = document.querySelector(".player2-cards");
const actionDiv = document.querySelector(".action");
let whoGo = "player1";
turn.textContent = whoGo;
let canRoll = true;
let player1 = {
    "name": "player1",
    "cardsId": [],
    "streets": [],
    "railroad": [],
    "utility": [],
    "on": 1,
    "yourTurn": true,
    "money": 3000,
};
let player2 = {
    "name": "player2",
    "cardsId": [],
    "streets": [],
    "railroad": [],
    "utility": [],
    "on": 1,
    "yourTurn": false,
    "money": 3000,
};
let cardOpen;
addPlayers();
addPlayerProperty();
const dice = document.querySelector(".dice");
const diceArr = [1, 2, 3, 4, 5, 6];
dice.onclick = () => {
    if (canRoll) {
        let numToGo = rollDice();
        dice.textContent = String(numToGo);
        if (whoGo === "player1") {
            move(numToGo, player1);
            // whoGo = "player2";
        }
        else if (whoGo === "player2") {
            move(numToGo, player2);
            // whoGo = "player1";
        }
    }
};
function showCard(id) {
    // @ts-ignore
    cardOpen = cards.find(item => item.id === String(id));
    let nowPlaying = whoGo === "player1" ? player1 : player2;
    let otherPlayer = whoGo === "player1" ? player2 : player1;
    if (cardOpen.name === "Chance") {
        chance(); //done
    }
    else if (cardOpen.name === "Community Chest") {
        community(); //done
    }
    else if (cardOpen.type === "tax") {
        tax(nowPlaying, cardOpen); //done
    }
    else if (cardOpen.name === "Jail") {
        jail(); //done
    }
    else if (cardOpen.name === "Go to Jail") {
        goJail(nowPlaying); //done
    }
    else if (cardOpen.type === "railroad") {
        railroad(nowPlaying, cardOpen, otherPlayer); //done
    }
    else if (cardOpen.name === "Electric Company") {
        electric(nowPlaying, cardOpen, otherPlayer); //done
    }
    else if (cardOpen.name === "Water Works") {
        water(nowPlaying, cardOpen, otherPlayer); //done
    }
    else if (cardOpen.name === "GO") {
        go(); //done
    }
    else if (cardOpen.name === "Free Parking") {
        free(); //done
    }
    else {
        street(nowPlaying, cardOpen, otherPlayer); //done
    }
}
function chance() {
    whoGo = "player1" === "player1" ? "player1" : "player2";
    canRoll = true;
    actionDiv.innerHTML = `
    <div class="img img-chance">
        <div class="info">Roll again!</div>
    </div>    
`;
}
function go() {
    whoGo = whoGo === "player1" ? "player2" : "player1";
    canRoll = true;
    turn.textContent = whoGo;
    actionDiv.innerHTML = `
    <div class="img img-go"></div>    
`;
}
function free() {
    whoGo = whoGo === "player1" ? "player2" : "player1";
    canRoll = true;
    turn.textContent = whoGo;
    actionDiv.innerHTML = `
    <div class="img img-free"></div>    
`;
}
function community() {
    whoGo = whoGo === "player1" ? "player1" : "player2";
    canRoll = true;
    actionDiv.innerHTML = `
    <div class="img img-community">
        <div class="info">Roll again!</div>
    </div>`;
}
function tax(nowPlaying, cardOpen) {
    actionDiv.innerHTML = `
    <div class="img img-tax"> 
        <h1>${cardOpen.name}</h1>
        <button>Pay ${cardOpen.amount}</button>
    </div>`;
    const payTax = document.querySelector(".img-tax button");
    payTax.onclick = () => {
        nowPlaying.money -= cardOpen.amount;
        addPlayerProperty();
        whoGo = whoGo === "player1" ? "player2" : "player1";
        canRoll = true;
        turn.textContent = whoGo;
        clearShowCard();
    };
}
function jail() {
    whoGo = whoGo === "player1" ? "player2" : "player1";
    canRoll = true;
    turn.textContent = whoGo;
    actionDiv.innerHTML = `
            <div class="img img-jail"></div>
        `;
}
function goJail(nowPlaying) {
    setTimeout(() => {
        nowPlaying.on = 11;
        addPlayers();
        whoGo = whoGo === "player1" ? "player2" : "player1";
        canRoll = true;
        turn.textContent = whoGo;
    }, 1000);
    actionDiv.innerHTML = `
<div class="img img-go-jail"></div>
   `;
}
function railroad(nowPlaying, cardOpen, otherPlayer) {
    let canBuy = !cardOpen.sold;
    // @ts-ignore
    let enoughMoney = (nowPlaying.money - cardOpen.price) >= 0;
    if (canBuy && enoughMoney) {
        let count = cardOpen.price;
        actionDiv.innerHTML = `
            <div class="img img-rail flex j-center a-center gap">
               <div class="buttons">
                    <button class="buy">Buy ${count}</button>
                    <button class="skip">Skip</button>
               </div>
            </div>
            `;
        const buyRail = document.querySelector(".img-rail .buy");
        const skip = document.querySelector(".img-rail .skip");
        buyRail.onclick = () => {
            if (!cardOpen.sold) {
                // @ts-ignore
                let findCard = cards.find(item => item.id === String(cardOpen.id));
                // @ts-ignore
                findCard.sold = nowPlaying.name;
                nowPlaying.railroad.push({ "id": cardOpen.id });
                nowPlaying.cardsId.push(cardOpen.id);
                // @ts-ignore
                nowPlaying.money -= cardOpen.price;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                turn.textContent = whoGo;
                clearShowCard();
                canRoll = true;
            }
        };
        //buy rail end
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
        //skip end
    }
    else if (canBuy && !enoughMoney) {
        actionDiv.innerHTML = `
            <div class="img img-rail flex j-center a-center gap">
               <div class="buttons">
                    <div>Not enough money</div>
                    <button class="skip">Skip</button>
               </div>
            </div>
            `;
        const skip = document.querySelector(".img-rail .skip");
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
    }
    else {
        let ownerName = cardOpen.sold;
        if (ownerName !== nowPlaying.name) {
            // @ts-ignore
            let count = countRailAmount(otherPlayer, cardOpen.rent);
            actionDiv.innerHTML = `
            <div class="img img-rail flex j-center a-center gap">
            <div class="buttons"> 
                <button id="pay-${cardOpen.id}">Pay ${count} </button>
            </div> 
            </div> 
        `;
            const payRail = document.querySelector(`#pay-${cardOpen.id}`);
            payRail.onclick = () => {
                nowPlaying.money -= count;
                otherPlayer.money += count;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                canRoll = true;
                turn.textContent = whoGo;
                clearShowCard();
            };
        }
        if (ownerName === nowPlaying.name) {
            actionDiv.innerHTML = `
            <div class="img img-rail flex j-center a-center gap">
            </div>
            `;
            whoGo = whoGo === "player1" ? "player2" : "player1";
            canRoll = true;
            turn.textContent = whoGo;
        }
    }
}
function electric(nowPlaying, cardOpen, otherPlayer) {
    let canBuy = !cardOpen.sold;
    // @ts-ignore
    let enoughMoney = (nowPlaying.money - cardOpen.price) >= 0;
    if (canBuy && enoughMoney) {
        let count = cardOpen.price;
        actionDiv.innerHTML = `
            <div class="img img-electric flex j-center a-center gap">
               <div class="buttons flex">
                    <button class="buy">Buy ${count}</button>
                    <button class="skip">Skip</button>
               </div>
            </div>
            `;
        const buyElectric = document.querySelector(".img-electric .buy");
        const skip = document.querySelector(".img-electric .skip");
        buyElectric.onclick = () => {
            if (!cardOpen.sold) {
                // @ts-ignore
                let findCard = cards.find(item => item.id === String(cardOpen.id));
                // @ts-ignore
                findCard.sold = nowPlaying.name;
                nowPlaying.utility.push({ "id": cardOpen.id });
                nowPlaying.cardsId.push(cardOpen.id);
                // @ts-ignore
                nowPlaying.money -= cardOpen.price;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                turn.textContent = whoGo;
                clearShowCard();
                canRoll = true;
            }
        };
        //buy electric end
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
        //skip end
    }
    else if (canBuy && !enoughMoney) {
        actionDiv.innerHTML = `
            <div class="img img-electric flex j-center a-center gap">
               <div class="buttons flex">
                    <div>Not enough money!</div>
                    <button class="skip">Skip</button>
               </div>
            </div>
            `;
        const skip = document.querySelector(".img-electric .skip");
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
    }
    else {
        let ownerName = cardOpen.sold;
        if (ownerName !== nowPlaying.name) {
            // @ts-ignore
            let count = countUtilityAmount(otherPlayer, cardOpen.rent);
            actionDiv.innerHTML = `
            <div class="img img-electric flex j-center a-center gap">
                <div class="buttons img img-electric"> 
                    <button id="pay-${cardOpen.id}">Pay ${count} x 🏠 </button>
                </div>  
            </div>
        `;
            const payWater = document.querySelector(`#pay-${cardOpen.id}`);
            payWater.onclick = () => {
                let pay = countHouses(nowPlaying);
                nowPlaying.money -= pay;
                otherPlayer.money += pay;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                canRoll = true;
                turn.textContent = whoGo;
                clearShowCard();
            };
        }
        if (ownerName === nowPlaying.name) {
            actionDiv.innerHTML = `
            <div class="img img-electric flex j-center a-center gap">
            </div>
            `;
            whoGo = whoGo === "player1" ? "player2" : "player1";
            canRoll = true;
            turn.textContent = whoGo;
        }
    }
}
function water(nowPlaying, cardOpen, otherPlayer) {
    let canBuy = !cardOpen.sold;
    // @ts-ignore
    let enoughMoney = (nowPlaying.money - cardOpen.price) >= 0;
    if (canBuy && enoughMoney) {
        let count = cardOpen.price;
        actionDiv.innerHTML = `
            <div class="img img-water flex j-center a-center gap">
                <div class="buttons">
                    <button class="buy">Buy ${count}</button>
                    <button class="skip">Skip</button>
                </div>
            </div>
            `;
        const buyWater = document.querySelector(".img-water .buy");
        const skip = document.querySelector(".img-water .skip");
        buyWater.onclick = () => {
            if (!cardOpen.sold) {
                // @ts-ignore
                let findCard = cards.find(item => item.id === String(cardOpen.id));
                // @ts-ignore
                findCard.sold = nowPlaying.name;
                nowPlaying.utility.push({ "id": cardOpen.id });
                nowPlaying.cardsId.push(cardOpen.id);
                // @ts-ignore
                nowPlaying.money -= cardOpen.price;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                turn.textContent = whoGo;
                clearShowCard();
                canRoll = true;
            }
        };
        //buy water end
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
        //skip end
    }
    else if (canBuy && !enoughMoney) {
        actionDiv.innerHTML = `
            <div class="img img-water flex j-center a-center gap">
                <div class="buttons">
                    <div>Not enough money</div>
                    <button class="skip">Skip</button>
                </div>
            </div>`;
        const skip = document.querySelector(".img-water .skip");
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
    }
    else {
        let ownerName = cardOpen.sold;
        if (ownerName !== nowPlaying.name) {
            // @ts-ignore
            let count = countUtilityAmount(otherPlayer, cardOpen.rent);
            actionDiv.innerHTML = `
            <div class="buttons img img-water"> 
                <button id="pay-${cardOpen.id}">Pay ${count} x 🏠 </button>
            </div>  
        `;
            const payWater = document.querySelector(`#pay-${cardOpen.id}`);
            payWater.onclick = () => {
                let pay = countHouses(nowPlaying);
                nowPlaying.money -= pay;
                otherPlayer.money += pay;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                canRoll = true;
                turn.textContent = whoGo;
                clearShowCard();
            };
        }
        if (ownerName === nowPlaying.name) {
            actionDiv.innerHTML = `
            <div class="img img-water flex j-center a-center gap">
            </div>
            `;
            whoGo = whoGo === "player1" ? "player2" : "player1";
            canRoll = true;
            turn.textContent = whoGo;
        }
    }
}
function street(nowPlaying, cardOpen, otherPlayer) {
    let canBuy = !cardOpen.sold;
    // @ts-ignore
    let enoughMoney = (nowPlaying.money - cardOpen.price) >= 0;
    if (canBuy && enoughMoney) {
        // @ts-ignore
        actionDiv.innerHTML = `
            <div style="border-top${cardOpen.color}">
            <h1>${cardOpen.name}</h1>
            <div>${cardOpen.price}$</div>
            <div>house price: ${cardOpen.houseCost}$</div>
            <div>hotel price: ${cardOpen.hotelCost}$</div>
            <div>No ${cardOpen.rent[0]}$</div>
            <div>🏠 ${cardOpen.rent[1]}$</div>
            <div>🏠🏠 ${cardOpen.rent[2]}$</div>
            <div>🏠🏠🏠 ${cardOpen.rent[3]}$</div>
            <div>🏠🏠🏠🏠 ${cardOpen.rent[4]}$</div>
            <div>🏨 ${cardOpen.rent[5]}$</div>
            <div class="buttons">
               <button class="buy-street">Buy ${cardOpen.price}</button>
               <button class="skip">Skip</button>
            </div>
        </div>
    `;
        const buyStreet = document.querySelector(".buy-street");
        const skip = document.querySelector(".skip");
        buyStreet.onclick = () => {
            // @ts-ignore
            // @ts-ignore
            let findCard = cards.find(item => item.id === String(cardOpen.id));
            // @ts-ignore
            findCard.sold = nowPlaying.name;
            let newStreet = { "id": cardOpen.id, "house": 0, "hotels": 0 };
            nowPlaying.streets.push(newStreet);
            nowPlaying.cardsId.push(cardOpen.id);
            // @ts-ignore
            nowPlaying.money -= cardOpen.price;
            addPlayerProperty();
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
        //buy water end
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
        //skip end
    }
    else if (canBuy && !enoughMoney) {
        actionDiv.innerHTML = `
            <div style="border-top${cardOpen.color}">
            <h1>${cardOpen.name}</h1>
            <div>${cardOpen.price}$</div>
            <div>house price: ${cardOpen.houseCost}$</div>
            <div>hotel price: ${cardOpen.hotelCost}$</div>
            <div>No ${cardOpen.rent[0]}$</div>
            <div>🏠 ${cardOpen.rent[1]}$</div>
            <div>🏠🏠 ${cardOpen.rent[2]}$</div>
            <div>🏠🏠🏠 ${cardOpen.rent[3]}$</div>
            <div>🏠🏠🏠🏠 ${cardOpen.rent[4]}$</div>
            <div>🏨 ${cardOpen.rent[5]}$</div>
            <div class="buttons">
                  <div>Not enough money</div>
                  <button class="skip">Skip</button>
            </div>
        </div>
    `;
        const skip = document.querySelector(".skip");
        skip.onclick = () => {
            whoGo = whoGo === "player1" ? "player2" : "player1";
            turn.textContent = whoGo;
            clearShowCard();
            canRoll = true;
        };
    }
    else {
        let ownerName = cardOpen.sold;
        if (ownerName !== nowPlaying.name) {
            // @ts-ignore
            let pay = countStreetAccount(cardOpen, otherPlayer);
            actionDiv.innerHTML = `
            <div style="border-top${cardOpen.color}">
            <h1>${cardOpen.name}</h1>
            <div>${cardOpen.price}$</div>
            <div>house price: ${cardOpen.houseCost}$</div>
            <div>hotel price: ${cardOpen.hotelCost}$</div>
            <div>No ${cardOpen.rent[0]}$</div>
            <div>🏠 ${cardOpen.rent[1]}$</div>
            <div>🏠🏠 ${cardOpen.rent[2]}$</div>
            <div>🏠🏠🏠 ${cardOpen.rent[3]}$</div>
            <div>🏠🏠🏠🏠 ${cardOpen.rent[4]}$</div>
            <div>🏨 ${cardOpen.rent[5]}$</div>
            <div class="buttons">
               <button class="pay-street">Pay ${pay}</button>
            </div>
        </div>
        `;
            const payStreet = document.querySelector(".pay-street");
            payStreet.onclick = () => {
                nowPlaying.money -= pay;
                otherPlayer.money += pay;
                addPlayerProperty();
                whoGo = whoGo === "player1" ? "player2" : "player1";
                canRoll = true;
                turn.textContent = whoGo;
                clearShowCard();
            };
        }
        if (ownerName === nowPlaying.name) {
            let housePrice = cardOpen.houseCost;
            let hotelPrice = cardOpen.hotelCost;
            let street;
            let hasHouse = 0;
            let hasHotel = 0;
            nowPlaying.streets.forEach(stre => {
                if (stre.id === cardOpen.id) {
                    street = stre;
                    hasHouse = stre.house;
                    hasHotel = stre.hotels;
                }
            });
            if (hasHouse < 4) {
                actionDiv.innerHTML = `
        <div style="border-top${cardOpen.color}">
            <h1>${cardOpen.name}</h1>
            <div>${cardOpen.price}$</div>
            <div>house price: ${cardOpen.houseCost}$</div>
            <div>hotel price: ${cardOpen.hotelCost}$</div>
            <div>No ${cardOpen.rent[0]}$</div>
            <div>🏠 ${cardOpen.rent[1]}$</div>
            <div>🏠🏠 ${cardOpen.rent[2]}$</div>
            <div>🏠🏠🏠 ${cardOpen.rent[3]}$</div>
            <div>🏠🏠🏠🏠 ${cardOpen.rent[4]}$</div>
            <div>🏨 ${cardOpen.rent[5]}$</div>
            <div class="buttons">
                 <button class="buyHouse">Buy House ${housePrice}</button>
                 <button class="skip">Skip</button>
            </div>
        </div>
        `;
                const buyHouse = document.querySelector(".buyHouse");
                buyHouse.onclick = () => {
                    // @ts-ignore
                    street.house++;
                    // @ts-ignore
                    nowPlaying.money -= housePrice;
                    addPlayerProperty();
                    whoGo = whoGo === "player1" ? "player2" : "player1";
                    turn.textContent = whoGo;
                    clearShowCard();
                    canRoll = true;
                };
                const skip = document.querySelector(".skip");
                skip.onclick = () => {
                    whoGo = whoGo === "player1" ? "player2" : "player1";
                    turn.textContent = whoGo;
                    clearShowCard();
                    canRoll = true;
                };
                //skip end
            }
            if (hasHouse >= 4) {
                actionDiv.innerHTML = `
        <div style="border-top${cardOpen.color}">
            <h1>${cardOpen.name}</h1>
            <div>${cardOpen.price}$</div>
            <div>house price: ${cardOpen.houseCost}$</div>
            <div>hotel price: ${cardOpen.hotelCost}$</div>
            <div>No ${cardOpen.rent[0]}$</div>
            <div>🏠 ${cardOpen.rent[1]}$</div>
            <div>🏠🏠 ${cardOpen.rent[2]}$</div>
            <div>🏠🏠🏠 ${cardOpen.rent[3]}$</div>
            <div>🏠🏠🏠🏠 ${cardOpen.rent[4]}$</div>
            <div>🏨 ${cardOpen.rent[5]}$</div>
            <div class="buttons">
               <button class="buyHotel">Buy Hotel ${hotelPrice}</button>
               <button class="skip">Skip</button>
            </div>
        </div>`;
                const buyHotel = document.querySelector(".buyHotel");
                buyHotel.onclick = () => {
                    console.log(street);
                    street.house = 0;
                    street.hotels = 1;
                    nowPlaying.money -= hotelPrice;
                    addPlayerProperty();
                    whoGo = whoGo === "player1" ? "player2" : "player1";
                    turn.textContent = whoGo;
                    clearShowCard();
                    canRoll = true;
                };
                const skip = document.querySelector(".skip");
                skip.onclick = () => {
                    whoGo = whoGo === "player1" ? "player2" : "player1";
                    turn.textContent = whoGo;
                    clearShowCard();
                    canRoll = true;
                };
                //skip end
            }
            if (hasHotel > 0) {
                actionDiv.innerHTML = `
            <div style="border-top${cardOpen.color}"">
            <h1>${cardOpen.name}</h1>
            <div>${cardOpen.price}$</div>
            <div>house price: ${cardOpen.houseCost}$</div>
            <div>hotel price: ${cardOpen.hotelCost}$</div>
            <div>No ${cardOpen.rent[0]}$</div>
            <div>🏠 ${cardOpen.rent[1]}$</div>
            <div>🏠🏠 ${cardOpen.rent[2]}$</div>
            <div>🏠🏠🏠 ${cardOpen.rent[3]}$</div>
            <div>🏠🏠🏠🏠 ${cardOpen.rent[4]}$</div>
            <div>🏨 ${cardOpen.rent[5]}$</div>
                  <div class="buttons">
                    <button class="skip">Skip</button>
                </div>
        </div>
        `;
                const skip = document.querySelector(".skip");
                skip.onclick = () => {
                    whoGo = whoGo === "player1" ? "player2" : "player1";
                    turn.textContent = whoGo;
                    clearShowCard();
                    canRoll = true;
                };
                //skip end
            }
        }
    }
}
function boardHTML() {
    allCards.forEach((card) => {
        if (card === null) {
            board.innerHTML += `<div></div>`;
        }
        else if (card.place === "corner") {
            board.innerHTML += `
                <div class="cell corner" id="${card.id}">
                <div class="player-1 d-none"></div>
                <div class="player-2 d-none"></div>
                <h5>${card.name}</h5>
                </div>
            `;
        }
        else if (card.type === "railroad") {
            board.innerHTML += `
                    <div style="" class="cell property" id="${card.id}">
                     <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div class="img img-rail"></div>
                </div>`;
        }
        else if (card.name === "Chance") {
            board.innerHTML += `
                    <div style="" class="cell property" id="${card.id}">
                    <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div class="img img-chance"></div>
                    
                </div>`;
        }
        else if (card.type === "tax") {
            board.innerHTML += `
                    <div style="" class="cell property" id="${card.id}">
                    <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div class="img img-tax">Tax ${card.amount}</div>
        
                </div>`;
        }
        else if (card.name === "Electric Company") {
            board.innerHTML += `
                    <div style="" class="cell property" id="${card.id}">
                    <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div class="img img-electric"></div>
                </div>`;
        }
        else if (card.name === "Community Chest") {
            board.innerHTML += `
                    <div style="" class="cell property" id="${card.id}">
                    <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div class="img img-community"></div>
                </div>`;
        }
        else if (card.name === "Water Works") {
            board.innerHTML += `
                    <div style="" class="cell property" id="${card.id}">
                    <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div class="img img-water"></div>
        
                    </div>`;
        }
        else {
            board.innerHTML += `
                    <div style="${card.border}${card.color}" class="cell property" id="${card.id}">
                    <div class="player-1 d-none"></div>
                    <div class="player-2 d-none"></div>
                    <div>${card.name}</div>
                    <div>${card.price}$</div>
                </div>
                `;
        }
    });
}
function rollDice() {
    return diceArr[Math.floor(Math.random() * 6)];
}
function move(numToGo, player) {
    if (numToGo > 0) {
        setTimeout(() => {
            player.on += 1;
            if (player.on === 41) {
                player.on = 1;
                player.money += 200;
                addPlayerProperty();
            }
            addPlayers();
            move(numToGo - 1, player);
        }, 700);
    }
    else {
        canRoll = false;
        showCard(player.on);
    }
}
function addPlayers() {
    hidAllPlayers();
    cells.forEach((cell) => {
        if (cell.id === String(player1.on)) {
            cell.children[0].classList.remove("d-none");
        }
        if (cell.id === String(player2.on)) {
            cell.children[1].classList.remove("d-none");
        }
    });
}
function hidAllPlayers() {
    cells.forEach((cell) => {
        cell.children[1].classList.add("d-none");
        cell.children[0].classList.add("d-none");
    });
}
function addPlayerProperty() {
    firstPlayerDiv.innerHTML = `<h4 class="w-100">1st player |<span class="money-1">${player1.money}</span></h4>`;
    player1.streets.forEach((street) => {
        cards.forEach(card => {
            if (card.id === street.id) {
                firstPlayerDiv.innerHTML += `
                <div class="player-card" style="border-top${card.color === "" ? ":10px solid white" : card.color}">
                    <div class="property-name">${card.name}</div>
                    <div class="property-price">${card.price} $</div>
                    <div class="houses">${street.house} 🏠</div>
                    <div class="hotels">${street.hotels} 🏨</div>
                </div>
    `;
            }
        });
    });
    player1.railroad.forEach((rail) => {
        cards.forEach(card => {
            if (card.id === rail.id) {
                firstPlayerDiv.innerHTML += `
                <div class="player-card img img-rail" style="border-top${card.color === "" ? ":10px solid white" : card.color}"> 
                    <div class="property-name">${card.name}</div>
                    <div class="property-price">${card.price} $</div>
                    <div class="img img-rail"></div>
                </div>
            
    `;
            }
        });
    });
    player1.utility.forEach((ut) => {
        cards.forEach(card => {
            if (card.id === ut.id) {
                firstPlayerDiv.innerHTML += `
                <div class="player-card" style="border-top${card.color === "" ? ":10px solid white" : card.color}"> 
                    <div class="property-name">${card.name}</div>
                    <div class="property-price">${card.price} $</div>
                    <div class="img ${card.name === "Electric Company" ? "img-electric" : "img-water"}"></div>
                </div>
            
    `;
            }
        });
    });
    secondPlayerDiv.innerHTML = `<h4 class="w-100">2st player |<span class="money-2">${player2.money}</span></h4>`;
    player2.streets.forEach((street) => {
        cards.forEach(card => {
            if (card.id === street.id) {
                secondPlayerDiv.innerHTML += `
                <div class="player-card" style="border-top${card.color === "" ? ":10px solid white" : card.color}">
                    <div class="property-name">${card.name}</div>
                    <div class="property-price">${card.price} $</div>
                    <div class="houses">${street.house} 🏠</div>
                    <div class="hotels">${street.hotels} 🏨</div>
                </div>
    `;
            }
        });
    });
    player2.railroad.forEach((rail) => {
        cards.forEach(card => {
            if (card.id === rail.id) {
                secondPlayerDiv.innerHTML += `
                <div class="player-card img img-rail" style="border-top${card.color === "" ? ":10px solid white" : card.color}"> 
                    <div class="property-name">${card.name}</div>
                    <div class="property-price">${card.price} $</div>
                    <div class="img img-rail"></div>
                </div>
            
    `;
            }
        });
    });
    player2.utility.forEach((ut) => {
        cards.forEach(card => {
            if (card.id === ut.id) {
                secondPlayerDiv.innerHTML += `
                <div class="player-card" style="border-top${card.color === "" ? ":10px solid white" : card.color}"> 
                    <div class="property-name">${card.name}</div>
                    <div class="property-price">${card.price} $</div>
                    <div class="img ${card.name === "Electric Company" ? "img-electric" : "img-water"}"></div>
                </div>
            
    `;
            }
        });
    });
}
function clearShowCard() {
    actionDiv.innerHTML = "";
}
function countStreetAccount(cardOpen, otherPlayer) {
    let streetId = cardOpen.id;
    let amount = 0;
    otherPlayer.streets.forEach((street) => {
        if (street.id === streetId) {
            let house = street.house;
            let hotels = street.hotels;
            if (hotels > 0) {
                console.log("cia hotel");
                amount = cardOpen.rent[5];
            }
            else {
                console.log(house);
                amount = cardOpen.rent[house];
            }
        }
    });
    return amount;
}
function countUtilityAmount(owner, rent) {
    return rent[owner.utility.length - 1];
}
function countRailAmount(owner, rent) {
    return rent[owner.railroad.length - 1];
}
function countHouses(nowPlaying) {
    let houses = 0;
    nowPlaying.streets.forEach((street) => {
        houses += street.house;
        houses += street.hotels;
    });
    return houses;
}
