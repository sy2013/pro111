<template>
	<div class="items">
		<div v-if="$store.state.list.class2Name">
			<h3>{{$store.state.list.class2Name.name}}</h3>
			<router-link :to="{name: 'All'}"><a href=""><i class="all">全部   ></i></a></router-link>
			<dl v-for="item in $store.state.list.class3Group">
				<a href="">
					<dt><img :src="item.class_photo" alt="" /></dt>
					<dd>{{item.name}}</dd>
				</a>
			</dl>
		</div>		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default {
		name : "Content"
	}
</script>

<style scoped="scoped">
   	.items{
   	
   		   margin-left:0.8rem
   	}
   	.item{
   		margin-left: .8rem;
	    padding: .1rem .1rem .18rem .1rem;
	    position: relative;
   	}
   	h3{
   		font-weight: 400;
	    height: .46rem;
	    line-height: .46rem;
	    text-align: center;
	    margin: 0;
	    font-size: .14rem;
   	}
   	dl{
   		width: 33%;
	    float: left;
	    text-align: center;
	    padding-bottom: .2rem;
   	}
   	dt{
   		padding: 0 .1rem;
   	}
   	dd{
   		font-size: .13rem;
	    margin-top: .04rem;
	    color: #3a3a3a;
   	}
   	img{
		width:0.75rem;
		height: 0.75rem;
	}
	.all{
		display: block;
	    position: absolute;
	    top: .54rem;
	    right: 0;
	    height: .3rem;
	    line-height: .3rem;
	    font-size: .08rem;
	    color: #878787;
	    padding-right: .08rem;
	}
</style>