var fs = require('fs');
var data = '---------分享到 VIP 视频资料库，供大家下载学习。';
var file = '2.txt';
//异步模式
// fs.exists(file,function(msg){
//     console.log(arguments)
// })

//同步模式
// if(!fs.existsSync(file)){

// }
//文件存在则写入，没有则创建并写入（参数：文件名，写入的数据，编码可选，回调）
// fs.writeFile(file,data,'utf-8',function(){
//     console.log(arguments);
// });

//追加内容 --有则追加，没有也可以创建并追加（参数：文件名，写入的数据，编码可选，回调）
// fs.appendFile(file,data,'utf-8',function(){
//     console.log(arguments);
// });

// fs.open('a.txt','r+',function(err,pid){
//     if(!err){
//         fs.write(pid,data,0,'utf-8',function(){
//             console.log(arguments);
//         });
//         // var bf = new Buffer(data);
//         // fs.write(pid,bf,0,520,6,function(){
//         //     console.log(arguments);
//         // });
//     }
// })

// fs.readFile('timg.jpg','base64',function(msg,data){
//     console.log(msg);
//     console.log(data);
//     if(!msg){
//         fs.writeFile('copya.jpg',data,'base64',function(msgs,datas){
//             if(!msgs){
//                 console.log('拷贝文件成功！');
//                 setTimeout(function() {
//                     // fs.unlink('copya.jpg',function(){
//                     //     console.log(arguments);
//                     // })
//                     fs.rename('copya.jpg', 'aaa.jpg', function(){
//                         console.log(arguments);
//                     })
//                 }, 3000);
//             }
//         })
//     }
// });

fs.stat('aaa.jpg',function(){
    console.log(arguments);
})
