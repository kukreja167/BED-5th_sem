const fs=require('fs');
fs.readFile('lec_6/Write.txt', 'utf8', function(err, data1) {
    if (err) {
        console.log(err);
    } else {
       fs.readFile('lec_6/Write1.txt', 'utf8', function(err, data2) {
    if (err) {
        console.log(err); return;
    } else {
        let content = data1+'\n' + data2;
        fs.writeFile('lec_6/Write2.txt', content, function(err) {
            if (err) {
                console.log(err); 
                return;
            } else {
                console.log('Files read and written successfully'); 
            }
});
    }

});
    }
});
    