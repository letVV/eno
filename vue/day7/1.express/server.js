var express = require("express");
var request = require("request");
var app = express();
app.get("/getnews", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	request('http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=13&page=0&plat=ios&version=9678', function(err, response, body) {
		console.log(body)
		res.send(body)
	})
})
app.listen(9999)