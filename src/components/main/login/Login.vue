<template>

	<body>
		<div class="login_top">
			<i class="iconfont">&#xe606;</i>
			<span>手机号快捷登录</span>
		</div>
		<div class="con_form">
			<form action="">
				<div class="phone">
					<i class="iconfont">&#xe65f;</i>
					<input type="text" placeholder="手机号" v-model="username" id="inp1" />
					<span>获取验证码</span>
				</div>
				<div class="pwd">
					<i class="iconfont">&#xe555;</i>
					<input type="password" placeholder="短信验证码" v-model="pwd" id="inp2" />
				</div>
				<p>首次用手机号登录将自动为您注册，并有豪礼相送。</p>
				<button @click="login()">登录</button>
				<div class="b">
					<b class="b1 btn1" @click='Toggle()'>账号密码登录</b><b class="b2">未收到验证码？</b>
				</div>

			</form>
		</div>
	</body>
</template>

<script>
	
	import axios from "axios"

	export default {
		name: 'Login',
		data() {
			return {
				username: "",
				pwd: ""
			}
		},
		methods:{
			login(){
				    if(  this.username == getCookie("username") &&  this.pwd == getCookie("pwd")){
				    	
				    }
	       		}
	       		
			}
		},
		created(){
			setCookie("usename","123"15);
			setCookie("pwd","123"15);			
		}

	}
</script>

<style scoped="scoped">
	body {
		width: 3.75rem;
		height: 6.67rem;
		background: url(../../../../static/img/login-bg.png) repeat;
		background-size: 100% auto;
	}
	
	.login_top {
		color: #75a739;
		height: .45rem;
		line-height: .45rem;
		font-size: 0.17rem;
	}
	
	.login_top .iconfont {
		margin-right: 1rem;
		margin-left: 0.1rem;
		font-size: 0.20rem;
		font-weight: 900;
	}
	
	form {
		margin-top: 50%;
		padding: 0 8%;
	}
	
	.phone,
	.pwd {
		width: 3.15rem;
		height: .35rem;
		margin: .2rem 0;
		border-bottom: .01rem solid #d8d8d8;
	}
	
	button {
		width: 3.15rem;
		height: 0.4rem;
		background: #bfbfbf;
		color: #fff;
		margin-top: .3rem;
		margin-bottom: .1rem;
		font-size: 0.16rem;
		border: 0;
		border: 1px solid #ccc;
	}
	
	.iconfont {
		font-size: 0.20rem;
		margin-right: 0.06rem;
	}
	
	.phone>span {
		color: #fff;
		display: inline-block;
		width: 0.7rem;
		background: #bfbfbf;
		height: .25rem;
		margin-left: .1rem;
		line-height: 0.25rem;
		border-radius: 5%;
		text-align: center;
	}
	
	p {
		height: .2rem;
		line-height: .2rem;
		font-size: .1rem;
		color: #878787;
	}
	
	.btn {
		display: block;
		width: 100%;
		height: .4rem;
		margin: 0.5rem 0 .15rem;
		border-radius: .02rem;
		background: #bfbfbf;
		;
		line-height: .4rem;
		font-size: .16rem;
		color: #fff;
		text-align: center;
	}
	
	input {
		background: none;
	}
	
	.b {
		display: flex;
		justify-content: space-between;
		color: #f93;
	}
	
	.con_form {
		display: flex;
		overflow-x: auto;
	}
	
	 ::-webkit-scrollbar {
		display: none
	}
</style>