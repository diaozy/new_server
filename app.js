var Encrypt = require('./crypto.js');
var express = require('express');
var http = require('http');
var crypto = require('crypto');
var reqhttp = require("request");

var books1 = require('./data.js').books1;
var books2 = require('./data4.js').books2;
var books3 = require('./data5.js').books3;
var books4 = require('./data6.js').books4;
var books5 = require('./data.js').books5;
var catalogue = require('./data.js').catalogue;
var banner = require('./data.js').banner;
var book3001 = require('./data.js').book3001;
var book3002 = require('./data.js').book3002;
var book3003 = require('./data.js').book3003;

var book401 = require('./data4.js').book401;
var book402 = require('./data4.js').book402;
var book403 = require('./data4.js').book403;
var book404 = require('./data4.js').book404;
var book405 = require('./data4.js').book405;
var book406 = require('./data4.js').book406;

var book501 = require('./data5.js').book501;
var book502 = require('./data5.js').book502;
var book503 = require('./data5.js').book503;
var book504 = require('./data5.js').book504;
var book505 = require('./data5.js').book505;
var book506 = require('./data5.js').book506;
var book507 = require('./data5.js').book507;
var book508 = require('./data5.js').book508;
var book509 = require('./data5.js').book509;
var book510 = require('./data5.js').book510;
var book511 = require('./data5.js').book511;
var book512 = require('./data5.js').book512;


var book601 = require('./data6.js').book601;
var book602 = require('./data6.js').book602;
var book603 = require('./data6.js').book603;

for (var i=300101 ; i < 300174;i++)
{
	eval('var detail'+ i + '= require(\'./data.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data.js\').url' + i);
}

for (var i=300201 ; i < 300298;i++)
{
	eval('var detail'+ i + '= require(\'./data.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data.js\').url' + i);
}

for (var i=300301 ; i < 300362;i++)
{
	eval('var detail'+ i + '= require(\'./data.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data.js\').url' + i);
}

for (var i=401001 ; i < 401248;i++)
{
	eval('var detail'+ i + '= require(\'./data4.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data4.js\').url' + i);
}

for (var i=402001 ; i < 402082;i++)
{
	eval('var detail'+ i + '= require(\'./data4.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data4.js\').url' + i);
}

for (var i=403001 ; i < 403208;i++)
{
	eval('var detail'+ i + '= require(\'./data4.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data4.js\').url' + i);
}

for (var i=404001 ; i < 404067;i++)
{
	eval('var detail'+ i + '= require(\'./data4.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data4.js\').url' + i);
}

for (var i=405001 ; i < 405194;i++)
{
	eval('var detail'+ i + '= require(\'./data4.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data4.js\').url' + i);
}

for (var i=406001 ; i < 406048;i++)
{
	eval('var detail'+ i + '= require(\'./data4.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data4.js\').url' + i);
}

for (var i=501001 ; i < 501008;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=501001 ; i < 501008;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}
for (var i=502001 ; i < 502007;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=503001 ; i < 503007;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}
for (var i=504001 ; i < 504011;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=505001 ; i < 505008;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=506001 ; i < 506009;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=507001 ; i < 507007;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=508001 ; i < 508011;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=509001 ; i < 509011;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=510001 ; i < 510007;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=511001 ; i < 511012;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=512001 ; i < 512011;i++)
{
	eval('var detail'+ i + '= require(\'./data5.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data5.js\').url' + i);
}

for (var i=601001 ; i < 601011;i++)
{
	eval('var detail'+ i + '= require(\'./data6.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data6.js\').url' + i);
}

for (var i=602001 ; i < 602008;i++)
{
	eval('var detail'+ i + '= require(\'./data6.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data6.js\').url' + i);
}

for (var i=603001 ; i < 603007;i++)
{
	eval('var detail'+ i + '= require(\'./data6.js\').detail' + i);
	eval('var url'+ i + '= require(\'./data6.js\').url' + i);
}

//var bodyParser = require("body-parser");
var app = express();
var dir = "/v1"
//app.use(bodyParser.json({limit: '1mb'}));
//app.use(bodyParser.urlencoded({extended: true}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/*
Start New Server
 */

//get books
app.get(dir + '/books1', function(request, response) {
	response.send();
	console.log(`Process ${request.url}...`);
});

//get books
app.get(dir + '/books2', function(request, response) {
	response.send(books2);
	console.log(`Process ${request.url}...`);
});

//get books
app.get(dir + '/books3', function(request, response) {
	response.send(books3);
	console.log(`Process ${request.url}...`);
});

