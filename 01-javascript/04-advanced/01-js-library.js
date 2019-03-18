const _ = {
        
    map: function(array, callback) {
        //code here;
        for(let i=0; i < array.length; i++){
            array[i] = callback(array[i]);
        }
        return array;
    },
    reduce: function(array, callback, memo = 0) { 
        // code here;
        for(let i = 0; i < array.length; i++){
            memo = callback(array[i], memo)
        }
        return memo;
    },
    // reduce: function(array, callback, memo){
    //     let el = 0;
    //     if (!memo){
    //       memo = array[0];
    //       el = 1;
    //     }
    //     for (let i = el; i < array.length; i++) {
    //       memo = callback(array[i], memo);
    //     }
    //     return memo;
  
    // },
    find: function(array, callback) {   
        // code here;
        for(let i = 0; i < array.length; i++){
            if(callback(array[i])){
                return array[i];
            }
        }
    },
    filter: function(array, callback) { 
        // code here;
        let new_array = [];
        for(let i = 0; i < array.length; i++){
            if (callback(array[i])){
                new_array.push(array[i]);
            }
        }
        return new_array;
    },
    reject: function(array, callback) { 
        // code here;
        let new_array = [];
        for(let i = 0; i < array.length; i++){
            if (callback(array[i])){
                new_array.push(array[i]);
            }
        }
        return new_array;
    },   
}      
// // you just created a library with 5 methods!
// var s = _.map([1, 2, 3], function(num){ return num * 3; });
// console.log(s);
// // => [3, 6, 9]

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log(sum);
// // => 6

// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(even);
// // => 2

// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].

// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 != 0; });
// console.log(odds);
// // => [1, 3, 5]


const array = [3, 4, 5];
_.map(array, function callback(x) { return x * 5; });
console.log(array);
console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
console.log(_.find(array, function callback(x) { return x === 15; }));
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
console.log(_.filter(array, function(x) { return x > 20; }));
