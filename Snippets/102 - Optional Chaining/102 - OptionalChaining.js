const object = {
    prop1: {
        name: 'abc',
    }
}

console.log(object.prop2.name);

if(object.prop2){
    // Access object.prop2.name    
} else {
    // Cannot access
}

console.log(object.prop2?.name);