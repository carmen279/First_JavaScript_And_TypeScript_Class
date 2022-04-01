"use strict";
import { executeExercisesMyImplementation } from './exercisesMyImplementation.ts';
import { executeExercisesDefaultImplementation } from './exercisesDefaultImplementation.ts';
import { playInvestigation } from './sospechosos.ts';

export const persons = [
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

export const pets = [
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

export const animals = [
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
export const countries = [
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

/*
console.log("***EXERCISES WITH DEFAULT IMPLEMENTATION***")
executeExercisesDefaultImplementation()
console.log("***EXERCISES WITH MY OWN IMPLEMENTATION***")
executeExercisesMyImplementation()
 */

//Ejercicio sospechosos
playInvestigation()
