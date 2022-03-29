"use strict";

/**
 * IMPLEMENTACIONES PROPIAS DE FUNCTIONAL PROGRAMMING FUNCTIONS
 */

export function map(collection, map_function){
  let new_array = []
  for (const element of collection)
    new_array = [...new_array, map_function(element)]
  return new_array;
}

export function filter(collection, filter_condition){
  let new_array = []
  for (const element of collection)
    if (filter_condition(element))
      new_array = [...new_array, element]
  return new_array;
}

export function reduce(collection, reduce_function, initial_value){
  let value = initial_value
  for (const element of collection)
    value = reduce_function(value, element)
  return value
}

export function every(collection, every_condition){
  for (const element of collection)
    if (!every_condition(element))
      return false
  return true
}

export function some(collection, some_condition){
  for (const element of collection)
    if (some_condition(element))
      return true
  return false
}
