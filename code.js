/* "use strict" - Директива выглядит как строка: "use strict" или 'use strict'. 
Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме. */
let str = 'abc';
str[0] = 'd';

console.log(str)

let arr = [1, 2, 3, 4, 5];
arr[10] = 6;

console.log(arr.length)