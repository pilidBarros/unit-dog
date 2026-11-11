/**
 * Represents a dog object.
 *
 * @class
 */
export class Dog {
  name: string;
  breed: string;
  age: number;
  color: string;
  isSleeping: boolean;
  tricks: string[];

  /**
   * Creates an instance of the Dog class.
   *
   * @constructor
   * @param name - The name of the dog.
   * @param breed - The breed of the dog.
   * @param age - The age of the dog.
   * @param color - The color of the dog's fur.
   */
  constructor(name: string, breed: string, age: number, color: string) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    this.isSleeping = false;
    this.tricks = [];
  }

  /**
   * Returns a string that contains the name and breed of the dog.
   *
   * @return The description of a dog.
   */
  getDescription(): string {
    // TODO: retornar la concatenación de this.name y this.breed
    return `${this.name} ${this.breed}`
  }

  /**
   * Makes the dog sleep.
   *
   * @return A message indicating that the dog is now sleeping.
   */
  sleep(): string {
    // TODO: leer el jsdoc
    return "Dog is sleeping";
  }

  /**
   * Wakes up the sleeping dog.
   *
   * @return A message indicating that the dog woke up.
   */
  wakeUp(): string {
    // TODO: leer el jsdoc
    return "The dog woke up";
  }

  /**
   * Teaches the dog a new trick.
   *
   * @param trick - The trick to be taught to the dog.
   * @return A message indicating that the dog learned a new trick.
   */
  learnTrick(trick: string): string {
    if (trick === null || trick === "") {
      throw new Error("Trick cannot be empty");
    }
    this.tricks.push(trick);
    return `${this.name} learned a new trick: ${trick}.`;
  }

  /**
   * Makes the dog bark.
   *
   * @return A message indicating "Woof! Woof!".
   */
  bark(): string {
    // TODO: leer el jsdoc
    return "Woof! Woof!";
  }

  /**
   * Displays information about the dog.
   *
   * @return All the information about the dog.
   */
  displayInfo(): string {
    // TODO: leer el jsdoc
    return `${this.name} - ${this.breed} - ${this.age} - ${this.color}`;
  }
}
