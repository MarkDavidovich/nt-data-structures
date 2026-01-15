class UniqueArray {
  constructor() {
    this.uniqueArray = [];
    this.uniqueLength = 0;
    this.uniqueKeys = {};
  }

  showAll() {
    console.log(this.uniqueArray);
  }

  add(item) {
    if (!this.uniqueArray.find((i) => i === item)) {
      this.uniqueArray[this.uniqueLength] = item;
      this.uniqueLength++;
      this.uniqueKeys[item] = item;
    }
  }

  exists(item) {
    for (let element of this.uniqueArray) {
      if (element === item) return true;

      if (Array.isArray(element) && Array.isArray(item)) {
        if (this.checkArray(element, item)) {
          return true;
        }
      }

      if (typeof element === "object" && typeof item === "object" && element !== null && item !== null && !Array.isArray(element) && !Array.isArray(item)) {
        if (this.checkObject(element, item)) {
          return true;
        }
      }
    }
    return false;
  }

  checkArray(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
      return true;
    }
  }

  checkObject(a, b) {
    if (a === null || b === null) return false;

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }

  get(index) {
    return this.uniqueArray[index] || -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("ball");
uniqueStuff.showAll();
console.log(uniqueStuff.exists("toy")); //returns true
console.log(uniqueStuff.exists("ball")); //returns true
console.log(uniqueStuff.exists("computer")); //returns false
console.log(uniqueStuff.get(0));
console.log(uniqueStuff.get(1));
console.log(uniqueStuff.get(4));
uniqueStuff.add([1, 2, 3]);
uniqueStuff.add({ a: 1 });
uniqueStuff.showAll();
console.log(uniqueStuff.exists([1, 2, 3]));
console.log(uniqueStuff.exists([1, 2, 3, 4]));
console.log(uniqueStuff.exists({ a: 1 }));
console.log(uniqueStuff.exists({ a: 2 }));
