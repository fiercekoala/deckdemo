function carddeck() {

//variables to hold card info
let deck = new Array();
let suits = ["spades", "hearts", "diamonds", "clubs"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "D", "E"];

//build the deck of cards, for the object. 
function build() {
	for(var i = 0; i < suits.length; i++)
		{
			for(var x = 0; x < values.length; x++)
			{
				var card = {Value: values[x], Suit: suits[i]};
				deck.push(card);
				//console.log(values[x]);
			}
		}
	deckholder.remainingcards();
}

//function to check if the current deck is empty, if
function emptydeck(){
	if(!deck.length){
			build();
			return true;
		}
	return false;
}

//Object to be returned to frontend
let deckholder = {

	//Shuffle the current deck. This will shuffle whatever cards remain in the deck. 
	shuffle:() =>
	{
		emptydeck() ? document.getElementById("message").innerHTML = "Deck Shuffled" : document.getElementById("message").innerHTML = "Remaining Deck Shuffled";
		for (var i = (deck.length-1); i > 0; i--)
		{
			var randomNumber = Math.floor((Math.random() * i));
			var temp = deck[i];

			deck[i] = deck[randomNumber];
			deck[randomNumber] = temp;
		}
	},

	//Simulate the Draw Action, remove the first element from the top of the array, force a shuffle if the deck has not been shuffled
	draw:() =>
	{
		if(emptydeck()){
			deckholder.shuffle();
			document.getElementById("message").innerHTML = "Deck Shuffled";
			document.getElementById("displaydraw").innerHTML = "&#x1F0A0;";
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
		deckholder.remainingcards();
	},

	remainingcards:() =>
	{
		document.getElementById("remainingcards").innerHTML = deck.length;
	},

	// Testing function to show cards in console.
	//showdeck:() => { console.log(deck); },
};

	return deckholder;
}

const deck1 = carddeck();