//get books
app.get(dir + '/books4', function(request, response) {
	response.send(books4);
	console.log(`Process ${request.url}...`);
});

//get books
app.get(dir + '/books5', function(request, response) {
	response.send(books5);
	console.log(`Process ${request.url}...`);
});

//get banner
app.get(dir + '/banner', function(request, response) {
	response.send(banner);
	console.log(`Process ${request.url}...`);
});

//歌单类型列表
app.get(dir + '/playlist/catlist', function(request, response) {
	response.send(catalogue);
	console.log(`Process ${request.url}...`);
})

//get lists
app.get(dir + '/playlist/detail', function(request, response) {

	var key = request.query.id;
	response.send(eval(key));

	console.log(`Process ${request.url}...`);
});

//get books detail
app.get(dir + '/music/detail', function(request, response) {

	var key = 'detail'+request.query.id;
	response.send(eval(key));

	console.log(`Process ${request.url}...`);

});


//get mp3 url
app.get(dir + '/music/url', function(request, response) {

	var key = 'url'+request.query.id;
	response.send(eval(key));
	
	console.log(`Process ${request.url}...`);

});



var cookie=null
var user={}
function createWebAPIRequest(path, data, c, response, method) {
	method = method ? method : "POST"
	var music_req = '';
	var cryptoreq = Encrypt(data);
	var http_client = http.request({
		hostname: 'music.163.com',
		method: method,
		path: path,
		headers: {
			'Accept': '*/*',
			'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
			'Connection': 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Referer': 'http://music.163.com',
			'Host': 'music.163.com',
			'Cookie': cookie,
			'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
		}
	}, function(res) {
		res.on('error', function(err) {
			response.status(502).send('fetch error');
		});
		res.setEncoding('utf8');
		if(res.statusCode != 200) {
			createWebAPIRequest(path, data, c, response, method);
			return;
		} else {
			res.on('data', function(chunk) {
				music_req += chunk;
			});
			res.on('end', function() {
				if(music_req == '') {
					createWebAPIRequest(path, data, c, response, method);
					return;
				}
				if(res.headers['set-cookie']) {
//					response.set({
//						'Set-Cookie': res.headers['set-cookie'],
//					});
					cookie=res.headers['set-cookie'];
					response.send({
						code:200,
						//c: res.headers['set-cookie'],
						i: JSON.parse(music_req)
					});
					user=JSON.parse(music_req)
					return;
				}
				response.send(music_req);
			})
		}
	});
	http_client.write('params=' + cryptoreq.params + '&encSecKey=' + cryptoreq.encSecKey);
	http_client.end();
	console.log(`Process ${path}...`);//diaozy
}

function createRequest(path, method, data, callback) {
	var ne_req = '';
	var http_client = http.request({
		hostname: 'music.163.com',
		method: method,
		path: path,
		headers: {
			'Referer': 'http://music.163.com',
			'Cookie': 'appver=1.5.6',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			ne_req += chunk;
		});
		res.on('end', function() {
			callback(ne_req);
		})
	});
	if(method == 'POST') {
		http_client.write(data);
	}
	http_client.end();
	console.log(`Process ${path}...`);//diaozy
}


app.get(dir + '/personalized', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {};
	createWebAPIRequest('/api/personalized/playlist', data, cookie, response)
});

app.get(dir + '/mine', function(request, response) {
	response.send(user);
});


app.get(dir + '/login/cellphone', function(request, response) {
	var phone =request.query.phone;
	var md5sum = crypto.createHash('md5');
	md5sum.update(request.query.password);
	var data = {
		'phone': phone,
		'password': md5sum.digest('hex'),
		'rememberLogin': 'true'
	};
	createWebAPIRequest('/weapi/login/cellphone', data, null, response)
});

app.get(dir + '/login', function(request, response) {
	var email = request.query.email;
	var md5sum = crypto.createHash('md5');
	md5sum.update(request.query.password);
	var data = {
		'username': email,
		'password': md5sum.digest('hex'),
		'rememberLogin': 'true'
	};
	createWebAPIRequest('/weapi/login', data, null, response)
});

//登录信息刷新
app.get(dir + '/login/refresh', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var csrf = ""
	for(i in cookie) {
		if(cookie[i].name == '__csrf') {
			csrf = cookie.value
		}
	}
	csrf = request.query.t
	var data = {
		"csrf_token": csrf
	};
	createWebAPIRequest('/weapi/login/token/refresh?csrf_token=' + csrf, data, cookie, response)
});



