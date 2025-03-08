// sidrax.js

class Sidrax {
  constructor() {
    this.name = 'Sidrax';
    this.brand = 'Ciat-Lonbarde';
    this.keysNumber = 7;
    this.keys = new Array();
    this.connections = new Array();
    this.colors = [
      'gray',
      'red',
      'blue',
      'orange',
      'green',
      'orange',
      'green',
    ];
    for (let i = 0; i < this.keysNumber; i++) {
      this.keys.push(new SidraxKey(i, this.colors));
    }
  }
  newConnection() {
    console.log('new connection');
  }
}

class SidraxKey {
  constructor(number, colors) {
    this.number = number;

    this.jacks = [
      new SidraxJack(colors[0]),
      new SidraxJack(
        colors[1 + ((0 + number) % (colors.length - 1))],
      ),
      new SidraxJack(
        colors[1 + ((1 + number) % (colors.length - 1))],
      ),
      new SidraxJack(
        colors[1 + ((2 + number) % (colors.length - 1))],
      ),
      new SidraxJack(
        colors[1 + ((3 + number) % (colors.length - 1))],
      ),
      new SidraxJack(
        colors[1 + ((4 + number) % (colors.length - 1))],
      ),
      new SidraxJack(
        colors[1 + ((5 + number) % (colors.length - 1))],
      ),
    ];
  }
}

class SidraxJack {
  constructor(color) {
    this.color = color;
    if (color === 'gray' || color === 'blue' || color === 'green') {
      this.input = true;
      this.output = false;
    } else if (color === 'red' || color === 'orange') {
      this.input = false;
      this.output = true;
    }
  }
}

export default Sidrax;
