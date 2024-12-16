function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work fine

function printNumbers1(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    return;//This will stop after the first iteration
  }
}

printNumbers1(5); //This will print only 1