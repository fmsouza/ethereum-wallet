import DEFAULT_WORDSLIST from './wordslist';

export function generateMnemonic(size = 12, words = []) {
    const position = Math.round(Math.random() * DEFAULT_WORDSLIST.length);
    const word = DEFAULT_WORDSLIST[position];
    if (words.indexOf(word) > -1) return generateMnemonic(size, words);
    words.push(word);
    return (size > 1) ? generateMnemonic(size-1, words) : words;
}