//歌单类型列表-热门类型
app.get(dir + '/playlist/hot', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {};
	createWebAPIRequest('/api/playlist/hottags', data, cookie, response)
})

//推荐新音乐
app.get(dir + '/personalized/newsong', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		type: "recommend"
	};
	createWebAPIRequest('/api/personalized/newsong', data, cookie, response)
})

//推荐mv
app.get(dir + '/personalized/mv', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {};
	createWebAPIRequest('/api/personalized/mv', data, cookie, response)
})
//独家放送
app.get(dir + '/personalized/privatecontent', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {};
	createWebAPIRequest('/api/personalized/privatecontent', data, cookie, response)
})
//推荐dj
app.get(dir + '/personalized/djprogram', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {};
	createWebAPIRequest('/api/personalized/djprogram', data, cookie, response)
})

//每日推荐歌曲
app.get(dir + '/recommend/songs', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"offset": 0,
		"total": true,
		"limit": 20,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/v1/discovery/recommend/songs', data, cookie, response)
});
//取消推荐
app.get(dir + '/recommend/dislike', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		resId: request.query.id,
		resType: request.query.type,
		alg: request.query.alg, //'itembased2',
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/discovery/recommend/dislike', data, cookie, response)
});

//  每日推荐歌单
app.get(dir + '/recommend/resource', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'offset': 0,
		'limit': 20,
		'total': 'True',
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/v1/discovery/recommend/resource', data, cookie, response)
});
//收藏单曲到歌单，从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
app.get(dir + '/playlist/tracks', function(request, response) {
	var op = request.query.op
	var pid = request.query.pid;
	var tracks = request.query.tracks;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"op": op,
		"pid": pid,
		"tracks": tracks,
		"trackIds": JSON.stringify([tracks]),
		"csrf_token": "",
	};
	createWebAPIRequest('/weapi/playlist/manipulate/tracks', data, cookie, response)
});
//搜索
app.get(dir + '/search', function(request, response) {
	var keywords = request.query.keywords || '';
	var type = request.query.type || 1;
	var offset = request.query.offset || '0';
	var limit = request.query.limit || 20;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"s": keywords,
		"offset": offset,
		"limit": limit,
		"type": type
	};
	createWebAPIRequest('/weapi/cloudsearch/get/web', data, cookie, response)
});
//搜索 multimatch
app.get(dir + '/search/multimatch', function(request, response) {
	var keywords = request.query.keywords || '';
	var type = request.query.type || 1;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": "",
		type: type || 1,
		s: keywords || ''
	};
	createWebAPIRequest('/weapi/search/suggest/multimatch', data, cookie, response)
});
//搜索 hot
app.get(dir + '/search/hot', function(request, response) {
	var keywords = request.query.keywords || '';
	var type = request.query.type || 1;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		type: 1
	};
	createWebAPIRequest('/api/search/hot?type=1', data, cookie, response)
});
//搜索 suggest
app.get(dir + '/search/suggest', function(request, response) {
	var keywords = request.query.keywords || '';
	var type = request.query.type || 1;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": "",
		type: type || 1,
		s: keywords || ''
	};
	createWebAPIRequest('/weapi/search/suggest/web', data, cookie, response)
});
//fm,
app.get(dir + '/fm', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/v1/radio/get', data, cookie, response)
});

//歌词
app.get(dir + '/lyric', function(request, response) {
	var id = request.query.id;
	createRequest('/api/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1', 'GET', null, function(res) {
		response.setHeader("Content-Type", "application/json");
		response.send(res);
	});
});

