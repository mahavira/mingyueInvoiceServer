var express = require('express')
var bodyParser = require('body-parser')
var _ = require('lodash')
var app = express()
app.use(bodyParser.urlencoded({
	extended: false
}))
//allow custom header and CORS
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.sendStatus(200).end()
  }
  else {
    next();
  }
});
app.get('/', function (req, res) {
	res.send('Hello World')
})
app.use('/project_dzff/app/smsCode', function (req, res) {
	var result = {
		res_code: 400,
		res_data: ""
	}
	if (req.body.smsCode === '1234') {
		result = {
			"res_code": 200,
			"res_data": "成功"
		}
	}
	res.json(result)
})

/**
 * login
 */
app.post('/project_dzff/app/login/login', function (req, res) {
	res.json({
		"res_data": {
			"id": "1",
			"isNewRecord": false,
			"remarks": "最高管理员",
			"createDate": "2013-05-27 08:00:00",
			"updateDate": "2013-05-27 08:00:00",
			"token": "e0e851e5783dddc938cc4ac72eacf498",
			"financeId": "12",
			"loginName": "admin",
			"no": "0001",
			"name": "李延超李延超李延超",
			"email": "33496315@qq.com",
			"phone": "8675",
			"mobile": "13711798733",
			"userType": "2",
			"loginIp": "0:0:0:0:0:0:0:1",
			"loginDate": "2017-06-18 15:27:31",
			"loginFlag": "1",
			"oldLoginIp": "0:0:0:0:0:0:0:1",
			"oldLoginDate": "2017-06-18 15:27:31",
			"admin": true,
			"roleNames": ""
		},
		"res_code": 200
	})
})
/**
 * register
 */
app.post('/project_dzff/app/login/register', function (req, res) {
	res.json({
		"res_data": {
			"id": "6d6bd1d5ee7b473caec52be80f589130",
			"isNewRecord": false,
			"createDate": "2017-06-18 16:08:15",
			"updateDate": "2017-06-18 16:08:15",
			"token": "a6a220c0d9dc2b53aa84c2ad3a540daa",
			"financeId": "1",
			"loginName": "",
			"name": "李延超",
			"email": "33496315@qq.com",
			"mobile": "13811798739",
			"userType": "2",
			"loginFlag": "0",
			"admin": false,
			"roleNames": ""
		},
		"res_code": 200
	})
})
/**
 * updateEmail
 */
app.post('/project_dzff/app/user/updateEmail', function (req, res) {
	res.json({
		"res_data": "成功",
		"res_code": 200
	})
})
/**
 * updateUserName
 */
app.post('/project_dzff/app/user/updateUserName', function (req, res) {
	res.json({
		"res_data": "成功",
		"res_code": 200
	})
})
/**
 * updateUserFinance
 */
app.post('/project_dzff/app/user/updateUserFinance', function (req, res) {
	res.json({
		"res_data": "成功",
		"res_code": 200
	})
})
/**
 * updateUserPassword
 */
app.post('/project_dzff/app/user/updateUserPassword', function (req, res) {
	res.json({
		"res_data": "成功",
		"res_code": 200
	})
})
/**
 * getMyMessages
 */
app.get('/project_dzff/app/message/getMyMessages', function (req, res) {
	res.json({
		"res_data": {
			"pageNo": 1,
			"pageSize": 30,
			"count": 5,
			"list": [{
				"id": "1",
				"isNewRecord": false,
				"remarks": "备注",
				"createDate": "2017-06-18 10:16:28",
				"updateDate": "2017-06-18 10:16:31",
				"title": "您的发票已经打印",
				"content": "您的发票已经打印",
				"toUser": "1",
				"isRead": "0"
			},
			{
				"id": "2",
				"isNewRecord": false,
				"remarks": "备注",
				"createDate": "2017-06-18 10:16:28",
				"updateDate": "2017-06-18 10:16:31",
				"title": "您的发票已经打印",
				"content": "您的发票已经打印",
				"toUser": "1",
				"isRead": "0"
			},
			{
				"id": "3",
				"isNewRecord": false,
				"remarks": "备注",
				"createDate": "2017-06-18 10:16:28",
				"updateDate": "2017-06-18 10:16:31",
				"title": "您的发票已经打印",
				"content": "您的发票已经打印",
				"toUser": "1",
				"isRead": "0"
			},
			{
				"id": "4",
				"isNewRecord": false,
				"remarks": "备注",
				"createDate": "2017-06-18 10:16:28",
				"updateDate": "2017-06-18 10:16:31",
				"title": "您的发票已经打印",
				"content": "您的发票已经打印",
				"toUser": "1",
				"isRead": "0"
			},
			{
				"id": "5",
				"isNewRecord": false,
				"remarks": "备注",
				"createDate": "2017-06-18 10:16:28",
				"updateDate": "2017-06-18 10:16:31",
				"title": "您的发票已经打印",
				"content": "您的发票已经打印",
				"toUser": "1",
				"isRead": "0"
			}
			],
			"firstResult": 0,
			"maxResults": 30
		},
		"res_code": 200
	})
	res.end()
})
/**
 * getFinanceUsers
 */
app.post('/project_dzff/app/login/getFinanceUsers', function (req, res) {
	res.json({
		"res_data": [{
			"id": "1",
			"isNewRecord": false,
			"name": "李延超李延超李延超",
			"loginFlag": "1",
			"roleNames": "",
			"admin": true
		}],
		"res_code": 200
	})
})
/**
 * getUserByMobile
 */
app.post('/project_dzff/app/login/getUserByMobile', function (req, res) {
	res.json({
		"res_data": "0", // 0:表示可用 1:表示已经被占用
		"res_code": 200
	})
})
/**
 * getUserByEmail
 */
app.post('/project_dzff/app/login/getUserByEmail', function (req, res) {
	res.json({
		"res_data": "0", // 0:表示可用 1:表示已经被占用
		"res_code": 200
	})
})
/**
 * uploadUrl
 */
app.post('/project_dzff/app/bill/uploadUrl', function (req, res) {
	res.json({
		"res_data": "成功",
		"res_code": 200
	})
})
/**
 * getUserByEmail
 */
app.post('/project_dzff/app/bill/uploadPdf', function (req, res) {
	res.json({
		"res_data": "成功",
		"res_code": 200
	})
})
/**
 * invoice
 */
app.get('/invoice', function (req, res) {
	var data = []
	var maxId = 37
	var minId = 3
	var id = parseInt(req.query.id) + 1 || minId
	var type = req.query.type || 'min'
	if (type === 'min') {
		for (let i = id; i < id + 10 && i <= maxId; i++) {
			data.push(getItem(i))
		}
	} else {
		let i = id - 11;
		i = i < minId ? minId : i
		for (; i < id - 1; i++) {
			data.push(getItem(i))
		}
	}
	res.json({
		code: 200,
		message: '正确',
		data: data
	})

	function getItem(id) {
		return {
			id: id,
			name: '北京栋邦达科技有限公司',
			money: _.random(1, 1000),
			isPrint: _.sample([false, true]),
			datetime: '2017-10-10 00:12:12'
		}
	}
})
app.post('/invoice', function (req, res) {
	res.json({
		code: 200,
		message: '正确'
	})
})
app.listen(3000)