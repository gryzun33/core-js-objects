/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns shallow copy of an object.
 *
 * @param {Object} obj - an object to copy
 * @return {Object}
 *
 * @example
 *    shallowCopy({a: 2, b: 5}) => {a: 2, b: 5}
 *    shallowCopy({a: 2, b: { a: [1, 2, 3]}}) => {a: 2, b: { a: [1, 2, 3]}}
 *    shallowCopy({}) => {}
 */
function shallowCopy(obj) {
  const newObj = {};
  const copy = Object.assign(newObj, obj);
  return copy;
  // throw new Error('Not implemented');
}

/**
 * Merges array of objects into a single object. If there are overlapping keys, the values
 * should be summed.
 *
 * @param {Object[]} objects - The array of objects to merge
 * @return {Object} - The merged object
 *
 * @example
 *    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
 *    mergeObjects([]) => {}
 */
function mergeObjects(objects) {
  const arr1 = objects[0] ? Object.entries(objects[0]) : [];
  const arr2 = objects[1] ? Object.entries(objects[1]) : [];
  const arr = [...arr1, ...arr2];
  const obj = {};
  arr.forEach(([key, value]) => {
    if (obj[key]) {
      obj[key] += value;
    } else {
      obj[key] = value;
    }
  });
  return obj;
  // throw new Error('Not implemented');
}

/**
 * Removes a properties from an object.
 *
 * @param {Object} obj - The object from which to remove the property
 * @param {Array} keys - The keys of the properties to remove
 * @return {Object} - The object with the specified key removed
 *
 * @example
 *    removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) => {a: 1}
 *    removeProperties({a: 1, b: 2, c: 3}, ['d', 'e']) => {a: 1, b: 2, c: 3}
 *    removeProperties({name: 'John', age: 30, city: 'New York'}, 'age') => {name: 'John', city: 'New York'}
 *
 */
function removeProperties(obj, keys) {
  const obj1 = obj;
  keys.forEach((key) => {
    if (obj1[key]) {
      delete obj1[key];
    }
  });
  return obj1;
  // throw new Error('Not implemented');
}

/**
 * Compares two source objects. Returns true if the objects are equal and false otherwise.
 * There are no nested objects.
 *
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @return {boolean} - True if the objects are equal, false otherwise
 *
 * @example
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 2}) => true
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 3}) => false
 */
function compareObjects(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  }
  return false;
  // throw new Error('Not implemented');
}

/**
 * Checks if the source object is empty.
 * Returns true if the object contains no enumerable own properties, false otherwise.
 *
 * @param {Object} obj - The object to check
 * @return {boolean} - True if the object is empty, false otherwise
 *
 * @example
 *    isEmptyObject({}) => true
 *    isEmptyObject({a: 1}) => false
 */
function isEmptyObject(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
  // throw new Error('Not implemented');
}

/**
 * Makes the source object immutable by preventing any changes to its properties.
 *
 * @param {Object} obj - The source object to make immutable
 * @return {Object} - The immutable version of the object
 *
 * @example
 *    const obj = {a: 1, b: 2};
 *    const immutableObj = makeImmutable(obj);
 *    immutableObj.a = 5;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    delete immutableObj.a;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    immutableObj.newProp = 'new';
 *    console.log(immutableObj) => {a: 1, b: 2}
 */
function makeImmutable(obj) {
  // const obj1 = obj;
  // const keys = Object.keys(obj1);
  // keys.forEach((key) => {
  //   Object.defineProperty(obj1, key, {
  //     writable: false,
  //   });
  // });
  // return obj1;
  Object.freeze(obj);
  return obj;
  // throw new Error('Not implemented');
}

/**
 * Returns a word from letters whose positions are provided as an object.
 *
 * @param {Object} lettersObject - An object where keys are letters and values are arrays of positions
 * @return {string} - The constructed word
 *
 * @example
 *    makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) => 'aabbcc'
 *    makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) => 'HelloWorld'
 */
function makeWord(lettersObject) {
  const arr = Object.entries(lettersObject);
  const obj = {};
  arr.forEach(([key, valueArr]) => {
    valueArr.forEach((el) => {
      obj[el] = key;
    });
  });

  const str = Object.entries(obj)
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[1])
    .join('');
  return str;
  // throw new Error('Not implemented');
}

/**
 * There is a queue for tickets to a popular movie.
 * The ticket seller sells one ticket at a time strictly in order and give the change.
 * The ticket costs 25. Customers pay with bills of 25, 50, or 100.
 * Initially the seller has no money for change.
 * Return true if the seller can sell tickets, false otherwise
 *
 * @param {number[]} queue - The array representing the bills each customer pays with
 * @return {boolean} - True if the seller can sell tickets to everyone, false otherwise
 *
 * @example
 *    sellTickets([25, 25, 50]) => true
 *    sellTickets([25, 100]) => false (The seller does not have enough money to give change.)
 */
