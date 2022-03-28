"use strict";

const persons = [
  {
    name: "Pedro",
    age: 35,
    country: "ES",
    infected: true,
    pet: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    country: "UK",
    infected: true,
    pet: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    country: "ES",
    infected: false,
    pet: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    country: "DE",
    infected: false,
    pet: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    country: "UK",
    infected: true,
    pet: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    country: "US",
    infected: false,
    pet: "Pence",
  },
];

const pets = [
  {
    name: "Troski",
    animal: "perro",
  },
  {
    name: "Firulais",
    animal: "perro",
  },
  {
    name: "Berritxu",
    animal: "loro",
  },
  {
    name: "Noodle",
    animal: "araña",
  },
  {
    name: "Leon",
    animal: "gato",
  },
  {
    name: "Pence",
    animal: "perro",
  },
];

const animals = [
  {
    name: "perro",
    legs: 4,
  },
  {
    name: "araña",
    legs: 8,
  },
  {
    name: "gato",
    legs: 4,
  },
  {
    name: "loro",
    legs: 2,
  },
  {
    name: "gallina",
    legs: 2,
  },
];

// Población en millones
const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];

/**
 * EJERCICIOS
 */

// Número total de infectados
let num_infected_persons = persons.reduce((num_infected, person) => person.infected ? ++num_infected : num_infected,0)
console.log(`Number of infected people: ${num_infected_persons}`)

// Número total de sanos
let num_healthy_persons = persons.reduce((num_healthy, person) => !person.infected ? ++num_healthy : num_healthy,0)
console.log(`Number of healthy people: ${num_healthy_persons}`)

// Numero total de infectados en los países (del array de países)
let total_infected_population = countries.reduce((num_infected, country) => num_infected += country.infected,0)
console.log(`Total of infected population: ${total_infected_population}`)

// País con más infectados (del array de países)
let max_infected_country = countries.reduce((max_country, country) => country.infected > max_country.infected ? max_country = country : max_country ,countries[0]).name
console.log(`Country with more infections: ${max_infected_country}`)

// Número de total de infectados del array de personas
num_infected_persons = persons.reduce((num_infected, person) => person.infected ? ++num_infected : num_infected,0)
console.log(`Number of infected people: ${num_infected_persons}`)

// Array con nombre de todas las mascotas
let pet_names = pets.map(pet => pet.name)
console.log(`Pet names: ${pet_names}`)

// Array con las personas infectadas del array de personas
let infected_persons = persons.filter(person => person.infected).map(person => person.name)
console.log(`Infected persons: ${infected_persons}`)

// Array de españoles con perro
let dogs = pets.filter(pet => pet.animal === "perro").map(pet => pet.name)
let spanish_with_dogs = persons.filter(person => person.country === "ES" && dogs.some(dog => dog === person.pet)).map(person => person.name)
console.log(`Spanish persons with dog: ${spanish_with_dogs}`)

// Número de personas infectadas del array de personas

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota

// A partir de las personas sacar el animal que tienen más personas como mascota

// Número total de patas de las mascotas de las personas

// Array con las personas que tienen animales de 4 patas

// A partir del string 'España' obtener un array de personas no infectadas de ese país

// Array de paises que tienen personas con loros como mascota

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas

// A partir de las personas sacar el animal que tienen más personas como mascota