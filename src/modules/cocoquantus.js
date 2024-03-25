// Cocoquantus

class Cocoquantus {
  constructor() {
    this.name = 'Cocoquantus';
    this.brand = 'Ciat-Lonbarde';
    this.connections = new Array();
    this.sections = [
      new Preamp(),
      new Coco(),
      new Quantussy(),
      new Coco(),
    ];
  }
}

class Preamp {
  constructor() {
    this.name = 'Preamp';
  }
}

class Coco {
  constructor() {
    this.name = 'Coco';
  }
}

class Quantussy {
  constructor() {
    this.name = 'Quantussy';
  }
}

export default Cocoquantus;
