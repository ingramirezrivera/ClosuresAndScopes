const helloWorld = () => {
    const hello = 'Hello world'
    console.log(hello);
};

helloWorld();

console.log(hello);

var scope = 'im global';

const functionScope = () => {
    var scope = 'i am just a local';
    const func = () => {
        return scope;
        
    }
    console.log(func());

};

functionScope();