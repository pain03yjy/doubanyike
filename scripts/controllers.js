// 放所有的控制器 -专门用于管理控制器
// 将所有控制器整体定义成一个控制器模块;
var Controller 
// 测试；
angular.module("Controller",[])
.controller("navController",["$scope",function($scope){
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
}])
// 今日一刻的控制器
.controller("todayContr",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	// 获取今天的日期2017-7-11
	var today = $filter('date')(new Date,"yyyy-MM-dd"); 
	$scope.time = today;
	$rootScope.loaded = false;  
	$http({
		url:"./api/today.php",//请求地址从后台发送，解决跨域问题
		method:"get",
		params:{today:today}
	}).then(function(result){
		$rootScope.loaded=!$rootScope.loaded
		// console.log(result);
		// 将数据放到模型层
		$scope.time = result.data.date;
		$scope.posts = result.data.posts;
		$scope.total = result.data.total;
	});
}])
.controller("olderContr",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
	$rootScope.loaded = false;  
	$http({
		url:"./api/older.php",
		method:"get"
	}).then(function(result){
		$rootScope.loaded=!$rootScope.loaded;
		// console.log(result);
		$scope.time = result.data.date;
		$scope.posts = result.data.posts;
	});
}])
.controller("authorContr",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
	$rootScope.loaded = false;  
	$http({
		url:"./api/author.php",
		method:"get"
	}).then(function(result){
		$rootScope.loaded=!$rootScope.loaded;
		// console.log(result);
		$scope.posts=result.data.authors;
		// console.log($scope.posts);
	});
	$http({
		url:"./api/author2.php",
		method:"get"
	}).then(function(result){
		// console.log(result);
		$scope.posts2=result.data.authors;
		// console.log($scope.posts);
	});
}])
.controller("categoryContr",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
	$rootScope.loaded = false;  
	$http({
		url:"./api/category.php",
		method:"get"
	}).then(function(result){
		$rootScope.loaded=!$rootScope.loaded;
		$scope.posts = result.data.columns;
		// console.log($scope.posts);
	});
}])

