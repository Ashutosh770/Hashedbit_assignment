let text = "This is an example string with at least twenty characters.";

let vowelsCount = (text.match(/[aeiouAEIOU]/g) || []).length;
let consonantsCount = (text.match(/[^aeiouAEIOU\s\d\W]/g) || []).length;

console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`);
