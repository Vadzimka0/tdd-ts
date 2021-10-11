import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

//export const sum = (a: number, b: number) => a + b;

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
  return s.address.city.title === cityName;
};

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
  building.budget += budget
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, n: number) => {
  building.staffCount -= n
}

export const toHireStaff = (building: GovernmentBuildingsType, n: number) => {
  building.staffCount += n
}

export const createMessage = (props: CityType) => {
  return `Hello ${props.title} citizens`;
}

