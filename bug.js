function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect: should return 1 for this case 
  } else {
    return a * b; 
  }
}