/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
  if (x_center >= x1 && x_center <= x2) {
    if (y_center - y2 > radius || y1 - y_center > radius) {
      return false;
    } else {
      return true;
    }
  }
  if (y_center >= y1 && y_center <= y2) {
    if (x1 - x_center > radius || x_center - x2 > radius) {
      return false;
    } else {
      return true;
    }
  }
  const radiusPow = Math.pow(radius, 2);
  if (Math.pow(x1 - x_center, 2) + Math.pow(y1 - y_center, 2) <= radiusPow) {
    return true;
  }
  if (Math.pow(x1 - x_center, 2) + Math.pow(y_center - y2, 2) <= radiusPow) {
    return true;
  }
  if (Math.pow(x_center - x2, 2) + Math.pow(y_center - y2, 2) <= radiusPow) {
    return true;
  }
  if (Math.pow(x_center - x2, 2) + Math.pow(y1 - y_center, 2) <= radiusPow) {
    return true;
  }
  return false;
};