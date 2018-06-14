function cardDeck() {

  let deck = [];
  let suits = ["spades", "hearts", "diamonds", "clubs"];
  let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "D", "E"];
   
  function build() {
    return values.map(function(cardValue) {
      return suits.map(function(cardSuit) {
        return {Value: cardValue, Suit: cardSuit};
      });
    }).reduce(function (a, b) { return a.concat(b) });
  }
  
  function shuffleArray(arr){
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  }

  //Object to be returned to frontend
  let deck_holder = {
  
    //Shuffle the current deck.
    shuffle:() => {
      (Array.isArray(deck) && deck.length === 0) ? (
        document.getElementById("message").innerHTML = "Deck Shuffled", deck = build()) 
        : document.getElementById("message").innerHTML = "Remaining Deck Shuffled";
      deck = shuffleArray(deck);
    },
  
    //Simulate the Draw Action, force a shuffle if the deck has not been shuffled
    draw:() => {
      if(Array.isArray(deck) && deck.length === 0){
        deck_holder.shuffle();
        document.getElementById("message").innerHTML = "Deck Shuffled";
        document.getElementById("displaydraw").innerHTML = "&#x1F0A0;";
        document.getElementById("remainingcards").innerHTML = deck.length;
        return;
      }
      //clear the card display
      document.getElementById("message").innerHTML = "";
      document.getElementById("displaydraw").innerHTML = "";
      var card = document.createElement("div");
      card.className = deck[0].Suit;
      switch(deck[0].Suit) {
           case "spades":
             card.innerHTML = "&#x1F0A" + deck[0].Value + ";";
             break;
           case "hearts":
             card.innerHTML = "&#x1F0B" + deck[0].Value + ";";
             break;
           case "diamonds":
             card.innerHTML = "&#x1F0C" + deck[0].Value + ";";
             break;
           case "clubs":
             card.innerHTML = "&#x1F0D" + deck[0].Value + ";";
             break;
           default:
              card.innerHTML = "No Card Found";
      }
      deck.shift();
      document.getElementById("displaydraw").appendChild(card);
      document.getElementById("remainingcards").innerHTML = deck.length;
    },

    // Testing function to show cards in console.
    showDeck:() => { console.log(deck); },
  };

  return deck_holder;
}

const initial_deck = cardDeck();  