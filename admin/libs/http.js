(function () {
	var baseurl = 'http://localhost:8080/api/v1';
	var baseobj = {
		baseurl:baseurl,
		login:baseurl+'/admin/user/login',//用户登录
		userinfo:baseurl+'/admin/user/info',//获取用户信息
		detail:baseurl+'/admin /user/detail',//获取用户详情
		useredit:baseurl+'/admin/user/edit',//编辑用户信息
		list:baseurl+'/admin/category/list',//所有文章类别
		add:baseurl+'/admin/category/add',//新增文章类别
		searchclass:baseurl+'/admin/category/search',//根据id查询指定文章类别
		editclass:baseurl+'/admin/category/edit',//编辑文章类别
		deleteclass:baseurl+'/admin/category/delete',//删除文章类别
		query:baseurl+'/admin/article/query',//文章搜索
		publish:baseurl+'/admin/article/publish',//发布文章
		idsearch:baseurl+'/admin/article/search',//根据id获取文章信息
		edit:baseurl+'/admin/article/edit',//文章编辑
		delete:baseurl+'/admin/article/delete',//删除文章
		info:baseurl+'/admin/data/info',//获取统计数据
		article:baseurl+'/admin/data/article',//日新增文章数量统计
		category:baseurl+'/admin/data/category',//各类型文章数量统计
		visit:baseurl+'/admin/data/visit',//日文章访问量
		plsearch:baseurl+'/admin/comment/search',//文章评论搜索
		pass:baseurl+'/admin/comment/pass',//评论审核通过
		reject:baseurl+'/admin/comment/reject',//评论审核不通过
		deletepl:baseurl+'/admin/comment/delete',//删除评论
		hotpic:baseurl+'/index/hotpic',//首页焦点图
		categoryclass:baseurl+'/index/category',//文章类型
		latest:baseurl+'/index/latest',//最新资讯
		rank:baseurl+'/index/rank',//热门排行
		latest_comment:baseurl+'/index/latest_comment',//最新评论
		attention:baseurl+'/index/attention',//焦点关注
		articlecontent:baseurl+'/index/article',//文章详细内容
		get_comment:baseurl+'/index/get_comment',//评论列表
		post_comment:baseurl+'/index/post_comment',//发表评论
		search:baseurl+'/index/search',//文章搜索
	};
})(window);