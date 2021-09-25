// tsconfig.json - "isolatedModules": false,

type LocalCityType = {
  title: string
  countryTitle: string
}
type AddressType = {
  streetTitle: string
  city: LocalCityType
}
type TechType = {
  id: number
  title: string
}
type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}

export const student: StudentType = {
  id: 1,
  name: "Dima",
  age: 32,
  isActive: false,
  address: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus"
    }
  },
  technologies: [
    {
      id: 1,
      title: "JS"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 3,
      title: "NodeJS"
    }
  ]
};

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);


