/**
 * 1.http.createServer(cb)
 * 2.server.listen(port,[hostname],[backlong],[cb]) backlong 等待连接的最大长度
 * 
*/

var http = require('http');
var url = require('url');
// var server = http.createServer(function(req,res){
//     console.log(req.query);
//     // console.log(arguments);
//     console.log('客户端有请求了！');
// });
var server = http.createServer();

server.listen(8080);
//监听成功
server.on('listening',function(){
    // console.log(arguments);
    console.log('listening.....');
});
// //监听成功
server.on('request',function(req,res){
    var urlstr = url.parse(req.url);
    if(urlstr.pathname != '/favicon.ico'){
        console.log(urlstr);
        console.log('req.query:',urlstr.query);
        // res.writeHead(200,'ok',{
        //     // 'content-type':'text/plain;charset=utf-8'
        //     'content-type':'text/html;charset=utf-8'
        // });
        switch (urlstr.pathname){
            case '/':
                //主页
                res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
                res.end('<h1>这是首页</h1>');
                break ;
            case '/login':
                res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
                res.end('<h1>这是登录页</h1>');
                break ;
            default :
                res.writeHead('404',{'content-type':'text/html;charset=utf-8'});
                res.end('<h1>这404错误页</h1>');
        }
        // res.write('hello！');
        // res.write('rtyrtyre客户端有请求了！');
        // res.end();
        // console.log('客户端有请求了！');
    }else{
        res.end();
    }
});
//监听出错
server.on('error',function(err){
    console.log('server - err:',err);
});

console.log(server.address());