var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello';
let hello = 'Hello';
const helloWorld = 'Hello World!';
console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    global = 'im in global';
}