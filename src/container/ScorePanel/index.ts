class ScorePanel {
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  score = 0;
  level = 1;
  constructor() {
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
  }

  addScore() {
    this.score += 1;
    this.scoreElement.innerText = this.score + '';
    if (this.score % 10 === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level += 1;
    this.levelElement.innerText = this.level + '';
  }
}

export default ScorePanel;
