import DEFAULT_WORDSLIST from './wordslist';

export function generateMnemonic(size = 12, availableWords = DEFAULT_WORDSLIST, words = []) {
    const position = Math.round(Math.random() * availableWords.length);
    const word = availableWords[position];
    if (words.indexOf(word) === -1) words.push(word);
    return (size > 0) ? generateMnemonic(size-1, availableWords, words) : words;
}