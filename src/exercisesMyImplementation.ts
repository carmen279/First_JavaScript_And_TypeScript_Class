"use strict";
import { map, filter, reduce, some, every } from './functions.ts';
import {persons, pets, animals, countries} from './main.ts'

/**
 * EJERCICIOS CON MI IMPLEMENTACIÓN
 */

export function executeExercisesMyImplementation() {


  // Número total de infectados
  let num_infected_persons = reduce(persons, (num_infected, person) => person.infected ? ++num_infected : num_infected,0)
  console.log(`Number of infected people: ${num_infected_persons}`)

  // Número total de sanos
  let num_healthy_persons = reduce(persons,(num_healthy, person) => !person.infected ? ++num_healthy : num_healthy,0)
  console.log(`Number of healthy people: ${num_healthy_persons}`)

  // Numero total de infectados en los países (del array de países)
  let total_infected_population = reduce(countries,(num_infected, country) => num_infected += country.infected,0)
  console.log(`Total of infected population: ${total_infected_population}`)

  // País con más infectados (del array de países)
  let max_infected_country = reduce(countries, (max_country, country) => country.infected > max_country.infected ? max_country = country : max_country ,countries[0]).name
  console.log(`Country with more infections: ${max_infected_country}`)

  // Número de total de infectados del array de personas
  num_infected_persons = reduce(persons, (num_infected, person) => person.infected ? ++num_infected : num_infected,0)
  console.log(`Number of infected people: ${num_infected_persons}`)

  // Array con nombre de todas las mascotas
  let pet_names = map(pets, pet => pet.name)
  console.log(`Pet names: ${pet_names}`)

  // Array con las personas infectadas del array de personas
  let infected_persons = map(filter(persons, person => person.infected),person => person.name)
  console.log(`Infected persons: ${infected_persons}`)

  // Array de españoles con perro
  let dogs = map(filter(pets,pet => pet.animal === "perro"), pet => pet.name)
  let spanish_with_dogs = map(filter(persons,person => person.country === "ES" && some(dogs,dog => dog === person.pet)), person => person.name)
  console.log(`Spanish persons with dog: ${spanish_with_dogs}`)

  // Número de personas infectadas del array de personas
  num_infected_persons = reduce(persons, (num_infected, person) => person.infected ? ++num_infected : num_infected,0)
  console.log(`Number of infected people: ${num_infected_persons}`)

  // Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
  //Get combined objects
  let people_and_pets = map(persons,(person) => ({
    name: person.name, age: person.age, country: person.country, infected: person.infected,
    petname: person.pet, petanimal: filter(pets, pet => pet.name === person.pet)[0].animal
  }))
  //Create String for the array
  let people_and_pets_str = '['
  for (const personpet of people_and_pets) {
    let personpetstr = '{'
    for (const key of Object.keys(personpet))
      personpetstr += `${key}:${personpet[key]},`
    //To remove the las comma and close the object
    personpetstr = personpetstr.slice(0, -1) + '},'
    people_and_pets_str += personpetstr
  }
  //To remove the las comma and close the collection
  people_and_pets_str = people_and_pets_str.slice(0, -1) + ']'
  console.log(`Persons and their pets: ${people_and_pets_str}`)


  // A partir de las personas sacar el animal que tienen más personas como mascota

  //IMPLEMENTACIÓN 1
  let animaltypes = reduce(pets,(types, pet) => some(types, type => type === pet.animal) ? types : [...types, pet.animal], [])
  let maxanimaltype = null
  let maxanimaltypenum = 0
  for (const animaltype of animaltypes) {
    let num_persons_with_animaltype = reduce(persons, (num_persons, person) => some(map(filter(pets, pet => pet.animal === animaltype), pet => pet.name), animal => animal === person.pet) ? ++num_persons : num_persons, 0)
    if (num_persons_with_animaltype > maxanimaltypenum){
      maxanimaltypenum = num_persons_with_animaltype
      maxanimaltype = animaltype
    }
  }
  console.log(`Most usual type of pet: ${maxanimaltype}`)

  //IMPLEMENTACIÓN 2
  let animalsandnumber = reduce(map(people_and_pets, person => person.petanimal), ((listwithnumbers, animal) => { listwithnumbers[animal] === undefined ? listwithnumbers[animal] = 1 : listwithnumbers[animal] += 1
        return listwithnumbers;
      }),[ ])
  maxanimaltype = reduce(Object.keys(animalsandnumber), (maxKey, key) => animalsandnumber[key] > animalsandnumber[maxKey] ? key : maxKey)
  console.log(`Most usual type of pet: ${maxanimaltype}`)

  // Número total de patas de las mascotas de las personas
  let persons_pets = map(persons, person => person.pet)
  let pets_and_legs = map(pets, pet => ({name: pet.name, legs: filter(animals, animal => animal.name === pet.animal)[0].legs}))
  let num_of_legs = reduce(persons_pets, (total_legs, pet) => total_legs + filter(pets_and_legs, pet_and_legs => pet_and_legs.name === pet)[0].legs,0)
  console.log(`Total number of people's pet legs: ${num_of_legs}`)

  // Array con las personas que tienen animales de 4 patas
  pets_and_legs = map(pets,pet => ({name: pet.name, legs: filter(animals, animal => animal.name === pet.animal)[0].legs}))
  let persons_and_legs = map(persons, person => ({name: person.name, legs: filter(pets_and_legs, pet => pet.name === person.pet)[0].legs}))
  let persons_with_4leg_pets = map(filter(persons_and_legs, person => person.legs === 4), person => person.name)
  console.log(`Persons with 4 legged pets: ${persons_with_4leg_pets}`)

  // A partir del string 'España' obtener un array de personas no infectadas de ese país
  let notInfectedSpanish = map(filter(persons, person => person.country === "ES" && !person.infected), person => person.name)
  console.log(`Not infected spanish people: ${notInfectedSpanish}`)

  // Array de paises que tienen personas con loros como mascota
  let parrots = map(filter(pets, pet => pet.animal === "loro"), pet => pet.name)
  let countries_with_parrots = map(filter(persons, person => some(parrots, parrot => parrot === person.pet)), person => person.country)
  console.log(`Countries with people with parrots: ${countries_with_parrots}`)

  // Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
  pets_and_legs = map(pets, pet => ({name: pet.name, legs: filter(animals, animal => animal.name === pet.animal)[0].legs}))
  let persons_country_and_legs = map(persons, person => ({name: person.name, country: person.country, legs: filter(pets_and_legs, pet => pet.name === person.pet)[0].legs}))
  let countries_with_8leg_pets = map(filter(persons_country_and_legs, person => person.legs === 8), person => person.country)
  let infected_8leg_countries = reduce(countries_with_8leg_pets, (total_infected, country8legs) => total_infected + filter(countries, country => country.code === country8legs)[0].infected,0)
  console.log(`Number of infected in countries with 8 legged pets: ${infected_8leg_countries}`)

  // A partir de las personas sacar el animal que tienen más personas como mascota
  animaltypes = reduce(pets, (types, pet) => some(types, type => type === pet.animal) ? types : [...types, pet.animal], [])
  maxanimaltype = null
  maxanimaltypenum = 0
  for (const animaltype of animaltypes) {
    let num_persons_with_animaltype = reduce(persons,(num_persons, person) => some(map(filter(pets,pet => pet.animal === animaltype),pet => pet.name), animal => animal === person.pet) ? ++num_persons : num_persons, 0)
    if (num_persons_with_animaltype > maxanimaltypenum){
      maxanimaltypenum = num_persons_with_animaltype
      maxanimaltype = animaltype
    }
  }
  console.log(`Most usual type of pet: ${maxanimaltype}`)
}