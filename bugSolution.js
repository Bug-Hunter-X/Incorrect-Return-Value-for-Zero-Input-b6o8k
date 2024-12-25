function foo(a, b) {
  if (a === 0 || b === 0) {
    return 1; //Corrected: returns 1 when either a or b is 0
  } else {
    return a * b; 
  }
}