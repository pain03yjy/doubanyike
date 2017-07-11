/*
app.js是整个angularjs应用程序的入口
创建应用模块
*/

var yike = angular.module("yike",["ngRoute","Controller","directives"]);
// 定义 toogle方法
// $(document).ready(function(){
// })  == yike.run([]);
yike.run(["$rootScope",function($rootScope){
	// 往$rootScope上绑定toggle
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		// 找到nav节点 添加collapse类
		$rootScope.collapsed = !$rootScope.collapsed
		// 找到dd节点，改变transform的值
		var dds = document.querySelectorAll(".navs dd");
		// console.log(dds);
		// 根据$rootScope.collapsed的值判断收起还是打开
		// 遍历所有的dds 将其中的每一个dd的transform属性改成translate(0);
			if($rootScope.collapsed){
				for(var i=0;i<dds.length;i++){ 
				dds[i].style.transform = "translate(0)"
				//设置每个dd一次入场（动画过渡效果）
				dds[i].style.transitionDuration = (i+1)*0.15+"s";
				};	
			}else{
				for(var i=0;i<dds.length;i++){ 
				dds[i].style.transform = "translate(-100%)"
				dds[i].style.transitionDuration = (dds.length-i)*0.15+"s";
				};
			};
	};
}]);
// 解决锚点乱码bug
yike.config(function($locationProvider){
	$locationProvider.hashPrefix("");
});
// 配置路由
	yike.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/today",{
			templateUrl:"./views/today.html",
			controller:"todayContr"
		})
		.when("/older",{
			templateUrl:"./views/older.html",
			controller:"olderContr"
		})
		.when("/author",{
			templateUrl:"./views/author.html",
			controller:"authorContr"
		})
		.when("/category",{
			templateUrl:"./views/category.html",
			controller:"categoryContr"
		})
		.when("/favourite",{
			templateUrl:"./views/favourite.html",
			controller:"todayContr"
		})
		.when("/settings",{
			templateUrl:"./views/settings.html"
		})
		.otherwise({
			redirecTo:"/today"
		})
	}]);
