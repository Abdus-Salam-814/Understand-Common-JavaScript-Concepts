// 1. variable that is not  initialized will get undefined

let first ;
// console.log(first);


// 2. function with no return

function second(a, b){
    const total = a + b;
    
}

const result = second();
// console.log(result);

// 3. parameter that is not passed will be undefined

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(2, 5);




// 4. if return has nothing on the right side willreturn undefined

function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}


// const total = noNegative(2, 5);
// console.log(total)
// const total2 = noNegative(2, -5);
// console.log(total2)


// 5. property that doesnt Exists on an object will give you undefined

const fifth = {id: 2, name: 'any hom', age: 40};
// console.log(fifth.age, fifth.salary);



// 6. accessing Array elements outside of the index range 
// 7. deleting an element inside an array

const sixth = [4, 89, 87, 56, 54];
delete sixth[1];

// sixth[1] = 87;
// console.log(sixth[1], sixth[999], sixth)

// 8. set a value directly to undefined
const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null}

// console.log(typeof undefined);
// console.log(typeof null);

console.log(data[1], data[0]);
