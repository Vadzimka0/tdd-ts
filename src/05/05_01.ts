export type ManType = {
  name: string
  age: number
}

// const people = [
//   {name: "Andrew Ivanow", age: 33},
//   {name: "Alex Petrov", age: 24},
//   {name: "Dmitry Sidorow", age: 18}
// ];


export const createGreatingMessage = (people: Array<ManType>) => {
  return people.map(man => `Hello ${man.name.split(" ")[0]}`)
}