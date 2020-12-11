/**
 * @param {string} senate
 * @return {string}
 */

var predictPartyVictory = function(senate) {
  let RQueue = [],
    DQueue = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "D") {
      DQueue.push(i);
    } else {
      RQueue.push(i);
    }
  }
  while (RQueue.length > 0 && DQueue.length > 0) {
    const currentR = RQueue.shift(),
      currentD = DQueue.shift();
    if (currentR < currentD) {
      RQueue.push(currentR + senate.length);
    } else {
      DQueue.push(currentD + senate.length);
    }
  }
  return RQueue.length === 0 ? "Dire" : "Radiant";
};