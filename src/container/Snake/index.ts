class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake>div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    this.head.style.left = value + 'px';
    this.moveBody();
  }
  set Y(value: number) {
    this.head.style.top = value + 'px';
    this.moveBody();
  }

  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }
}

export default Snake;
