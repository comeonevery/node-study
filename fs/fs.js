var fs = require('fs');
// fs.exists('aa',function(msg){
//     console.log(arguments);
//     console.log(msg);
//     if(msg){
//         console.log(1);
//         deletefile();
//     }else{
//         console.log(2);
        // fs.mkdir('aa',function(errs){
        //     console.log(arguments);
        //     if(!errs){
        //         deletefile();
        //     }
        // });
//     }
// });

// function deletefile(){
//     setTimeout(function(){
//             fs.rmdir('aa',function(err){
//             console.log(arguments);
//             if(!err){
//                 console.log('删除成功！');
//             }
//         })
//     },3000);
// }

// fs.readdir('../API',function(err,file){
//     console.log(err);
//     console.log(file);
//     file.forEach(function(val,index){
//         fs.stat(val,function(err,info){
//             // console.log(index,'-->',info);
//             if(info.mode == 16822 ){
//                 console.log('[文件夹] ',val);
//             }else if(info.mode == 33206 ){
//                 console.log('[文件] ',val);
//             }else{
//                 console.log('[其它] ',val);
//             }
//         });
//     });
// });
// var data = '',data1 = '',data2 = '';
// fs.readFile('a.txt','utf-8',function(err,data){
//     // console.log(arguments);
//     if(!err){
//         data1 = data ;
//         fs.readFile('timg.jpg','base64',function(err,data){
//             if(!err){
//                 data2 = data ;
//                 fs.exists('content.jpg',function(flag){
//                     // console.log(arguments);
//                     console.log(111);
//                     if(flag){
//                         console.log(22);
//                         fs.open('content.jpg',data1+data2,'base64',function(err,pid){
//                             if(!err){
//                                 fs.writeFile(pid,data2,0,'utf-8',function(){
//                                     // console.log(arguments);
//                                 });
//                                 fs.rename('content.jpg','a1.jpg');
//                             }
//                         })
//                     }else{
//                         console.log(33);
//                         // fs.mkdir('content.jpg',function(){
//                             // console.log(arguments);
//                             fs.writeFile('content.jpg',data2,'base64',function(){
//                                 // console.log(arguments);
//                             });
//                         // })
                       
//                     }
//                 })
//             }
//         });
//     }
// });

fs.watch('a.txt',function(ev,fn){
    console.log(arguments);
    if(fn){
        console.log(fn + ':发生了改变！');
    }else{
         console.log(fn + ':没有发生改变！');
    }
});