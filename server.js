/**
 * Created by peter on 2016-09-23.
 */


var connect= require('connect');

var app = connect();
var url = require('url');
var lab3 = function (req,res,next){
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = parseFloat(x);
   var y = parseFloat(y);
   /* add
    minus
    multiply
    divide
*/
    var sign;
switch (method){
    case 'add':
        sign = '+';
        var expression = qs.x + sign + qs.y;
        result = expression + ' = ' + eval(expression);
    break;
    case 'subtract':
        sign = '-';
        var expression = qs.x + sign + qs.y;
        result = expression + ' = ' + eval(expression);
    break;
    case 'multiply':
        sign = '*';
        var expression = qs.x + sign + qs.y;
        result = expression + ' = ' + eval(expression);
    break;
    case 'divide':
            sign = '*';
        var expression = qs.x + sign + qs.y;
        result = expression + ' = ' + eval(expression);
    break;
    default:
        var result = 'invalid method or numbers please try again';
        res.end(result);
}

        res.end('output:'+result);

}
 app.use('/lab3', lab3);

app.listen(3000);


console.log('url');

