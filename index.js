// cosmic-essence-utils.js

const randomatic = require('randomatic');

// Function to generate a random cosmic code
function generateCosmicCode(length) {
  return randomatic('*', length);
}

// Function to check if a string is a cosmic mantra
function isCosmicMantra(str) {
  return /[A-Z]{3}-[0-9]{3}/.test(str);
}

// Function to calculate the cosmic energy level
function calculateCosmicEnergyLevel() {
  return Math.floor(Math.random() * 100) + 1;
}

module.exports = {
  generateCosmicCode,
  isCosmicMantra,
  calculateCosmicEnergyLevel
};