function sellTickets(queue) {
  const obj = {};

  for (let i = 0; i < queue.length; i += 1) {
    if (queue[i] === 25) {
      obj[25] = obj[25] ? obj[25] + 1 : 1;
    } else if (queue[i] === 50) {
      if (obj[25]) {
        obj[25] = -1;
        obj[50] = obj[50] ? obj[50] + 1 : 1;
      } else {
        return false;
      }
    } else if (queue[i] === 100) {
      if (obj[50] && obj[25]) {
        obj[50] = -1;
        obj[25] = -1;
      } else if (obj[25] >= 3) {
        obj[25] = -3;
      } else {
        return false;
      }
    }
  }
  return true;
  // throw new Error('Not implemented');
}

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  const rectangle = {
    width,
    height,
    getArea() {
      return this.width * this.height;
    },
  };
  return rectangle;
  // throw new Error('Not implemented');
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  Object.setPrototypeOf(obj, proto);
  return obj;

  // throw new Error('Not implemented');
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  // throw new Error('Not implemented');
  return arr.sort((a, b) => {
    if (a.country > b.country) return 1;
    if (a.country < b.country) return -1;
    return a.city > b.city ? 1 : -1;
  });
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  // throw new Error('Not implemented');
  // const map = new Map();
  const obj = {};
  const keys = array.map(keySelector);
  const values = array.map(valueSelector);
  keys.forEach((key, ind) => {
    if (!obj[key]) {
      obj[key] = [values[ind]];
    } else {
      obj[key].push(values[ind]);
    }
  });
  const result = Object.entries(obj);
  return result;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */
class SelectorBuilder {
  constructor() {
    this.selector = '';
    this.lastSelector = '';
    this.order = [
      '',
      'element',
      'id',
      'class',
      'attr',
      'pseudoClass',
      'pseudoElement',
    ];
  }

  element(value) {
    this.checkOrder('element');
    this.lastSelector = 'element';
    this.selector += value;
    return this;
    // throw new Error('Not implemented');
  }

  id(value) {
    this.checkOrder('id');
    this.lastSelector = 'id';
    this.selector += `#${value}`;
    return this;
    // throw new Error('Not implemented');
  }

  class(value) {
    this.checkOrder('class');
    this.lastSelector = 'class';
    this.selector += `.${value}`;
    return this;
    // throw new Error('Not implemented');
  }

  attr(value) {
    this.checkOrder('attr');
    this.lastSelector = 'attr';
    this.selector += `[${value}]`;
    return this;
    // throw new Error('Not implemented');
  }

  pseudoClass(value) {
    this.checkOrder('pseudoClass');
    this.lastSelector = 'pseudoClass';
    this.selector += `:${value}`;
    return this;
    // throw new Error('Not implemented');
  }

  pseudoElement(value) {
    this.checkOrder('pseudoElement');
    this.lastSelector = 'pseudoElement';
    this.selector += `::${value}`;
    return this;
    // throw new Error('Not implemented');
  }

  combine(selector1, combinator, selector2) {
    this.selector = `${selector1.selector} ${combinator} ${selector2.selector}`;
    return this;

    // throw new Error('Not implemented');
  }

  stringify() {
    // console.log('lastselector=', this.lastSelector);
    // console.log('selector', this.selector);
    const result = this.selector;
    this.selector = '';
    this.lastSelector = '';
    return result;
  }

  checkOrder(sel) {
    if (this.order.indexOf(sel) < this.order.indexOf(this.lastSelector)) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }
    if (
      this.order.indexOf(sel) === this.order.indexOf(this.lastSelector) &&
      [1, 2, 6].some((el) => el === this.order.indexOf(sel))
    ) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new SelectorBuilder().element(value);
  },

  id(value) {
    return new SelectorBuilder().id(value);
    // throw new Error('Not implemented');
  },

  class(value) {
    return new SelectorBuilder().class(value);
    // throw new Error('Not implemented');
  },

  attr(value) {
    return new SelectorBuilder().attr(value);
    // throw new Error('Not implemented');
  },

  pseudoClass(value) {
    return new SelectorBuilder().pseudoClass(value);
    // throw new Error('Not implemented');
  },

  pseudoElement(value) {
    return new SelectorBuilder().pseudoElement(value);
    // throw new Error('Not implemented');
  },

  combine(selector1, combinator, selector2) {
    const obj = new SelectorBuilder();
    obj.selector = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return obj;

    // throw new Error('Not implemented');
  },
};

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};
