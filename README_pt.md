# Clone
Um método simples e completo para clonar objetos.

Este método deve retornar um objeto com todas as propriedades e métodos do objeto original.
A função funciona de forma recursiva clonando também possíveis referências que o objeto possa ter.

## Instalação
Para instalar utilizando o npm
```
npm install @goori-soft/clone
```

## Como usar
Veja este exemplo simples.
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

## Nota
Se você pretende clonar um objeto mantendo as referencias originais talvez seja mais interessante utilizar um destrutor nativo do javascript.

Neste caso este módulo é inteiramente dispensável.
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
