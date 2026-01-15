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
    let itemExists;
    if (typeof item !== "object") {
      itemExists = this.uniqueKeys[item] ? true : false;
    } else if (Array.isArray(item)) {
      itemExists = false;

      this.uniqueArray.find((arr) => {
        if (!Array.isArray(arr)) return false;

        if (arr.length === item.length && item.every((e, idx) => e === arr[idx])) {
          itemExists = true;
          return true;
        }

        return false;
      });
    } else {
      if (item) {
        //check to see if object and not undefined or null
        {
          for (let obj of this.uniqueArray) {
            if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
              let existingKeys = Object.keys(obj);
              let keysToCheck = Object.keys(item);
              for (let key of existingKeys) {
                if (obj[key] !== item[key]) {
                  itemExists = false;
                  break;
                }
                itemExists = true;
                break;
              }
            }
          }
        }
      }
    }
    console.log(itemExists);
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
uniqueStuff.exists("toy"); //returns true
uniqueStuff.exists("ball"); //returns true
uniqueStuff.exists("computer"); //returns false
console.log(uniqueStuff.get(0));
console.log(uniqueStuff.get(1));
console.log(uniqueStuff.get(4));
uniqueStuff.add([1, 2, 3]);
uniqueStuff.add({ a: 1 });
uniqueStuff.showAll();
uniqueStuff.exists([1, 2, 3]);
uniqueStuff.exists([1, 2, 3, 4]);
uniqueStuff.exists({ a: 1 });
uniqueStuff.exists({ a: 2 });
