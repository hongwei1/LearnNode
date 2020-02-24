// routes/api.js
//回调函数封装成模块
exports.index = function (req, res){
    res.json(200, {name:"张三",age:40});
}