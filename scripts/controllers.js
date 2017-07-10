// 放所有的控制器 -专门用于管理控制器
// 将所有控制器整体定义成一个控制器模块;
var Controller = angular.module("Controller",[]);
// 测试；
Controller.controller("navController",["$scope",function($scope){
	// console.log("进入")
	// 模拟模型层数据
	$scope.obj = [
	{url:'#/today',icon:'icon-home',text:"今日一刻"},
	{url:'#/older',icon:'icon-file-empty',text:"往期内容"},
	{url:'#/author',icon:'icon-pencil',text:"热门作者"},
	{url:'#/category',icon:'icon-menu',text:"栏目浏览"},
	{url:'#/favourite',icon:'icon-heart',text:"我的喜欢"},
	{url:'#/settings',icon:'icon-cog',text:"设置"}
	]
}]);

