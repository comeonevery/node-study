var fs = require('fs');
var path = './../module'
var name = [];
var arr = [];
fs.watch(path,function(ev,file){
    fs.readdir(path,function(err,data){
        data.forEach(function(f) {
            var info = fs.statSync(path +'/'+ f );
            if(info.mode == 33206){
                arr.push(path +'/'+ f );
            }
        });
    
        console.log(1,arr);
        var content = '';
        arr.forEach(function(f,index){
            var c = fs.readFileSync(f);
            content += '\n\n\n\/****'+f+'***\/\n\n\n'+c.toString()+'\n';
        }) 

        console.log('============',content);  
        fs.writeFile('./index.js',content,function(){
            console.log(11111111);
            console.log(arguments);
        });
    });
});
