function wordCount(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

let paragraph = "This is a sample paragraph to count the number of words.";
console.log(wordCount(paragraph)); 
