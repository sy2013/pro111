<template>
	<div class="top" >
		<router-link to="./search" href="#" class="search" tag="div">
			<div class="top_div">
				<i class="iconfont">&#xe60c;</i>
				<span>奇异果</span>			
			</div>
		</router-link>		
			<List></List>
			<Content></Content>
			<Footer></Footer>
	</div>     
</template>

<script>
	import List from './List.vue' 
	import Content from './Content.vue' 
	import Footer from './../footer/Footer.vue' 
	export default {
		name : 'ClassifyHeader',
		components :{
			List,
			Content,
			Footer
		}
	}
</script>
<style scoped="scoped">
	.top{		
			width:100%;
			position: fixed;
		    top: 0;
		    left: 0;
		    height:0.46rem;
		    text-align: center;
		    background: #f8f8f8;
		    border-bottom: 0.01rem solid #d8d8d8;
		   }
	.top_div{
		width:96%;
		line-height: 0.29rem;
		margin:0.08rem auto;
		background: #eee;
		border-radius: 0.04rem;
		color: #878787;
		font-size: 0.13rem;
	}
	.iconfont{
		font-size:0.20rem;
	}	
	
</style>