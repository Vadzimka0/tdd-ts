import {CityType} from "./../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCounterGreaterThen} from "./04-2";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {title: "White street"}
        }
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}
        }
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 100,
          street: {title: "Happy street"}
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

// 03. Complete HouseType (add ordinal id from 1 and ascending)
// 04. create another function in the same file

test("Houses should be destroyed", () => {
  demolishHousesOnTheStreet(city, "Happy street");

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);
})

// 05. create another function in the same file

test("Houses should be destroyed", () => {
  let buildings = getBuildingsWithStaffCounterGreaterThen(city.governmentBuildings, 500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe("FIRE-STATION");
})