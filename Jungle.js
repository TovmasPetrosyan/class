class Jungle {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  soundOff() {
    this.animals.forEach((animal) => {
      animal.makeSound();
      console.log(`${animal.constructor.name} - Energy Level: ${animal.getEnergy()}`);
    });
  }
}
class Animal {
  constructor() {
    this.energy = 0;
  }
  makeSound() {
    this.energy -= 3;
  }
  eat(food) {
    if (food instanceof Food) {
      this.energy += 5;
    }
  }
  sleep() {
    this.energy += 10;
  }
  getEnergy() {
    return this.energy;
  }

}
class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}
class Tiger extends Animal {
  constructor() {
    super();
  }
  sleep() {
    this.energy += 15;
  }
  eat(food) {
    if (food instanceof Meat) {
      this.energy += 5;
      console.log(`${this.constructor.name} is eating ${food.constructor.name}. Energy Level: ${this.energy}`);
    } else {
      console.log(`${this.constructor.name} can't eat ${food.constructor.name}.`);
    }
  }
}
class Monkey extends Animal {
  constructor() {
    super();
  }
  makeSound() {
    this.energy -= 4;
  }
  eat(food) {
    if (food instanceof Food) {
      this.energy += 2;
    }
  }
  play() {
    if (this.energy >= 8) {
      this.energy = -8;
      return 'Oooo Oooo';
    } else {
      return "I'm too tired.";
    }
  }
}
class Snake extends Animal {
  constructor() {
    super();
  }
}
class Fish extends Food {
  constructor() {
    super();
  }
}
class Grain extends Food {
  constructor() {
    super();
  }
}
class Meat extends Food {
  constructor() {
    super();
  }
}

// const jungle = new Jungle();
// const tiger = new Tiger();
// const monkey = new Monkey();
// const snake = new Snake();
// const fish = new Fish();
// const grain = new Grain();
// const meat = new Meat();

// jungle.addAnimal(tiger);
// jungle.addAnimal(monkey);
// jungle.addAnimal(snake);

// tiger.makeSound();
// tiger.eat(meat);
// tiger.sleep();

// monkey.makeSound();
// monkey.eat(grain);
// monkey.sleep();

// snake.makeSound();
// snake.eat(fish);
// snake.sleep();
// jungle.soundOff();