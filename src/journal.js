export function Entry(title, content) {
    this.title = title;
    this.content = content;
}

Entry.prototype.wordCount = function() {
    var wordArray = this.content.split(" ");
    var wordCount = 0;
    wordArray.forEach(function() {
        wordCount += 1;
    })
    return wordCount;
};


Entry.prototype.vowelCount = function(){
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var splitContentArray = this.content.split("");
    var vowelCount = 0;
    
    splitContentArray.forEach(function(input){
        if(vowels.includes(input)) {
            vowelCount++;
        } 
    });
    return vowelCount;
}


Entry.prototype.consonantCount = function(){
    var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "z", "Z"];
    var consonantCount = 0;
    var splitContentArray = this.content.split("");
    splitContentArray.forEach(function(input){
        if(consonants.includes(input)){
            consonantCount++;
        }
    })
    return consonantCount;
}


