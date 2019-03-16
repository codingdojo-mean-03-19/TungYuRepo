
// Deck class
class Deck {
    constructor(){
        this.deck = [];
        // this.reset();
        // this.shuffle();

    }

    reset(){
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];    
    
        for (let s in suits){
            for (let v in values){
                this.deck.push(`${values[v]} ${suits[s]}`);
            }
        }
        return this;
    }

    shuffle(){
        // const {deck} = this;
        let m = this.deck.length, i, temp;

        while(m){
            i = Math.floor(Math.random() * m--);
            temp = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = temp;
        }
        return this;
    }

    deal(){
        return this.deck.pop();
    }
}

//Player class

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    draw(deck){
        this.hand.push(deck.deal());
        return this
    }
    discard(){
        this.hand.pop();
        return this;
    }
}


const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player1 = new Player("Tina");
player1.draw(deck1).draw(deck1);
console.log(player1);
console.log(deck1);