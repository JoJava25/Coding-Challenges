function faroCount(deckSize) {
    let cards = Array(deckSize).fill().map((e, i) => i);
    let halfLength = cards.length / 2;
    let cardsMerged = Object.assign(cards);
    let count = 0;

    do {
        let firstHalf = cardsMerged.slice(0, halfLength);
        let secondHalf = cardsMerged.slice(halfLength);

        cardsMerged = [];
        firstHalf.forEach((card, i) => {
            cardsMerged.push(card, secondHalf[i]);
        })

        count++;

    } while ( !cardsMerged.every( (e, i) => e == cards[i]) )
        
    return count;
}