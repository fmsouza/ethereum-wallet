export function shuffleArray(array) {
    if (!(array instanceof Array)) throw new Error('The input is not an array.');
    let tmpArray = [ ...array ];
    var currentIndex = tmpArray.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        [tmpArray[currentIndex], tmpArray[randomIndex]] = [tmpArray[randomIndex], tmpArray[currentIndex]];
    }
  
    return tmpArray;
}