import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
      {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
      {buildedAt: 2020, repaired: false, address: {number: 100, street: {title: "White street"}}}
    ]
  }
})
