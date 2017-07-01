var filenames = `__filename:返回当前模块解析后的绝对路径（既不是golbal的不是全局的只是模块作用域下的）`;
var dirnames = `__dirname返回当前模块文件所在目录解析后的绝对路径（既不是golbal的不是全局的只是模块作用域下的）是文件夹`;
// console.log(filenames,dirnames);
// console.log(module.filename);
// console.log(module.filename === __filename);
// console.log(__filename);
// console.log(module.paths);
// console.log(__dirname);
/**
 * process对象：全局对象(global底下的对象)
 * **/
// console.log('process.argv:',process.argv);
// console.log('process.env:',process.env);
// console.log('process.pid:',process.pid);
// console.log('process.title:',process.title);
// console.log(global.process);

/**
 * process.exit()//退出当前程序
*/
// process.stdout.write('hello\n');
function log(data){
    process.stdout.write('\n'+data+'\n');
}
// log('郭胜华');
// process.stdin.resume();
process.stdin.on('data',function(ddd){
    console.log('用户输入了：'+ddd)
})

var an = new Buffer('guso','base64');
console.log(an);