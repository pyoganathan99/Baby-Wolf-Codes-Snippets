const people = []

for (let person of people) {
    // blah blah blah
}

for (let character of "hello") {
    console.log(character);
}
// h
// e
// l
// l
// o

const myIterable = {
    [Symbol.iterator]() {
        return {
            count: 0,
            next() {
                if (this.count < 5) {
                    this.count++;
                    return {
                        done: false,
                        value: Math.random()
                    };
                } else {
                    return { done: true };
                }
            }
        }
    }
}

for(let a of myIterable){
    console.log(a);
}