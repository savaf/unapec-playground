import Ask from "https://deno.land/x/ask/mod.ts";

const ADULT_AGE = 18;

interface IPerson {
  age: number;
  name: string;
}
class Person implements IPerson {
  age: number;
  name: string;

  constructor(person: IPerson) {
    this.name = String(person.name);
    this.age = Number(person.age);
  }

  isAdult() {
    return this.age > ADULT_AGE;
  }
}

(async () => {
  const ask = new Ask();

  const personAnswer = await ask.prompt([
    {
      name: "name",
      type: "input",
      message: "Name:",
    },
    {
      name: "age",
      type: "number",
      message: "Age:",
    },
  ]);

  const person = new Person({
    age: personAnswer.age,
    name: personAnswer.name,
  });

  if (person.isAdult()) {
    console.log(`Hi ${person.name} you are adult`);
  }
})();
