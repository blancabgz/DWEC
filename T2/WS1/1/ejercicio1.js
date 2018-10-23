var dt = new Date();
var month = dt.getMonth+1();
var day = dt.getDate();
var year = dt.getFullYear();
var hour= dt.getHours();
var minutes = dt.getMinutes();
var seconds = dt.getSeconds();

document.write( hour + ':'+ minutes +':' + seconds + ' - ' + day + '/'+  month + '/' + year);