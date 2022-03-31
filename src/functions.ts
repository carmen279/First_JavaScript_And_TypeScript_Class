"use strict";

/**
 * IMPLEMENTACIONES PROPIAS DE FUNCTIONAL PROGRAMMING FUNCTIONS
 */

export function map<A,B>(collection:A[], map_function:(arg: A) => B) :B[] {
  let new_array = []
  for (const element of collection)
    new_array = [...new_array, map_function(element)]
  return new_array;
}

export function filter<A>(collection:A[], filter_condition:(arg: A) => boolean) :A[] {
  let new_array = []
  for (const element of collection)
    if (filter_condition(element))
      new_array = [...new_array, element]
  return new_array;
}

export function reduce <A,B> (collection:A[], reduce_function:(prev_value: B, arg:A) => B, initial_value?:B) :B {

  let value = initial_value

  if (initial_value === undefined)
    value = initial_value

  for (const element of collection)
    value = reduce_function(value, element)

  return value
}

export function every<A>(collection:A[], every_condition:(arg: A) => boolean):boolean{
  for (const element of collection)
    if (!every_condition(element))
      return false
  return true
}

export function some<A>(collection:A[], some_condition:(arg: A) => boolean):boolean{
  for (const element of collection)
    if (some_condition(element))
      return true
  return false
}
