var Http = require('http');
var Url = require('url');
var Fs = require('fs');
var Qs = require('querystring');

var server = Http.createServer();
var htmlDir = __filename + '/../html/';

server.on('request',(req,res) => {
    console.log('req.method:',req.parser);
    console.log('req.body:',req.body);
    var url = Url.parse(req.url);
    console.log(url);
    console.log('querystring -- url');
    console.log(Qs.parse(url.query,'&|?'));

    //post 获取数据(post数据会先存在缓存区buffer中，通过data事件获取，end获取完后使用)
    // req.on('data',datas => console.log(dataq += datas);
    // req.on('end',datas => console.log(1111111111,dataq.toString()));
    // req.on('end',datas => console.log(1111111111,Qs.parse(dataq).toString()));
    //get 获取数据 在Url.parse(req.url)中
    // var url = Url.parse(req.url);

    switch (url.pathname){
        case '/':
            //主页
            sendData(htmlDir +　'index.html',req,res)
            break ;
        case '/login':
            sendData(htmlDir +　'login.html',req,res)
            break ;
        default :
            sendData(htmlDir +　'error.html',req,res)
            break ;
    }
});

//监听出错
server.on('error',function(err){
    console.log('server - err:',err);
});

server.listen(8080);

function sendData(file,req,res){
    Fs.readFile(file,(err,data) => {
        if(err){
            res.writeHead('404',{'content-type':'text/html;charset=utf-8'});
            res.end('<h1>这404错误页</h1>');
        }else{
            // console.log(data.toString());
            res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
            res.end(data);
        }
    });
}