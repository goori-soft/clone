const clone = require('./index.js');

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