//热门歌手 
app.get(dir + '/top/artist', function(request, response) {
	var data = {
		'offset': request.query.offset,
		'total': false,
		"type":request.query.type,
		'limit': request.query.limit
	}
	createWebAPIRequest('/weapi/artist/top', data, cookie, response);
//	createRequest('/api/artist/top, 'GET', null, function(res) {
//		response.setHeader("Content-Type", "application/json");
//		response.send(res);
//	});
});
//新歌上架 ,type ALL, ZH,EA,KR,JP
app.get(dir + '/top/songs', function(request, response) {
	var data = {
		'type': request.query.type,
		'area': request.query.type,
		'cat':request.query.type,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/v1/discovery/new/songs', data, cookie, response);
});
//新碟上架 ,type ALL, ZH,EA,KR,JP
app.get(dir + '/top/album', function(request, response) {
	var data = {
		'offset': request.query.offset,
		'total': true,
		'limit': request.query.limit,
		'area': request.query.type,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/album/new', data, cookie, response);
});
//mv 排行,type ALL, ZH,EA,KR,JP
app.get(dir + '/top/mv', function(request, response) {
	var data = {
		'offset': request.query.offset,
		'total': true,
		'limit': request.query.limit,
		'area': request.query.type,
		'type': request.query.type,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/mv/toplist', data, cookie, response);
});
//mv 最新mv,type ALL, ZH,EA,KR,JP
app.get(dir + '/top/mv/first', function(request, response) {
	var data = {
		'offset': request.query.offset,
		'total': true,
		'limit': request.query.limit,
		'area': request.query.type,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/mv/first', data, cookie, response);
});
//分类歌单
app.get(dir + '/top/playlist', function(request, response) {
	var data = {
		'offset': request.query.offset,
		'order': request.query.order || 'hot',
		'limit': request.query.limit,
		'cat': request.query.type,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/playlist/list', data, cookie, response);
});
//精品歌单
app.get(dir + '/top/playlist/highquality', function(request, response) {
	var data = {
		'cat': request.query.type,
		'offset':request.query.offset,
		"limit":request.query.limit,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/playlist/highquality/list', data, cookie, response);
});
//simi ,相似歌单，歌曲，关注的用户
app.get(dir + '/simi/playlist', function(request, response) {
	var data = {
		'songid': request.query.id,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/discovery/simiPlaylist', data, cookie, response);
});
app.get(dir + '/simi/song', function(request, response) {
	var data = {
		'songid': request.query.id,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/v1/discovery/simiSong', data, cookie, response);
});
app.get(dir + '/simi/user', function(request, response) {
	var data = {
		'songid': request.query.id,
		"csrf_token": ""
	}
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/discovery/simiUser', data, cookie, response);
});
//评论
app.get(dir + '/comments', function(request, response) {

	return;
	
	//	var id = request.query.id;
//	var limit = request.query.limit;
//	var offset = request.query.offset;
//	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
//	var type = request.query.type == 'hot' ? 'hotcomments' : 'comments';
//	var data = {
//		"rid": id,
//		"offset": offset,
//		"limit": limit,
//		"total": false,
//		"csrf_token": ""
//	};
//	createWebAPIRequest('/weapi/v1/resource/' + type + '/' + id, data, cookie, response)
});

//艺术家
app.get(dir + '/artist', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/v1/artist/' + id, data, cookie, response)
});
//关注歌手
app.get(dir+'/artist/sub',function(req,response){
	var data={
		artistIds:[req.query.id],
		artistId:req.query.id,
		subscribed: true
	}
	if(req.query.type==1){
		createRequest('/api/artist/sub?artistId='+req.query.id, 'GET', {}, function(res) {
		response.setHeader("Content-Type", "application/json");
		response.send(res);
	});
	}else{
		createRequest('/api/artist/unsub?artistIds='+req.query.id, 'GET', {}, function(res) {
		response.setHeader("Content-Type", "application/json");
		response.send(res);
	});
	}
	
})
//艺术家-专辑
app.get(dir + '/artist/album', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"offset": request.query.offset,
		"limit": request.query.limit,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/artist/albums/' + id, data, cookie, response)
});
//艺术家-mv
app.get(dir + '/artist/mv', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		artistId: id,
		"total": true,
		"offset": request.query.offset,
		"limit": request.query.limit,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/artist/mvs', data, cookie, response)
});
//艺术家 信息
app.get(dir + '/artist/desc', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		id: id,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/artist/introduction', data, cookie, response)
});
//艺术家 ,相似歌手
app.get(dir + '/artist/simi', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		artistid: id,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/discovery/simiArtist', data, cookie, response)
});
//个人信息，歌单，收藏，mv,dj数量
app.get(dir + '/user/subcount', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		userId: id,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/subcount', data, cookie, response)
});
//云盘数据
app.get(dir + '/user/cloud', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	console.log(request.get('Cookie') + '\n' + request.query.cookie + '\n' + cookie);
	var data = {
		limit: request.query.limit,
		offset: request.query.offset,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/v1/cloud/get', data, request.query.cookie, response)
});
//云盘数据
app.get(dir + '/user/cloud/search', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		byids: request.query.id,
		id: request.query.id,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/v1/cloud/get/byids', data, cookie, response)
});
//mv detail
app.get(dir + '/mv', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		id: id,
		"csrf_token": ""
	};
	//createWebAPIRequest('/weapi/v1/mv/detail/', data, cookie, response)
	createWebAPIRequest('/api/mv/detail?id=' + id + '&type=mp4', data, cookie, response)
});
//simi mv
app.get(dir + '/mv/simi', function(request, response) {
	var id = parseInt(request.query.id);
	var br = parseInt(request.query.br);
	var data = {
		mvid: id,
		"csrf_token": ""
	};
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/discovery/simiMV', data, cookie, response)
});
//mv播放地址
app.get(dir + '/mv/url', function(request, response) {
//	var id = parseInt(request.query.id);
//	var br = parseInt(request.query.br);
//	var data = {
//		"ids": [id],
//		id: id,
//		"br": br,
//		"csrf_token": ""
//	};
//	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
//	createWebAPIRequest('/weapi/song/enhance/play/mv/url', data, cookie, response)
var url = request.query.url
  var headers = {
    "Referer": "http://music.163.com/",
    "Cookie": "appver=1.5.0.75771;",
    'Content-Type': 'video/mp4',
    'Location': url
  }
  var options = {
    header: headers,
    url: url
  }
  reqhttp(options).pipe(response)
});

