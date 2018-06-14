var assert = chai.assert;

describe('Deck', function(){
	it('Deck Should be empty array by default', function(){
		assert.equal(initial_deck.showDeck(), "0");
	});
	it('Deck Should fill with 52 cards after shuffle', function(){
		initial_deck.shuffle();
		assert.equal(initial_deck.showDeck(), "52");
	});
	it('Deck Should fill with 51 cards after draw', function(){
		initial_deck.draw();
		assert.equal(initial_deck.showDeck(), "51");
	});
	it('Card display should have a suit associated', function(){
		var suitHolder = document.getElementById("displaydraw").children[0].classList;
		assert(suitHolder.contains('spades') || suitHolder.contains('hearts') || suitHolder.contains('diamonds') || suitHolder.contains('clubs'));
	});
} );