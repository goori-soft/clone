# Clone
A simple and complete clone method.

It will return a new object with all the properties and methods of the original object.

This clone method will act recursively also cloning the possible references that an object may have.

## Installation
To install this module using npm.
```
npm install @goori-soft/clone
```

## How to use it
This is a simple example.
```javascript
const clone = require('@goori-soft/clone');

const parent = {
    id: 0,
    name: 'Peter' 
};

const myObj = {
    id: 1,
    name: 'Maria',
    age: 45,
    parent,
    changeParentsName: function(name){
        this.parent.name = name;
    }
}

parent.child = myObj;

const myClone = clone(myObj);
myClone.changeParentsName('Olaf');

console.log('Original:', myObj);
console.log('Clone:', myClone);
```

## Note
If you intend to clone an object keeping the original references, it might be more interesting to use a native javascript destructor.

In this case, this module is entirely unnecessary.
```javascript
const parent = {
    id: 0,
    name: 'Peter' 
};

const myObj = {
    id: 1,
    name: 'Maria',
    age: 45,
    parent,
    changeParentsName: function(name){
        this.parent.name = name;
    }
}

parent.child = myObj;

const myClone = {...myObj};

console.log('Original:', myObj);
console.log('Clone:', myClone);
```