import { beforeEach, describe, expect, test } from "vitest";
import { Dog } from "../domain/Dog";

describe("Dog class tests", () => {
  let dog: Dog;

  beforeEach(() => {
    dog = new Dog("Buddy", "Golden Retriever", 2, "Golden");
  });

  test("Dog can bark", () => {
    expect(dog.bark()).toBe("Woof! Woof!");
  });

  test("Dog is sleeping", () => {
    expect(dog.sleep()).toBe("Dog is sleeping");
  });

  test("Dog woke up", () => {
    expect(dog.wakeUp()).toBe("The dog woke up");
  });

  test("trick cannot be null", () => {
    expect(() => dog.learnTrick(null as unknown as string)).toThrow();;
  });

  test("dog learns a trick", () => {
    expect(dog.learnTrick("roll over")).toBe(
      "Buddy learned a new trick: roll over."
    );
  });

  test("get description", () => {
    expect(dog.getDescription()).toBe("Buddy Golden Retriever");
  });

  test("dog info", () => {
    expect(dog.displayInfo()).toBe("Buddy - Golden Retriever - 2 - Golden")
  });
});
