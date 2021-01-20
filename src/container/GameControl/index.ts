import Snake from '../Snake/index';
import Food from '../Food/index';
import ScorePanel from '../ScorePanel/index';
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  directionKey = '';
  runTimer: any;
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
    this.directionKey = event.key;
  }

  run() {
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.directionKey) {
      case 'ArrowLeft':
        x -= 10;
        break;
      case 'ArrowRight':
        x += 10;
        break;
      case 'ArrowUp':
        y -= 10;
        break;
      case 'ArrowDown':
        y += 10;
        break;
      default:
        break;
    }
    if (this.checkEat(x, y)) {
      this.food.changeLocation();
      this.snake.addBody();
      this.scorePanel.addScore();
    }
    this.snake.X = x;
    this.snake.Y = y;
    this.runTimer && clearTimeout(this.runTimer);
    this.runTimer = setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 50);
  }

  checkEat(x: number, y: number) {
    return x === this.food.X && y === this.food.Y;
  }
}

export default GameControl;
