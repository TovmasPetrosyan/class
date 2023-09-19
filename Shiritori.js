class Shiritory{
    constructor(){
          this.words = [];
          this.game_over = false;
    }
    play(word){
        if(this.words.length > 0 && word[0] !== this.words[this.words.length - 1].slice(-1)){
            this.game_over = true;
            return "game over"
        } else if(this.words.includes(word)){
            return "game over"
        }

        this.words.push(word);
        return this.words;
    }
    restart(){
        this.words = [];
        this.game_over = false;
        return "game restarted"
        
    }
}

myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); 
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn"));; // "game over"
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
console.log(myShiritori.restart());
console.log(myShiritori.words);
console.log(myShiritori.play("hostess")); // ["hostess"]
myShiritori.play("stash"); // ["hostess", "stash"]
myShiritori.play("hostess"); // "game over"