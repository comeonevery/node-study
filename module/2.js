var title = require('./1.js');
require('./2');
var a = 10;
console.log(a);
console.log(title);
console.log(global.aa);
// console.log(module);
console.log(__filename === module.filename);
var q = `在模块的作用域内，还有一个内置的模块对象，exports,其实他就是module.exports
注意：在使用过程中不要让module.exports/exports直接等于某个值，因为赋值时会断开两者的引用关系；
一般处理的方法为：module.exports.属性/exports.属性等于某个值(添加属性)。来保持指向正确`;
console.log(q);
module.exports.c = 'qqqqqqqq';
exports.s = 'ggggg'
console.log(module.exports === exports);  