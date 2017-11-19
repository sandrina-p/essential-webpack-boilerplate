// -------------------------------------------------
// You can just delete all of this and start coding!
// -------------------------------------------------

export function logWorld(name) {
  console.log(`Wello ${name}!`);
  return `Wello ${name}!`;
}

export function logSquare(value) {
  if (typeof value === 'undefined') {
    console.warn('No number found');
    return false;
  }
  if (typeof value !== 'number') {
    console.warn(`${value} is a ${typeof value}, not a number`);
    return false;
  }

  console.log(`Square of ${value}:`, value * value * value);
  return value * value * value;
}
