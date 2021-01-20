class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;
  }
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  set X(value: number) {
    this.element.style.left = value + 'px';
  }

  set Y(value: number) {
    this.element.style.top = value + 'px';
  }

  changeLocation() {
    const x = Math.round(Math.random() * 29) * 10;
    const y = Math.round(Math.random() * 29) * 10;
    this.X = x;
    this.Y = y;
  }
}

export default Food;
