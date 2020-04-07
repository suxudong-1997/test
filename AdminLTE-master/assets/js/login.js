$(function() {
	 /*粒子背景特效*/
	 $('body').particleground({
	   dotColor: '#5cbdaa',
	   lineColor: '#5cbdaa'
	 });
	
	$('#submit_btn').on('click',function(){
		var username=$('#username').val();
		if(username!="admin")
		{
			alert("用户名密码错误");
			return;
		}
		$.post();
		window.location.href="main.html";
	});	 
		 
		 
		 
		 
		 
		 
 });