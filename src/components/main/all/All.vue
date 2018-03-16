<template>
	<div>
	   <AllHeader></AllHeader>
	   <AllList/>
<!--		<router-view />-->
	</div>
</template>

<script>
	import AllHeader from './AllHeader.vue'
	import AllList from './AllList.vue'
	export default{
		name:"All",
		components :{
			AllHeader,
			AllList
		}
	}
</script>

<style>
</style>