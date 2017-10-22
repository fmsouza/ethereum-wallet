import DEFAULT_WORDSLIST from './wordslist';

export function generateMnemonic(size = 12, words = []) {
    const position = Math.round(Math.random() * DEFAULT_WORDSLIST.length);
    const word = DEFAULT_WORDSLIST[position];
    if (words.indexOf(word) > -1) return generateMnemonic(size, words);
    words.push(word);
    return (size > 1) ? generateMnemonic(size-1, words) : words;
}

export function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}