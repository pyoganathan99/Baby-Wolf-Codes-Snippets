const filesystem = require('fs');

async function doThings() {
    const oneFile = await filesystem.readFile('myFile.txt');
    // do some stuff
    const anotherFile = await filesystem.readFile('another.txt');
    // more stuff
}

async function myAsyncFunction() {
    await longRunningTask();
    return 'Task completed!';
}

myAsyncFunction().then((value) => {
    console.log(value);
    // Task completed!
});

async function myAsyncFunction() {
    try {
        await longRunningTask();
    } catch (err) {
        // Handle error
    }
}

async function myAsyncFunction() {
    await longRunningTask().catch(errorHandling);
}