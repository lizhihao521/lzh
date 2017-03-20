$(function(){
		//调用fullpage插件
		$("#main").fullpage({
			'navigation':true
		})
		//调用swiper插件---添加功能
		new Swiper(".swiper-container",{
			//复制循环图片
			loop : true,
			//小圆点 分页
			pagination : '.swiper-pagination',
			//点击小圆点 切换图片
			paginationClickable : true,
			//小圆点点击消失 在点击出现
			paginationHide : true,
			//两侧按钮
			nextButton : '.swiper-button-next',
			prevButton : '.swiper-button-prev',
			//图片切换  --淡入  淡出 效果
			effect : 'cube',
			
		})
		//调用 wow动画插件
		new WOW().init();
		
		
		
		
		
		
		
		
		
		
		//jquery 实现mouseover事件
		
		$(".col-33-pic").hover(function(){
			$(this).find(".showImg").hide();
			$(this).find(".hideImg").show();
			
		},function(){
			
			$(this).find(".showImg").show();
			$(this).find(".hideImg").hide();
			
		})
		
		//jquery 实现滚动到第二屏启用动画插件
		
//		$(Window).scroll()




	/*     tab切换     */
		$(".index-top ul li").mouseover(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			var onindex=$(this).index();
//			$(".a").eq(onindex).show();
//			$(this).sibling().hide;
		})
		
		$(".sb").mouseenter(function(){
			$(".ul-son").show().siblings().hide();
			$(".n1").show().siblings().hide();
		})
		$(".sb1").mouseenter(function(){
			$(".ul-son1").show().siblings().hide();
			$(".n2").show().siblings().hide();
		})
		$(".sb2").mouseenter(function(){
			$(".ul-son2").show().siblings().hide();
			$(".n3").show().siblings().hide();
		})
		$(".sb3").mouseenter(function(){
			$(".ul-son3").show().siblings().hide();
			$(".n4").show().siblings().hide();
		})
		
		
		
		$(".index-content ul li").mouseover(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
		})
		
		$(".a01").mouseenter(function(){
			$(".a1").show().siblings().hide();
		})
		$(".a02").mouseenter(function(){
			$(".a2").show().siblings().hide();
		})
		$(".a03").mouseenter(function(){
			$(".a3").show().siblings().hide();
		})		
		$(".a04").mouseenter(function(){
			$(".a4").show().siblings().hide();
		})		
		$(".a05").mouseenter(function(){
			$(".a5").show().siblings().hide();
		})		
		$(".a06").mouseenter(function(){
			$(".a6").show().siblings().hide();
		})	
		$(".a07").mouseenter(function(){
			$(".a7").show().siblings().hide();
		})
		$(".a08").mouseenter(function(){
			$(".a8").show().siblings().hide();
		})
		$(".a09").mouseenter(function(){
			$(".a9").show().siblings().hide();
		})
		$(".a010").mouseenter(function(){
			$(".a10").show().siblings().hide();
		})
		$(".a011").mouseenter(function(){
			$(".a11").show().siblings().hide();
		})
		$(".a012").mouseenter(function(){
			$(".a12").show().siblings().hide();
		})
		$(".a013").mouseenter(function(){
			$(".a13").show().siblings().hide();
		})
		$(".a014").mouseenter(function(){
			$(".a14").show().siblings().hide();
		})
		$(".a015").mouseenter(function(){
			$(".a15").show().siblings().hide();
		})
		$(".a016").mouseenter(function(){
			$(".a16").show().siblings().hide();
		})
		
		
})
