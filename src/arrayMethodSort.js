'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);
      const minLength = Math.min(strA.length, strB.length);

      for (let i = 0; i < minLength; i++) {
        const diff = strA.charCodeAt(i) - strB.charCodeAt(i);

        if (diff !== 0) {
          return diff;
        }
      }

      return strA.length - strB.length;
    };

    const d = compareFunction || defaultCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (d(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
