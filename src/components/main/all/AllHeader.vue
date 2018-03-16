<template>
	<div class="all_top">
		<div class="search">
			<router-link :to="{name: 'Classify'}"><i class="iconfont">&#xe606;</i></router-link>
			<h3>果园优选</h3>
			<router-link to=""><i class="iconfont">&#xe60c;</i></router-link>
		</div>
		<div class="nav">
			<span class="nav_slide" v-for="(item,index) in $store.state.listClass" @click="changeId(item.id),changeClass(index)" :class="{'active':index === current}">{{item.name}}</span>
		</div>
		<div class="sort">
			<ul>
				<li>综合</li>
				<li>销量</li>
				<li>价格</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from "axios"

	export default {
		name: "AllHeader",
		data() {
			return {
				current: 0
			}
		},
		methods: {
			changeId(id) {
				axios.get("/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=" + id + "&sort_type=1&tms_region_type=1")
                .then((res)=>{
//              	console.log(res);
                	this.$store.dispatch( 'addToBrotherAA',res.data.data.productGroup);

//              	console.log(res.data.data.brotherClass);
                });
			},
			changeClass(ind){
				this.current = ind;
			}
//				
		},
		mounted() {
			axios.get("/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=0&sort_type=1&tms_region_type=1")
				.then((res) => {
//									console.log(res.data.data.productGroup);
					this.$store.dispatch("addToTitleA", res.data.data.brotherClass);
					this.$store.dispatch("addToListAA", res.data.data.productGroup);

				});
		}
	}
</script>

<style scoped="scoped">
	.all_top {
		display: block;
		height: 1.1rem;
		background: rgba(248, 248, 248, .95);
		box-shadow: inherit;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		padding: .08rem 0;
		z-index: 11111;
		height: 1.26rem;
		display: box;
		line-height: .3rem;
	}
	
	.search {
		color: #76a741;
		align-items: center;
		width: 100%;
		height: 0.45rem;
		display: flex;
		font-size: .17rem;
		justify-content: space-between;
		padding: 0 0.08rem;
		border-bottom: .01rem solid #d8d8d8;
	}
	
	.iconfont {
		color: #76a741;
		font-size: 0.20rem;
	}
	
	.nav {
		width: 100%;
		height: 0.36rem;
		background: #fff;
		line-height: .36rem;
		overflow-x: auto;
		white-space: nowrap;
	}
	
	::-webkit-scrollbar {
		display: none
	}
	
	.nav_slide {
		text-align: center;
		display: inline-block;
		width:0.81rem;
		height: 0.36rem;
		margin: 0 0.25rem;
		font-size: 0.14rem;
	}
	
	.sort ul {
		display: flex;
		justify-content: space-around;
		line-height: 0.36rem;
		font-size: 0.14rem;
	}
	.active{
		border-bottom: .02rem solid #65a032;
	    color: #65a032;
	}
</style>