let str= "INDIA".split('');
// let regex =/INDIA/;
// console.log(str.replace(regex,"INDONESIA"));
let replace= 'INDONESIA'.split('');
str.splice(0,str.length,...replace);
console.log(str.join(''));