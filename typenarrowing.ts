function acceptStringAndNumber(param: string | number) {
  if (typeof param === "string") {
    return param.toUpperCase() + "DANNYPY";
  }
  // we are sure that param is now a number
  return param.toFixed(3);
}

console.log(acceptStringAndNumber("I am "));
