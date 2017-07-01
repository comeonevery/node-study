


/****./../module/1.js***/


module.exports.title = `1:首先按照加载模块的文件名进行查找；
2：如果没有找到，则会在文件名后加.js，进行查找；
3：如果还没找到，则会在文件名后加上.json，进行查找；
4：如果还没找到，则会在文件名后加上.node,进行查找；
5：如果还没找到，则会报错。
文件名--》.js --》.json --》。nod --》报错e`; 



/****./../module/2.js***/


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



/****./../module/2.txt***/


global.aa = `在模块内定义的变量，作用域只限当前模块；
如其他模块想引用有如下方法：
1:变量作为global的属性，但不建议这样做，会有变量污染问题；
2:使用模块对象module`;




/****./../module/1.js***/


module.exports.title = `1:首先按照加载模块的文件名进行查找；
2：如果没有找到，则会在文件名后加.js，进行查找；
3：如果还没找到，则会在文件名后加上.json，进行查找；
4：如果还没找到，则会在文件名后加上.node,进行查找；
5：如果还没找到，则会报错。
文件名--》.js --》.json --》。nod --》报错e`; 



/****./../module/2.js***/


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



/****./../module/2.txt***/


global.aa = `在模块内定义的变量，作用域只限当前模块；
如其他模块想引用有如下方法：
1:变量作为global的属性，但不建议这样做，会有变量污染问题；
2:使用模块对象module`;




/****./../module/1.js***/


module.exports.title = `1:首先按照加载模块的文件名进行查找；
2：如果没有找到，则会在文件名后加.js，进行查找；
3：如果还没找到，则会在文件名后加上.json，进行查找；
4：如果还没找到，则会在文件名后加上.node,进行查找；
5：如果还没找到，则会报错。
文件名--》.js --》.json --》。nod --》报错e`; 



/****./../module/2.js***/


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



/****./../module/2.txt***/


global.aa = `在模块内定义的变量，作用域只限当前模块；
如其他模块想引用有如下方法：
1:变量作为global的属性，但不建议这样做，会有变量污染问题；
2:使用模块对象module`;




/****./../module/1.js***/


module.exports.title = `1:首先按照加载模块的文件名进行查找；
2：如果没有找到，则会在文件名后加.js，进行查找；
3：如果还没找到，则会在文件名后加上.json，进行查找；
4：如果还没找到，则会在文件名后加上.node,进行查找；
5：如果还没找到，则会报错。
文件名--》.js --》.json --》。nod --》报错e`; 



/****./../module/2.js***/


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



/****./../module/2.txt***/


global.aa = `在模块内定义的变量，作用域只限当前模块；
如其他模块想引用有如下方法：
1:变量作为global的属性，但不建议这样做，会有变量污染问题；
2:使用模块对象module`;

