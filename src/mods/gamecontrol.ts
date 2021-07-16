import Food from './food'
import ScorePanel from './scorepanel'
import Snake from './snake'
class GameContor {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isActive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(event: KeyboardEvent) {
        let arr = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown']
        if (arr.indexOf(event.key) > -1)
            this.direction = event.key
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case 'w': case 'ArrowUp':
                y -= 10;
                break;
            case 'a': case 'ArrowLeft':
                x -= 10;
                break;
            case 's': case 'ArrowDown':
                y += 10;
                break;
            case 'd': case 'ArrowRight':
                x += 10;
                break;
        }
        this.checkEat(x, y);
        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e) {
            window.alert('游戏结束! 得分为：' + this.scorePanel.score)
            this.isActive = false;
        }

        this.isActive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
};

export default GameContor;