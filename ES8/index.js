const data = {
    frontend: 'Daniel',
    backend: 'Saul',
    desingUX: 'Ander',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);



const data1 = {
    frontend: 'Daniel',
    backend: 'Saul',
    desingUX: 'Ander',
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);



const string = 'hello';
console.log(string.padStart(6, 'hi'));
console.log(string.padEnd(12, ' -----'));




const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


const anotherfuction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherfuction();