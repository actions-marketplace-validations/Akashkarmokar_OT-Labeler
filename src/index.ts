import { getInput } from "@actions/core";

const nameInput = getInput('name')
console.log(`Hello ${nameInput}`)