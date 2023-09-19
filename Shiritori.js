class Shiritori{
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