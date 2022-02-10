/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0, count = 0
    for (let i = 0; i < sentences.length; i++) {
        count = sentences[i].split(' ').length
        max = Math.max(max, count)
    }
    return max
};