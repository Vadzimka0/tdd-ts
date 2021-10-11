import {CityType} from "./../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {title: "White street"}
        }
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}
        }
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 100,
          street: {title: "White street"}
        }
      }
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {street: {title: "Central Str"}, number: 12}
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {street: {title: "South Str"}, number: 12}
      }
    ],
    citizensNumber: 1000000
  }
})

// 01. Create a function in a separate file for the tests to pass
test("Budget should be changed for Hospital", () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);
  expect(city.governmentBuildings[0].budget).toBe(300000);
})

// 02. tests should be passed
test("Budget should be changed for Fire-Station", () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
})

// 03. Complete HouseType (add ordinal id from 1 and ascending)
// 04. create another function in the same file

/*test("Houses should be destroyed", () => {
  demolishHousesOnTheStreet(city, "Happy street");

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);
})*/

// 05. create another function in the same file
test("Houses should be repaired", () => {
  repairHouse(city.houses[1]);
  expect(city.houses[1].repaired).toBeTruthy();
})


// 06. create another function in the same file
test("staff should be decreased", () => {
  toFireStaff(city.governmentBuildings[0], 20);
  expect(city.governmentBuildings[0].staffCount).toBe(180);
})

// 07. create another function in the same file
test("staff should be increased", () => {
  toHireStaff(city.governmentBuildings[0], 20);
  expect(city.governmentBuildings[0].staffCount).toBe(220);
})

// 08. create greeting message
test("greeting message should be correct for city", () => {
  // const message = createMessage(city);
  // expect(message).toBe("Hello New York citizens");
  expect(createMessage(city)).toBe("Hello New York citizens");
})

