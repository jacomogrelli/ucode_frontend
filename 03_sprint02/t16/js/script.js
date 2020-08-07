"use strict"

function firstElements(arr, n) {
  if (Array.isArray(arr))
    return arr.slice(0, n + 1);
  return undefined;
}
