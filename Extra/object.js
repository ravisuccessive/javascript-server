//1st Object.assign()
  const target = {
    a: '34',
    b: '7',
}
console.log(target);



//2nd Object.create()
  const person = {
    isHuman: true,
    printIntroduction: function() {
     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  const me = Object.create(person);
  me.name = 'Matthew'; 
  me.printIntroduction();



//3rd Object.definedProperties()
  const object1 = {};

  Object.defineProperties(object1, {
    property1: {
      value: 42,
      writable: true
    },
    property2: {}
  });
  console.log(object1.property1);



//4th Object.defineProperty()
  const object2 = {};

  Object.defineProperty(object2, 'property1', {
    value: 402,
    writable: false
  });
  object1.property1 = 77;
  console.log(object2.property1);



//5th Object.entries()
  const object3 = {
    a: 'somestring',
    b: 80
  };
   for (const [key, value] of Object.entries(object3)) {
    console.log(`${key}: ${value}`);
  }



//6th Object.Freeze()
  const obj = {
    prop: 42
  };
  Object.freeze(obj);
  obj.prop = 33;
  console.log(obj.prop);



//7th Object.fromEntries() *
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  const object7 = Object.fromEntries(entries);
  console.log(object7);



//8th Object.getOwnPropertyDescriptor()
  const object8 = {
    property8: 15
  };
  const descriptor1 = Object.getOwnPropertyDescriptor(object8, 'property8'); 
  console.log(descriptor1.configurable);
  console.log(descriptor1.value);



//9th Object.getOwnPropertyDescriptors()
  const object9 = {
    property9: 16
  };
  const descriptors1 = Object.getOwnPropertyDescriptors(object9);
  console.log(descriptors1.property9.writable);
  console.log(descriptors1.property9.value);



//10th Object.getOwnPropertyNames()
  const object10 = {
    a: 1,
    b: 2,
    c: 3
  };
  console.log(Object.getOwnPropertyNames(object10));
    
  