//专辑详情
app.get(dir + '/album/detail', function(request, response) {
	var id = parseInt(request.query.id);
	var data = {
		"csrf_token": ""
	};
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/v1/album/' + id, data, cookie, response)
});

//用户详情
app.get(dir + '/user/detail', function(request, response) {
	var id = parseInt(request.query.uid);
	var data = {
		"csrf_token": ""
	};
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/api/v1/user/detail/' + id, data, cookie, response, 'GET')
});
//用户歌单
app.get(dir + '/user/playlist', function(request, response) {
//	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
//	var data = {
//		"offset": request.query.offset || '0',
//		"uid": request.query.uid,
//		"limit": request.query.limit || 20,
//		"csrf_token": ""
//	};
//	createWebAPIRequest('/weapi/user/playlist', data, cookie, response)
	return;
});
//用户电台
app.get(dir + '/user/radio', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"userId": request.query.uid,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/djradio/get/byuser', data, cookie, response)
});
//用户关注列表
app.get(dir + '/user/follows', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		offset: request.query.offset || '0',
		limit: request.query.limit || 1000,
		order: true
	}
	createWebAPIRequest('/weapi/user/getfollows/' + request.query.id, data, cookie, response)
});
//关注,取消关注，用户
app.get(dir + '/follow', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": ""
	}
	var url = request.query.type == 'add' ? 'follow' : "delfollow"
	createWebAPIRequest('/weapi/user/' + url + '/' + request.query.id, data, cookie, response)
});
//用户粉丝列表
app.get(dir + '/user/followeds', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'userId': request.query.id,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/user/getfolloweds/', data, cookie, response)
});

//歌单详情-旧，获取封面
app.get(dir + '/playlist/img', function(request, response) {
	createWebAPIRequest('/api/playlist/detail?id=' + request.query.id, null, null, response)
});

//签到
app.get(dir + '/daily_signin', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'type': request.query.type,
	}
	createWebAPIRequest('/weapi/point/dailyTask', data, cookie, response)

});

//听歌记录 uid,type 0所以，1 week，
app.get(dir + '/record', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'type': request.query.type,
		uid: request.query.uid,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/v1/play/record', data, cookie, response)
});
//红心歌曲
app.get(dir + '/likelist', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		uid: request.query.uid,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/song/like/get', data, cookie, response)
});
//program-like
app.get(dir + '/program/like', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'threadId': request.query.id,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/resource/like', data, cookie, response)
});
//电台类型列表
app.get(dir + '/djradio/catelist', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/djradio/category/get', data, cookie, response)
});
//推荐节目
app.get(dir + '/program/recommend', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		cateId: request.query.type,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/program/recommend/v1', data, cookie, response)
});
//精选电台
app.get(dir + '/djradio/recommend', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/djradio/recommend/v1', data, cookie, response)
});
//精选电台-分类电台
app.get(dir + '/djradio/recommend/type', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		cateId: request.query.type,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/djradio/recommend', data, cookie, response)
});
//分类电台
app.get(dir + '/djradio/hot', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'cat': request.query.type,
		cateId: request.query.type,
		type: request.query.type,
		categoryId: request.query.type,
		category: request.query.type,
		limit: request.query.limit,
		offset: request.query.offset,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/djradio/hot/v1', data, cookie, response)
});
//dj单期节目program-detail
app.get(dir + '/program/detail', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'id': request.query.id,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/dj/program/detail', data, cookie, response)
});
//dj主播 radio
app.get(dir + '/dj/program', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'asc': request.query.asc,
		'radioId': request.query.id,
		'limit': request.query.limit,
		'offset': request.query.offset,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/dj/program/byradio', data, cookie, response)
});

