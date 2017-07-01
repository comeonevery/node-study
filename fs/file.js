/**
 * fs.open(path,flags,[mode],callback)异步
 * 路径，方式（读/写），模式（设置文件：读/写/执行 4/2/1）,回调(err:失败的内容，fd:被打开文件的标示)
 * var fd = fs.openSync(path,'r/w')
 * 
 * 读
 * fs.read(fd,buffer,offset,length,position,callback)
 * fd:标号
 * buffer:接受数据的buffer对象
 * offset:写入buffer的偏移位置
 * length：写入buffer的长度
 * position：要读取文件的起始位置
 * 
 * 写
 * fs.write(fd,buffer,offset,length,position,callback)
 * fd:标号
 * buffer:接受数据的buffer对象
 * offset:写入buffer的偏移位置
 * length：写入buffer的长度
 * position：要读取文件的起始位置
*/
var fs = require('fs');
fs.open('./a.txt','r+',function(err,fd){
    console.log(err);
    console.log(fd);
    if(err){
        console.log(err);
        console.log('文件打开失败');
    }else{
        // console.log(fd);
        // console.log('文件打开成功,开始读文件');
        // var bf = new Buffer(30);
        // console.log(bf);
        // fs.read(fd,bf,0,10,0,function(err,len,data){
        //     console.log(err);
        //     console.log(len);
        //     console.log(data);
        //     console.log(bf);
        //     console.log(bf.toString());
        // });
        console.log('文件打开成功,开始写文件');
        var str = '广东省深圳市南山区广东省深圳市南山区广东省深圳市南山区';
        // var str = 'aaaaa123456';
        var bf = new Buffer(str);
        // fs.write(fd,bf,0,38,0,function(err,len,data){
        fs.write(fd,str,0,'utf-8',function(err,len,data){
            console.log(arguments);
            // console.log(err);
            // console.log(len);
            // console.log(data);
            // console.log(bf);
            // console.log(bf.toString());
        })

    }
})

