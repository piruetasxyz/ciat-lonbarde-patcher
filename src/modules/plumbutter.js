// plumbutter.js

class Plumbutter {
  constructor() {
    this.name = 'Plumbutter';
    this.brand = 'Ciat-Lonbarde';
    this.connections = new Array();
    this.sections = [
      new AVDog(),
      new AVDog(),
      new Gongue(),
      new Gongue(),
      new Ultrasound(),
      new Ultrasound(),
      new Deerhorn(),
      new SnareDrum(),
    ];
  }
}

class AVDog {
  constructor() {
    this.name = 'AVDog';
  }
}

class Gongue {
  constructor() {
    this.name = 'Gongue';
  }
}

class Ultrasound {
  constructor() {
    this.name = 'Ultrasound';
  }
}

class Deerhorn {
  constructor() {
    this.name = 'Deerhorn';
  }
}

class SnareDrum {
  constructor() {
    this.name = 'SnareDrum';
  }
}

export default Plumbutter;
