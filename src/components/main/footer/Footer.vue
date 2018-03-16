<template>
	<div class="footer">
		<div class="footer_div">
			<p><i class="iconfont">&#xe633;</i><span>首页</span></p>
			<p><i class="iconfont">&#xe612;</i><span>分类</span></p>
		<router-link :to="{name:'Login'}"><p><i class="iconfont">&#xe628;</i><span>购物车</span></p></router-link>
			<p><i class="iconfont">&#xe61d;</i><span>我的</span></p>
			
		</div>
	</div>
</template>

<script>
	export default {
		name : 'Footer'
		
	}
</script>

<style scoped="scoped">
	.footer{
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    position: fixed;
	    background: #fff;
	    height: .42rem;
	    font-size: .1rem;
	    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
	}
	.footer_div{
		 width: 100%;
		 height: .42rem;
		 display: flex;
		 align-items: center;
		 justify-content: space-around;
	}
	p{
		display: flex;
		flex-direction: column;
		
		font-size:0.13rem;
		color:#898989;
	}
	.iconfont{
		font-size:0.22rem;
	}
</style>