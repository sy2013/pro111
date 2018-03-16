<template>
	<div>
		<ul>
			<li v-for='( nav , index ) in $store.state.content.classOneGroup' @click='changeId(nav.id),changeClass(index)' :class="{'active':index === current}" >
				{{nav.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios"
	
	export default {
		name : 'List',
		data (){
			return {
				current: 0
			}
		},
		methods :{
			changeId(id){
				axios.get('/v3/product/category_list?store_id_list=3&class_id=' + id)
				.then( (res) => {
					console.log(res);
					this.$store.dispatch('addToIdAa',res.data.data.childrenList[0]);
				})
			},
			changeClass(idx){
				this.current = idx
			}
		},
		mounted (){
			axios.get('/v3/product/category_list?store_id_list=3&class_id=')
			.then( (res)=>{	
//				console.log(res);
//               console.log(res.data.data);
//               console.log(res.data.data.childrenList[0]);
				this.$store.dispatch('addToIdA', res.data.data);
				this.$store.dispatch('addToIdAa',res.data.data.childrenList[0])
			} );
		}
		
	}
</script>

<style scoped="scoped">
	ul{
		position: fixed;
	    left: 0;
	    top: .47rem;
	    width: .8rem;
	    background: #f5f5f5;
	    text-align: center;
	    margin: 0;
	    overflow-y: auto;
	    height: calc(100% - .89rem);		
	} 
	li{
		height: .42rem;
	    width: .78rem;
	    line-height: .46rem;
	    font-size: .15rem;
	    color: #3a3a3a;
	    border: .02rem solid #f5f5f5;
	    border-right: 0;

	}
	.active{
		border-left: .02rem solid #65a032;
	    color: #65a032;
	    background: #fff;
	}
</style>