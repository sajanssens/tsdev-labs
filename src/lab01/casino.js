// @ts-check
// ^^^^^^^^^ informs VSC to help check this JS code.
//           IDEA sees JS file as TS by default.
class Person {

    _name; // Manier in JS om een property te declareren, maar niet verplicht. Kan ook in de constructor.

    /**
     * @param {string} name
     */
    constructor(name) {
        this._name = name; // bug? no, allowed in JS!
    }
}

class Player extends Person {
    /** // aka js doc
     *
     * @param {string} name
     * @param {number} chips
     */
    constructor(name, chips) {
        super(name);
        this.chips = chips; // bug? no, allowed
    }

    toString() {
        return `${this._name} has ${this.chips} number of chips left`; // this? yes, its required in JS
    }
}

var playerOne = new Player('Han', 46);
var playerTwo = new Player('Leia', 68);

var highestNumberOfChips = Math.max(playerOne.chips, playerTwo.chips);
console.log(highestNumberOfChips + ' is the highest number of chips');

class RouletteBoard {
    constructor() {
        /** @type {any[]} */
        this.records = []; // bug
    }

    /**
     *
     * @param {Player} player
     * @param {number} bet
     */
    placeBet(player, bet) { // this.records?
        var record = this.records.find((r) => r.player === player && r.bet === bet);
        if (!record) {
            record = { player: player, bet: bet, numberOfChips: 0 };
            this.records.push(record); // bug
        }
        record.numberOfChips++;
    }

    play() {
        var winner = Math.floor(Math.random() * 36);
        console.log('winning number: ' + winner);
        for (var record in this.records) {
            if (this.records[record].bet === winner) {
                var loot = this.records[record].numberOfChips * 10;
                this.records[record].player.chips += loot;
                console.log(
                    this.records[record].player.toString() + ' wins ' + loot,
                );
            }
        }
        this.records = [];
    }
}

var roulette = new RouletteBoard();
roulette.placeBet(playerOne, 20);
roulette.placeBet(playerOne, 20);
roulette.placeBet(playerTwo, 1);
roulette.placeBet(playerTwo, 2);
roulette.placeBet(playerTwo, 6);
roulette.placeBet(playerTwo, 31);
roulette.placeBet(playerTwo, 5);
roulette.placeBet(playerTwo, 4);

roulette.play();

