let str = 'I love my India'
// let reverse_string = str.split(' ').reverse().join(' ');
// console.log(reverse_string);
let regex =/\s/;
let reverse_string=str.split(regex).reverse().join(' ');
console.log(reverse_string);