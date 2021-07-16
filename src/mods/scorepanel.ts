class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(private maxlevel: number = 10, private levelScore: number = 10) {
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.levelScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        if (this.level < this.maxlevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;