import {createGreatingMessage, ManType} from "./05_01";

let people: Array<ManType>;

beforeEach(function () {
  people = [
    {name: "Andrew Ivanow", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dmitry Sidorow", age: 18}
  ];
});

test("Should get of greating messages ", () => {

  //const messages = people.map(man => `Hello ${man.name.split(" ")[0]}`);

  const messages = createGreatingMessage(people);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe("Hello Andrew");
  expect(messages[1]).toBe("Hello Alex");
  expect(messages[2]).toBe("Hello Dmitry");


});