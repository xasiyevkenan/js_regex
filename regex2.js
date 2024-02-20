//Part 1
const text =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const spainRegexps = /Spain/g;

const matchedText = text.match(spainRegexps);

console.log(matchedText); //["Spain", "Spain"]
console.log(matchedText.length); //2

//Part 2
const rainRegex = /rain/g;

const textMatches = [...text.matchAll(rainRegex)];

for (i = 0; i < textMatches.length; i++) {
  console.log(textMatches[i].index);
}

//Part 3
const spainRegex = /Spain/;
let updatedText = text.replace(spainRegex, "France");

console.log(updatedText);

//Part 4
updatedText = text.replaceAll(rainRegex, "sun");

console.log(updatedText);

//Part 5
const searchedWord = text.search(/plain/);

console.log(searchedWord);
