//Task  ->  write HOF currying ...


function curry (fn) {
    return function cb(...args){
        if(fn.length <= args.length) return fn(...args);
        return function (...newArgs){
            return cb(...args, ...newArgs);
        }
    }
}

const sum = (a,b,c) => a + b + c;

const fn = curry(sum);
console.log(fn(1,2,3)); //6
console.log(fn(1)(2,3)); //6
console.log(fn(1,2)(3)); //6