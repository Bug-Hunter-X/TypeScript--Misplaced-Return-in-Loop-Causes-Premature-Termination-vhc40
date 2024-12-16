# TypeScript Bug: Misplaced Return Statement in Loop

This repository demonstrates a subtle bug in TypeScript where a misplaced `return` statement inside a loop leads to unexpected early termination of the function.

## Bug Description

A seemingly simple loop iterating from 1 to n unexpectedly terminates after the first iteration. This is caused by an incorrectly placed `return` statement within the loop body.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` and observe the `printNumbers1` function.
3. Run the TypeScript code (e.g., using `tsc bug.ts && node bug.js`).
4. Notice that only the number 1 is printed, instead of the expected sequence from 1 to 5.

## Solution

The solution involves correctly placing the `return` statement to ensure the loop completes all iterations. Refer to `bugSolution.ts` for a corrected version.

## Lessons Learned

This bug highlights the importance of careful code review and attention to detail when placing control flow statements like `return` within loops.  A misplaced `return` can lead to subtle and hard-to-debug errors.