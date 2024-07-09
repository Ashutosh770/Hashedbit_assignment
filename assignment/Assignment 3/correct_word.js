function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

let sentence = "I love programming";
let correctedSentence = correctfn(sentence, "programming", "coding");
console.log(correctedSentence); // Output: "I love coding"