//djradio detail
app.get(dir + '/dj/detail', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'id': request.query.id,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/djradio/get', data, cookie, response)
});

//用户动态
app.get(dir + '/event/get', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'time': -1,
		'offset': request.query.offset || '0',
		'pagesize': request.query.limit || 20,
		'getcounts': true,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/event/get/' + request.query.id, data, cookie, response)
});
//dj 订阅
app.get(dir + '/dj/sub', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"id": id,
		"csrf_token": ""
	}
	createWebAPIRequest("/weapi/djradio/" + (request.query.t == 1 ? 'sub' : 'unsub'), data, cookie, response)
});
//program like act
app.get(dir + '/resource/like', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"threadId": id,
		"csrf_token": ""
	}
	createWebAPIRequest("/weapi/resource/" + (request.query.t == 1 ? 'like' : 'unlike'), data, cookie, response)
});
//comment like act
app.get(dir + '/comment/like', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"threadId": request.query.origin,
		commentId: id,
		"csrf_token": ""
	}
	createWebAPIRequest("/weapi/v1/comment/" + (request.query.t == 1 ? 'like' : 'unlike'), data, cookie, response)
});
//歌曲喜欢和删除 op=like or trash,songid,
app.get(dir + '/song/tracks', function(request, response) {
	var op = request.query.op
	var pid = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var url = op == 'like' ? '/weapi/radio/like' : '/weapi/radio/trash/add'
	var data = op == 'like' ? {
		"alg": request.query.r != 'del' ? 'itembased' : 'RT',
		"trackId": pid,
		"like": request.query.r != 'del' ? 'true' : 'false',
		"time": 2,
		"csrf_token": ""
	} : {
		"alg": 'RT',
		"songId": pid,
		"time": 2,
		"csrf_token": ""
	};
	createWebAPIRequest(url, data, cookie, response)
});

//用户电台
app.get(dir + '/user/dj', function(request, response) {
	var id = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		'offset': request.query.offset || '0',
		'limit': request.query.limit || 20,
		"csrf_token": ""
	}
	createWebAPIRequest('/weapi/dj/program/' + id, data, cookie, response)
});

app.get(dir + '/log/web', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"action": request.query.action,
		"json": request.query.json,
		"csrf_token": "",
	};
	createWebAPIRequest('/weapi/log/web', data, cookie, response)
});
app.get(dir + '/id2url', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(id2Url(req.query.id));
})
//toplist
app.get(dir + '/toplist', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": "",
	};
	createWebAPIRequest('/weapi/toplist', data, cookie, response)
})
//playlistall
app.get(dir + '/playlist/all', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"csrf_token": "",
	};
	createWebAPIRequest('/weapi/playlist/category/list', data, cookie, response)
})

//排行榜详细
app.get(dir + '/toplist/detail', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		id: request.query.id,
		limit: 20,
		"csrf_token": "",
	};
	createWebAPIRequest('/weapi/toplist/detail', data, cookie, response)
})
//艺术家分类
app.get(dir + '/toplist/artist', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		type: request.query.type,
		"csrf_token": "",
	};
	createWebAPIRequest('/weapi/toplist/artist', data, cookie, response)
})
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var server = app.listen(3001, function() {
	console.log("启动App");
});

function id2Url(pic_str) {
	var magic = str2Arr('3go8&$8*3*3h0k(2)2')
	var songId = str2Arr(pic_str)
	for(var i = 0; i < songId.length; i++) {
		songId[i] = songId[i] ^ magic[i % magic.length]
	}
	var md5 = crypto.createHash('md5');
	md5 = md5.update(arr2Str(songId))
	console.info(md5);
	var res = md5.digest('base64')
	res = res.replace(/\//g, '_')
	res = res.replace(/\+/, '-')
	return res
}

function str2Arr(str) {
	var bytes = []
	for(var i = 0; i < str.length; i++) {
		bytes.push(str.charAt(i).charCodeAt(0))
	}
	return bytes
}

function arr2Str(bytes) {
	var str = ''
	for(var i = 0; i < bytes.length; i++) {
		str += String.fromCharCode(bytes[i])
	}
	return str
}
