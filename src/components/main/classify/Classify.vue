<template>
	
	<div class="classify" >
	   <ClassifyHeader/>
	   <List></List>
	   <Content></Content>
	   <Footer></Footer>
		<router-view/>
	</div>

</template>

<script>
	import ClassifyHeader from './ClassifyHeader.vue'
	import List from './List.vue'
	export default {
		name : 'Classify',
		components :{
			ClassifyHeader,
			List
		}
	}
</script>

<style  scoped>

</style>